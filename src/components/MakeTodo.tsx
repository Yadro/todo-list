import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { Button, Grid, Input } from 'semantic-ui-react';
import TodoStore from 'services/TodoStore';

function MakeTodo() {
    const [title, setTitle] = useState<string>('');

    function addTodo() {
        TodoStore.addItem(title);
        setTitle('');
    }

    return (
        <Grid columns={2}>
            <Grid.Row>
                <Grid.Column width={14}>
                    <Input
                        style={{ width: '100%' }}
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                    />
                </Grid.Column>
                <Grid.Column width={2}>
                    <Button
                        onClick={addTodo}
                    >+</Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default observer(MakeTodo);
