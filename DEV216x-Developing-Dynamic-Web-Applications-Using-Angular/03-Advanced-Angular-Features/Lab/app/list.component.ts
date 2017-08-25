import {Component} from '@angular/core';
import {Student} from './student.data';
import {RosterService} from './svc.roster';

@Component({
    selector: 'list-component',
    templateUrl: 'app/list.component.html',
    providers: [RosterService]
})
export class ListComponent {
    public students : Student[];
    constructor(private _rosterService : RosterService) {
        this.students = _rosterService.getRoster();
    }
}