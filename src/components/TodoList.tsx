import React, { useState } from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import { Checkbox, Input, List } from 'semantic-ui-react';
import { cn } from 'services/Helper';
import TodoItem from 'entities/TodoItem';
import TodoStore from 'services/TodoStore';
import './TodoList.css';

function TodoList() {
    const [editId, setEditId] = useState<string>(null);

    const onCheckboxClick = action((todo: TodoItem): void => {
        todo.completed = !todo.completed;
    });

    const onTitleChange = (todo: TodoItem) => {
        return action((e) => {
            todo.title = e.target.value;
        });
    }

    const list = TodoStore.currentTodos.map(todo =>
        <List.Item key={todo.id}>
            <List.Content>
                <Checkbox
                    checked={todo.completed}
                    onChange={() => onCheckboxClick(todo)}
                />
                <span
                    className={cn([
                        'todo-title',
                        todo.completed && 'todo__completed'
                    ])}
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
            </List.Content>
        </List.Item>
    );
    return (
        <List divided>
            {list}
        </List>
    );
}

export default observer(TodoList);
