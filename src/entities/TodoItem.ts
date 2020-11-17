import { makeAutoObservable } from 'mobx';
import { uuidv4 } from 'services/Helper';

export default class TodoItem {
    id: string = uuidv4();
    title: string = '';
    completed: boolean = false;
    dateCreation: Date = new Date();
    categoryId: string = null;

    constructor(title: string, categoryId: string) {
        this.title = title;
        this.categoryId = categoryId;
        makeAutoObservable(this);
    }
}
