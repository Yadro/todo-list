import TodoItem from './TodoItem';
import { makeAutoObservable } from 'mobx';

class TodoStore {
    todos: TodoItem[] = [];

    constructor() {
        makeAutoObservable(this);
        this.todos = [
            new TodoItem('one'),
            new TodoItem('two'),
        ];
    }

    addItem(title: string) {
        this.todos.push(new TodoItem(title));
    }
}

export default new TodoStore();
