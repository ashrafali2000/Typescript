"use strict";
//Tuples        //fixed length of array is called tuples
// let gender : [string, string ] = ["Male", "Female"];
// gender[1] = "lala";
// let admin : [number, string] = [1, "admin"];
// let error : [number, string] = [404, "not foumd"];
//Class
//first way
// class Student {
//     name : string;
//     rollNo : number;
//     constructor (n : string, r : number) {
//         this.name = n;
//         this.rollNo = r;
//     }
// }
// const student1 = new Student("zaid", 123);
// console.log(student1);
//second way
class Student {
    constructor(name, rollNO) {
        this.name = name;
        this.rollNO = rollNO;
        this.skills = [];
    }
    addSkill(skill1, skill2, skill3) {
        // this.skills = ["ashraf"];
        this.skills.push(skill1, skill2, skill3);
    }
}
const student1 = new Student("zaid", 123);
student1.addSkill("Javascript", "Html", "Css");
const student2 = new Student("ashraf", 456);
student2.addSkill("Python", "Java", "Swift");
console.log(student1, student2);
//# sourceMappingURL=app.js.map