import { makeAutoObservable } from 'mobx';
import { uuidv4 } from './Helper';

export default class TodoItem {
    id: string = uuidv4();
    title: string = '';
    completed: boolean = false;
    dateCreation: Date = new Date();
    category: string = null;

    constructor(title: string, category: string) {
        this.title = title;
        this.category = category;
        makeAutoObservable(this);
    }
}
