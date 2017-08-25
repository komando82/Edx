import {Injectable} from '@angular/core';
import {Student} from './student.data';

@Injectable()
export class RosterService {

    public getRoster() : Student[] {
        var students = this.getStudents();
        var sortedStudents = students.sort(this.sortStudentsAgeDescending);
        return sortedStudents;
    }

    private getStudents() : Student[] {
        return[
            {"firstName":"Buckley","lastName":"Stone","age":5,"teacher":"Mcleod"},
            {"firstName":"Emma","lastName":"Armstrong","age":7,"teacher":"Hobbs"},
            {"firstName":"Dawson","lastName":"Nunez","age":9,"teacher":"French"},
            {"firstName":"Padilla","lastName":"Knowles","age":7,"teacher":"Marquez"},
            {"firstName":"Lupe","lastName":"Vasquez","age":9,"teacher":"Osborn"},
            {"firstName":"Sofia","lastName":"Delaney","age":10,"teacher":"Simpson"},
            {"firstName":"Hopkins","lastName":"Delacruz","age":9,"teacher":"Puckett"}        
        ];
    }

    private sortStudentsAgeDescending(left : Student, right : Student) : number {
        return right.age - left.age;
    }

}