import { makeAutoObservable } from 'mobx';
import CategoryStore from './CategoryStore';
import TodoItem from 'entities/TodoItem';
import Category from 'entities/Category';

class TodoStore {
    todos: TodoItem[] = [];

    private static storeName = 'todo';

    constructor() {
        makeAutoObservable(this);
        this.restoreData();
    }

    addItem(title: string) {
        const categoryId = CategoryStore.currentCategory.id
        this.todos.push(new TodoItem(title, categoryId));
    }

    getCount(category: Category): number {
        return this.todos.filter(i =>
            i.categoryId === category.id && !i.completed
        ).length;
    }

    get currentTodos(): TodoItem[] {
        const categoryId = CategoryStore.currentCategory.id;
        return this.todos.filter(i => i.categoryId === categoryId);
    }

    private restoreData() {
        const data = window.localStorage.getItem(TodoStore.storeName);
        let parsedData = JSON.parse(data);
        if (!parsedData) {
            parsedData = [];
        }
        this.todos = parsedData;
    }

    saveData() {
        window.localStorage.setItem(
            TodoStore.storeName,
            JSON.stringify(this.todos),
        );
    }
}

export default new TodoStore();
