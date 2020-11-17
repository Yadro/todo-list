import TodoItem from '../entities/TodoItem';
import { makeAutoObservable } from 'mobx';
import CategoryStore from './CategoryStore';

class TodoStore {
    todos: TodoItem[] = [];

    constructor() {
        makeAutoObservable(this);
        const categoryId = CategoryStore.currentCategory.id;
        this.todos = [
            new TodoItem('one', categoryId),
        ];
    }

    addItem(title: string) {
        const categoryId = CategoryStore.currentCategory.id
        this.todos.push(new TodoItem(title, categoryId));
    }

    get currentTodos(): TodoItem[] {
        const categoryId = CategoryStore.currentCategory.id;
        return this.todos.filter(i => i.categoryId === categoryId);
    }
}

export default new TodoStore();
