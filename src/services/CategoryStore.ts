import { makeAutoObservable } from 'mobx';
import { Category } from 'entities/Category';

const defaultCategory = new Category('Index', false);

class CategoriesStore {
    currentCategory: Category = null;
    categories: Category[] = [];

    private static storeName = 'categories';

    constructor() {
        makeAutoObservable(this);
        this.restoreData();
    }

    addCategory() {
        this.categories.push(new Category('', true));
    }

    setCategory(category: Category) {
        this.currentCategory = category;
    }

    private restoreData() {
        const data = window.localStorage.getItem(CategoriesStore.storeName);
        let parsedData = JSON.parse(data);
        if (!parsedData) {
            parsedData = [defaultCategory];
        }
        this.categories = parsedData;
        this.currentCategory = parsedData[0];
    }

    saveData() {
        window.localStorage.setItem(
            CategoriesStore.storeName,
            JSON.stringify(this.categories),
        );
    }
}

export default new CategoriesStore();
