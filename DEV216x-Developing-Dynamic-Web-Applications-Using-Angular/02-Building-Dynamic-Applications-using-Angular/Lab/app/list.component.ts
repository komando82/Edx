import {Component} from '@angular/core';
import {Student} from './student.data';

@Component({
  selector: 'list-component',
  templateUrl: 'app/list.component.html'
})
export class ListComponent {
    public students : Student[];
    constructor() {
        this.students = [
            {"firstName":"Durham","lastName":"Lewis","age":10,"teacher":"Waters"},
            {"firstName":"Pierce","lastName":"Kirkland","age":5,"teacher":"Roberson"},
            {"firstName":"Peters","lastName":"Juarez","age":7,"teacher":"Salas"},
            {"firstName":"Maryanne","lastName":"Moses","age":10,"teacher":"Ross"},
            {"firstName":"Hannah","lastName":"Le","age":9,"teacher":"Hays"},
            {"firstName":"Frazier","lastName":"Cardenas","age":7,"teacher":"Bates"}
        ];
    }
}