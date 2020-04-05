import { Teacher } from "../classes/teacher.js";
import { Student } from "../classes/student.js";
import { DataError } from './data-error.js';

export class FleetDataService {

    constructor() {
        this.teachers = [];
        this.students = []; 
        this.errors = [];       
    }   
    
    loadData(fleet) {
        for (let data of fleet) {
            switch(data.type) {
                case 'teacher':
                    if (this.validateTeacherData(data)) {
                        let teacher = this.loadTeacher(data);
                        if (teacher) 
                            this.teachers.push(teacher);
                    }
                    else {
                        let e = new DataError('invalid teacher data', data);
                        this.errors.push(e);
                    }
                    break;
                case 'student':
                    if (this.validateStudentData(data)) {
                    let student = this.loadStudent(data);
                    if (student) 
                        this.students.push(student);
                    }
                    else {
                        let e = new DataError('invalid student data', data);
                        this.errors.push(e);
                    }
                    break;
                default:
                    let e = new DataError('Invalid person type', data);
                    this.errors.push(e);
                    break;
            }
        }
    }

    loadTeacher(teacher) {
        try {
            return new Teacher(teacher.id, teacher.name, teacher.surname, teacher.age, teacher.classId);
        } catch(e) {
            this.errors.push(new DataError('error loading teacher', teacher));
        }
        return null;
    }

    validateTeacherData(teacher) {
        let requiredProps = 'id name surname age classId'.split(' ');
        let hasErrors = false;
        
        for (let field of requiredProps) {
            if (!teacher[field]) {
                this.errors.push(new DataError(`invalid field ${field}`, teacher));
                hasErrors = true;
            }
        }
        if (Number.isNaN(Number.parseFloat(teacher.age))) {
            this.errors.push(new DataError('invalid age', teacher));
            hasErrors = true;
        }
        return !hasErrors;
    }

    loadStudent(student) {
        try {
            return new Student(student.id, student.name, student.surname, student.age, student.classId);
        } catch(e) {
            this.errors.push(new DataError('error loading student', student));
        }
        return null;
    }

    validateStudentData(student) {
        let requiredProps = 'id name surname age classId'.split(' ');
        let hasErrors = false;
        
        for (let field of requiredProps) {
            if (!student[field]) {
                this.errors.push(new DataError(`invalid field ${field}`, student));
                hasErrors = true;
            }
        }
        if (Number.isNaN(Number.parseFloat(student.age))) {
            this.errors.push(new DataError('invalid age', student));
            hasErrors = true;
        }
        return !hasErrors;
    }

}