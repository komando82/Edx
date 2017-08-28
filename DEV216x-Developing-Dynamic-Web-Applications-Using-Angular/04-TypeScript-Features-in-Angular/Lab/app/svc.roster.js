"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RosterService = (function () {
    function RosterService() {
    }
    RosterService.prototype.getRoster = function () {
        var students = this.getStudents();
        var sortedStudents = students.sort(this.sortStudentsAgeDescending);
        return sortedStudents;
    };
    RosterService.prototype.getStudents = function () {
        return [
            { "firstName": "Buckley", "lastName": "Stone", "age": 5, "teacher": "Mcleod" },
        ];
    };
    RosterService.prototype.sortStudentsAgeDescending = function (left, right) {
        return right.age - left.age;
    };
    RosterService = __decorate([
        core_1.Injectable()
    ], RosterService);
    return RosterService;
}());
exports.RosterService = RosterService;
//# sourceMappingURL=svc.roster.js.map