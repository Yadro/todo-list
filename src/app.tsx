import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import TodoList from 'components/TodoList';
import MakeTodo from 'components/MakeTodo';
import LeftPanel from 'components/LeftPanel';
import './app.css';

function App() {
    return (
        <Container>
            <h1>Todo list</h1>
            <div className='main'>
                <LeftPanel/>
                <div className='todo-container'>
                    <TodoList/>
                    <MakeTodo/>
                </div>
            </div>
        </Container>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root'),
);
