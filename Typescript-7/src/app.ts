//   Decorators

//(i) example

// function Logger(constructor: Function) { //Decorator Factory
// console.log("LOGGIN...")
// }

// @Logger   //atteched decorator
// class Person {
//     name ="ashraf";

//     constructor(){

//     }
// }

//(ii) example

// function Logger() { //Decorator Factory
//     return function () {
//         return function (constructor: Function) {
//             console.log("LOGGIN...")
//         }
//     }
// }

// @Logger()()   //atteched decorator
// class Person {
//     name = "ashraf";

//     constructor() {

//     }
// }

//(iii)

// function Logger(message: string) { //Decorator Factory
//     return function (constructor: Function) {
//         console.log("LOGGIN...")
//         console.log(message);
        
//     }
// }
// function fillHtml(template: string, elemId :string) { //Decorator Factory
//     return function (constructor: Function) {
//         console.log(constructor);
//     const elem = document.getElementById(elemId);
//     if (elem){
//         elem.innerHTML = template;
//     }
//     }
// }

// @Logger("I am from Person class")   //atteched decorator
// @fillHtml("<h1>Asslamualikum</h1>", "app")
// class Person {
//     name = "ashraf";
//     constructor() {
//     }
// }


//(other Example)

// function Logger(message: string) { //Decorator Factory
//     return function (constructor: Function) {
//         console.log("LOGGIN...")
//         console.log(message);
        
//     }
// }
// function fillHtml(template: string, elemId :string) { //Decorator Factory
//     return function (constructor: any) {
//     const elem = document.getElementById(elemId);
//     const p = new constructor();
//     if (elem){
//         elem.innerHTML = p.name;
//     }
//     }
// }

// @Logger("I am from Person class")   //atteched decorator
// @fillHtml("<h1>Asslamualikum</h1>", "app")
// class Person {
//     name = "Ashraf";
//     constructor() {
//     }
// }


//Example with h1
// function Logger(message: string) { //Decorator Factory
//     return function (constructor: Function) {
//         console.log("LOGGIN...")
//         console.log(message);
        
//     }
// }
// function fillHtml(template: string, elemId :string) { //Decorator Factory
//     return function (constructor: any) {
//     const elem = document.getElementById(elemId);
//     const p = new constructor();
//     if (elem){
//         elem.innerHTML = template;
//         elem.querySelector("h1")!.innerText = p.name;
//     }
//     }
// }

// @Logger("I am from Person class")   //atteched decorator
// @fillHtml("<h1>Asslamualikum</h1>", "app")
// class Person {
//     name = "Ashraf";
//     constructor() {
//     }
// }

 //Example with b
// function Logger(message: string) { //Decorator Factory
//     return function (constructor: Function) {
//         console.log("LOGGIN...")
//         console.log(message);
        
//     }
// }
// function fillHtml(template: string, elemId :string) { //Decorator Factory
//     return function (constructor: any) {
//     const elem = document.getElementById(elemId);
//     const p = new constructor();
//     if (elem){
//         elem.innerHTML = template;
//         elem.querySelector("b")!.innerText = p.name;
//     }
//     }
// }

// @Logger("I am from Person class")   //atteched decorator
// @fillHtml("<b>Asslamualikum</b>", "app")
// class Person {
//     name = "Ashraf";
//     constructor() {
//     }
// }

//Example without decorator

// class Person {
//     name = "Ashraf";
//     constructor() {
//     }
// }
// function fillHtml(template: string, elemId :string) { 
//     const elem = document.getElementById(elemId);
//     const p = new Person();
//     if (elem){
//         elem.innerHTML = template;
//         elem.querySelector("b")!.innerText = p.name;
//     }
// }
// fillHtml("<b>Asslamualikum</b>", "app");

//                 Decoratro with two class

// function Logger(message: string) { //Decorator Factory
//     return function (constructor: Function) { //Decorator
//         console.log("LOGGIN...")
//         console.log(constructor);  // this constructor just check when we run
        
//     }
// }
// function fillHtml(template: string, elemId :string) { //Decorator Factory
//     return function (constructor: any) { //Decorator
//     const elem = document.getElementById(elemId);
//     const p = new constructor();
//     if (elem){
//         elem.innerHTML = template;
//         elem.querySelector("b")!.innerText = p.name;
//     }
//     }
// }

// @Logger("I am from Person class")   //atteched decorator
// @fillHtml("<b>Asslamualikum</b>", "app")
// class Person {
//     name = "Ashraf";
//     constructor() {
//     }
// }

// @fillHtml("<b>Hello animal</b>", "app1")
// @Logger("I am from Animal class")
// class Animal {
//     name = "Cat";
//     constructor() {
//     }
// }

//  Function overloading
// type Combined = string | number;
// function add(x : number , y : number) : number;  // Number implementation
// function add(x : string , y : string) : string; // String implementation
// function add(x : Combined , y : Combined) {
//     if (typeof x === "number"&& typeof y === "number"){
//         return x + y;
//     }
//     else if (typeof x === "string" && typeof y === "string"){
//         return x + y;
//     }
//     else {
//         throw new Error ("Type are not matched");
//     }
// }
// const value = add("Hello" , "world");
// const value2 = add(5.3333 , 5.34232);
// console.log(value2.toFixed(2));
// console.log(value.split(" "));

//  Second way with Type Casting

type Combined = string | number;
function add(x : Combined , y : Combined) {
    if (typeof x === "number"&& typeof y === "number"){
        return x + y;
    }
    else if (typeof x === "string" && typeof y === "string"){
        return x + y;
    }
    else {
        throw new Error ("Type are not matched");
    }
}
const value = add("Hello" , "world")! as string;  // type casting 
const value2 = add(5.3333 , 5.34232)! as number;  // type casting
console.log(value2.toFixed(2));
console.log(value.split(" "));