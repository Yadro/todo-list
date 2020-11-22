import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { Button, Input } from 'semantic-ui-react';
import TodoStore from 'services/TodoStore';
import './MakeTodo.css';

function MakeTodo(): JSX.Element {
    const [title, setTitle] = useState<string>('');

    function addTodo(): void {
        TodoStore.addItem(title);
        setTitle('');
    }

    return (
        <div className='make-todo'>
            <Input
                className='make-todo--input'
                value={title}
                onChange={(e) =>
                    setTitle(e.target.value)
                }
            />
            <Button
                onClick={addTodo}
                icon='plus circle'
            />
        </div>
    );
}

export default observer(MakeTodo);
