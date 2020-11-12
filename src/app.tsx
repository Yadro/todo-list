import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import TodoList from 'components/TodoList';
import MakeTodo from 'components/MakeTodo';
import TodoStore from 'services/TodoStore';

function App() {
    return (
        <Container>
            <h1>Todo list</h1>
            <TodoList todos={TodoStore.todos}/>
            <MakeTodo/>
        </Container>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root'),
);
