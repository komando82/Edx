"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ListComponent = (function () {
    function ListComponent() {
        this.students = [
            { "firstName": "Durham", "lastName": "Lewis", "age": 10, "teacher": "Waters" },
            { "firstName": "Pierce", "lastName": "Kirkland", "age": 5, "teacher": "Roberson" },
            { "firstName": "Peters", "lastName": "Juarez", "age": 7, "teacher": "Salas" },
            { "firstName": "Maryanne", "lastName": "Moses", "age": 10, "teacher": "Ross" },
            { "firstName": "Hannah", "lastName": "Le", "age": 9, "teacher": "Hays" },
            { "firstName": "Frazier", "lastName": "Cardenas", "age": 7, "teacher": "Bates" }
        ];
    }
    ListComponent = __decorate([
        core_1.Component({
            selector: 'list-component',
            templateUrl: 'app/list.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map