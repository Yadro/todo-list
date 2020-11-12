import TodoItem from './TodoItem';

export default class TodoStore {
    todos: TodoItem[] = [];

    constructor() {
        this.todos = [
            new TodoItem('one'),
            new TodoItem('two'),
        ]
    }
}
