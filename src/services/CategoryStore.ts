import { makeAutoObservable } from 'mobx';
import { Category } from 'entities/Category';

class CategoriesStore {
    currentCategory: Category = null;
    categories: Category[] = [];

    constructor() {
        makeAutoObservable(this);
        this.categories = [
            new Category('Index', false),
        ];
        this.currentCategory = this.categories[0];
    }

    addCategory() {
        this.categories.push(new Category('', true));
    }

    setCategory(category: Category) {
        this.currentCategory = category;
    }
}

export default new CategoriesStore();
