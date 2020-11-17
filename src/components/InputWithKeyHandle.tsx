import React from 'react';
import { Input, InputProps } from 'semantic-ui-react';

interface Props extends InputProps {
    onPressEnter: () => void;
}

export function InputWithKeyHandle(props: Props): JSX.Element {
    const { onPressEnter, ...inputProps } = props;
    function onKeyDown(e) {
        if (e.key === 'Enter') {
            onPressEnter();
        }
    }

    return (
        <Input {...inputProps} onKeyDown={onKeyDown}/>
    );
}
