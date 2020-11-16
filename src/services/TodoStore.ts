import TodoItem from './TodoItem';
import { makeAutoObservable } from 'mobx';

class TodoStore {
    todos: TodoItem[] = [];

    constructor() {
        makeAutoObservable(this);
        this.todos = [
            new TodoItem('one', null),
        ];
    }

    addItem(title: string) {
        this.todos.push(new TodoItem(title, null));
    }
}

export default new TodoStore();
