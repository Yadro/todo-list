import { makeAutoObservable } from 'mobx';
import { uuidv4 } from './Helper';

export class Category {
    id: string;
    name: string;
    color: string; // TODO
    isEditable: boolean;

    constructor(name: string, isEditable: boolean) {
        this.id = uuidv4();
        this.name = name;
        this.isEditable = isEditable;
        makeAutoObservable(this);
    }
}

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
}

export default new CategoriesStore();
