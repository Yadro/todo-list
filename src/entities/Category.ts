import { uuidv4 } from '../services/Helper';
import { makeAutoObservable } from 'mobx';

export default class Category {
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
