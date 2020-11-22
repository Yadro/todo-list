import { makeAutoObservable } from 'mobx';
import CategoryStore from './CategoryStore';
import TodoItem from 'entities/TodoItem';
import Category from 'entities/Category';

class TodoStore {
    todos: TodoItem[] = [];

    private static storeName = 'todo';

    constructor() {
        this.restoreData();
        makeAutoObservable(this);
    }

    addItem(title: string): void {
        const categoryId = CategoryStore.currentCategory.id;
        this.todos.push(new TodoItem(title, categoryId));
        this.saveData();
    }

    removeItem(item: TodoItem): void {
        this.todos = this.todos.filter(i => i.id !== item.id);
        this.saveData();
    }

    changeCategory(category: Category): void {
        const defaultCategory = CategoryStore.categories[0];
        this.todos
            .filter(i => i.categoryId === category.id)
            .forEach(i => {
                i.categoryId = defaultCategory.id;
            });
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

    private restoreData(): void {
        const data = window.localStorage.getItem(TodoStore.storeName);
        let parsedData = JSON.parse(data);
        if (!parsedData) {
            parsedData = [];
        }
        this.todos = parsedData;
    }

    saveData(): void {
        window.localStorage.setItem(
            TodoStore.storeName,
            JSON.stringify(this.todos),
        );
    }
}

export default new TodoStore();
