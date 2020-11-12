import React from 'react';
import { observer } from 'mobx-react';
import { Input } from 'semantic-ui-react';

function MakeTodo() {
    return (
        <Input />
    );
}

export default observer(MakeTodo);
