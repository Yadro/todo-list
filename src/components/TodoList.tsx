import React, { useState } from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import TodoItem from 'services/TodoItem';
import { Checkbox, Input, List } from 'semantic-ui-react';
import './TodoList.css';

function TodoList({ todos }: { todos: TodoItem[] }) {
    const [editId, setEditId] = useState<number>(null);

    const onCheckboxClick = action((todo: TodoItem): void => {
        todo.completed = !todo.completed;
    });

    const onTitleChange = (todo: TodoItem) => {
        return action((e) => {
            todo.title = e.target.value;
        });
    }

    const list = todos.map(todo =>
        <List.Item key={todo.id}>
            <List.Content>
                <Checkbox
                    checked={todo.completed}
                    onChange={() => onCheckboxClick(todo)}
                />
                <span className='todo-title'>
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
