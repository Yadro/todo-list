import React from 'react';
import { Dropdown } from 'semantic-ui-react';

export default function TodoListMenu() {
    return (
        <Dropdown icon='ellipsis vertical'>
            <Dropdown.Menu>
                <Dropdown.Item>Rename</Dropdown.Item>
                <Dropdown.Item>Remove list</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
