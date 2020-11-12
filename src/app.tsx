import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import TodoList from 'components/TodoList';
import MakeTodo from 'components/MakeTodo';
import TodoStore from 'services/TodoStore';

function App() {
    const todoStore = new TodoStore();
    return (
        <Container>
            <h1>Todo list</h1>
            <TodoList todos={todoStore.todos}/>
            <MakeTodo/>
        </Container>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root'),
);
