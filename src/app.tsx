import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid } from 'semantic-ui-react';
import TodoList from 'components/TodoList';
import MakeTodo from 'components/MakeTodo';
import LeftPanel from 'components/LeftPanel';

function App() {
    return (
        <Container>
            <h1>Todo list</h1>
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column width={6}>
                        <LeftPanel/>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <TodoList/>
                        <MakeTodo/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root'),
);
