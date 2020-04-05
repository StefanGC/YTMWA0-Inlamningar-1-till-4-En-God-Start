export class Person {
    constructor(id, name, surname, age) {
        this._id = id;
        this._name = name;
        this._surname = surname;
        this._age = age;
    }

    //Getter and setter methods
    get id() {return this._id}
    set id(value) {this._id = value}

    get name() {return this._name}
    set name(value) {this._name = value}

    get surname() {return this._surname}
    set surname(value) {this._surname = value}

    get age() {return this._age}
    set age(value) {this._age = value}
}