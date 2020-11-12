import React from 'react';
import { observer } from 'mobx-react';
import { Button, Grid, Input } from 'semantic-ui-react';

function MakeTodo() {
    return (
        <Grid columns={2}>
            <Grid.Row>
                <Grid.Column width={14}>
                    <Input style={{ width: '100%' }}/>
                </Grid.Column>
                <Grid.Column width={2}>
                    <Button>+</Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

export default observer(MakeTodo);
