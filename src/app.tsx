import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

function App() {
    return (
        <Container>
            <h1>Todo list</h1>
        </Container>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root'),
);
