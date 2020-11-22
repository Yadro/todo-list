import { makeAutoObservable } from 'mobx';
import Category from 'entities/Category';
import TodoStore from './TodoStore';

const defaultCategory = new Category('Index', false);

class CategoriesStore {
    currentCategory: Category = null;
    categories: Category[] = [];

    private static storeName = 'categories';

    constructor() {
        makeAutoObservable(this);
        this.restoreData();
    }

    addItem(): void {
        this.categories.push(new Category('', true));
        this.saveData();
    }

    removeItem(category: Category): void {
        this.categories = this.categories.filter(
            i => i.id !== category.id);
        TodoStore.changeCategory(category);
        this.saveData();
    }

    setCategory(category: Category): void {
        this.currentCategory = category;
    }

    private restoreData(): void {
        const data = window.localStorage.getItem(CategoriesStore.storeName);
        let parsedData = JSON.parse(data);
        if (!parsedData) {
            parsedData = [defaultCategory];
        }
        this.categories = parsedData;
        this.currentCategory = parsedData[0];
    }

    saveData(): void {
        window.localStorage.setItem(
            CategoriesStore.storeName,
            JSON.stringify(this.categories),
        );
    }
}

export default new CategoriesStore();
