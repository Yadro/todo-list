import React, { useState } from 'react';
import TodoItem from 'services/TodoItem';
import { Checkbox, Input, List } from 'semantic-ui-react';
import { observer } from 'mobx-react';

function TodoList({ todos }: { todos: TodoItem[] }) {
    const [editId, setEditId] = useState<number>(null);

    const list = todos.map(todo =>
        <List.Item key={todo.id}>
            <List.Content>
                <Checkbox/>
                {editId === todo.id ?
                    <Input
                        size='small'
                        value={todo.title}
                    /> :
                    <span onClick={() => setEditId(todo.id)}>
                        {todo.title}
                    </span>
                }

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
