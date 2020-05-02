import { Person } from "./person.js";

export class Student extends Person {
    constructor (id, name, surname, age, classId) {
        super(id, name, surname, age);
        this._classId = classId;
    }

    //Getter and setter methods
    get classId() {return this._classId}
    set classId(value) {this._classId = value}
}