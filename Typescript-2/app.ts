//  Objects
// type Person = {
// name : string;
// rollNo : number;
// hobbies : string[];
// email ?: string; //optional
// }

// let person : Person = {
//     name : "ashraf",
//     rollNo : 3423,
//     hobbies : ["videos Gaming"],
//     // email : ""
// }
// person.email =  "ali4282271@gmail.com";

// const persons : Person[] = [];
// persons.push({
//     name : "ali",
//     rollNo : 1234,
//     hobbies : ["cricket"],
//     email : "ali4282271@gmail.com"
// });

//function

// const add = function (val1 : number , val2 : number , cb : (x : string) => void) : number  {
//     cb("hello");
//     return val1 + val2;
// }
// let func : (x : number , y : number , z : (x : string) => void ) => number;
// func = add;

// string  literals or type literals ( | ) this operator is a union operator
type Calc = "add" | "subtract" | "-" | "+";
const add = function (val1 : number , val2 : number, calc : Calc)  {
    if (calc === "add" || calc === "+"){
        return val1 + val2;
    }else if (calc === "subtract" || calc === "-"){
        return val1 - val2;
    }
}
console.log(add(10, 5, "add"));
