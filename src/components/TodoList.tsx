import React, { useState } from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import { Button, Checkbox, Grid, Input, List, Menu } from 'semantic-ui-react';
import { cn } from 'services/Helper';
import TodoItem from 'entities/TodoItem';
import TodoStore from 'services/TodoStore';
import TodoListMenu from './TodoListMenu';
import './TodoList.css';

export default observer(function TodoList() {
    const [editId, setEditId] = useState<string>(null);
    let timerId: number;

    const onCheckboxClick = action((todo: TodoItem): void => {
        todo.completed = !todo.completed;
        TodoStore.saveData();
    });

    const onTitleChange = (todo: TodoItem) => {
        return action((e) => {
            todo.title = e.target.value;
            if (timerId) {
                clearTimeout(timerId);
            }
            timerId = window.setTimeout(() => {
                TodoStore.saveData();
            }, 200);
        });
    }

    const list = TodoStore.currentTodos.map(todo =>
        <List.Item key={todo.id}>
            <List.Content className='todo-item'>
                <Checkbox
                    checked={todo.completed}
                    onChange={() => onCheckboxClick(todo)}
                />
                <span
                    className={cn(
                        'todo-title',
                        todo.completed && 'todo-item__completed'
                    )}
                >
                    {editId === todo.id ?
                        <Input
                            size='small'
                            value={todo.title}
                            transparent
                            onChange={onTitleChange(todo)}
                        /> :
                        <span onClick={() => setEditId(todo.id)}>
                            {todo.title}
                        </span>
                    }
                </span>
                <Button circular icon='trash'/>
            </List.Content>
        </List.Item>
    );
    return (
        <div>
            <Grid>
                <Grid.Column floated='right' width={1}>
                    <TodoListMenu/>
                </Grid.Column>
            </Grid>
            <List divided>
                {list}
            </List>
        </div>
    );
});
