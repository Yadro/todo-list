import { makeAutoObservable } from 'mobx';

export default class TodoItem {
    id: number = Date.now();
    title: string = '';
    completed: boolean = false;
    dateCreation: Date = new Date();
    category: string = null;

    constructor(title: string, category: string) {
        makeAutoObservable(this);
        this.title = title;
        this.category = category;
    }
}
