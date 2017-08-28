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
        ];
    }

    private sortStudentsAgeDescending(left : Student, right : Student) : number {
        return right.age - left.age;
    }

}