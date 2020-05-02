import { Person } from "./person.js";

export class Teacher extends Person {
    constructor (id, name, surname, age, classId) {
        super(id, name, surname, age);
        this.classId = classId;
    }

    //Getter and setter methods
    get classId() {return this._classId}
    set classId(value) {this._classId = value}
}