import { makeAutoObservable } from 'mobx';

export default class TodoItem {
    id: number = Date.now();
    title: string = '';
    completed: boolean = false;
    dateCreation: Date = new Date();

    constructor(title: string) {
        makeAutoObservable(this);
        this.title = title;
    }
}
