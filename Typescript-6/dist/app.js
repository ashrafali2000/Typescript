"use strict";
// TYPE CASTING
// const input = document.getElementById("input1")! as HTMLInputElement; //(i)
// const input1 = <HTMLInputElement>document.getElementById("input1");//(ii)
//(i)method
//TYPE GENERICS / GENERIC
// const promiseFunc : Promise <string> =  new Promise ((resolve, reject) => {
// setTimeout(() => {
// resolve("task performed successfully!!");
// },2000);
// });
// promiseFunc.then((data) =>{
// console.log(data.split(" "));
// });
//(ii)method
// function promiseFunc() : Promise <string> {
//     return  new Promise ((resolve, reject) => {
//     setTimeout(() => {
//     resolve("task performed successfully!!");
//     },2000);
//     });
// }
//     promiseFunc().then((data) =>{
//         var arr = data.split(" ");
//     console.log(arr.join(" "));
//     });
//(iii)method
// const promiseFunc = () : Promise <string> => {
// return new Promise ((resolve, reject) => {
//     setTimeout(() => {
//     resolve("task performed successfully!!");
//     },2000);
//     });
// }
//     promiseFunc().then((data) =>{
//     console.log(data.split(" "));
//     });
//     console.log("Asslamualikum");
//(iv) method width objects
// type user = {
//     name : string;
//     id : number;
// }
// const promiseFunc = () : Promise <user> => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//         resolve({
//             name : "ashrsf",
//             id : 1234
//         });
//         },2000);
//         });
//     }
//         promiseFunc().then((data) =>{
//         console.log(data.name);
//         });
//         console.log("Asslamualikum");
// Merge Objects
// function merge(objA:object, objB:object) {
//         return{...objA, ...objB};
// }
// const merged = merge({name : "ashrsf"}, {id : 123});
// console.log(merged);
//Generics
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const merged = merge({ name: "ashrsf" }, { id: 123 });
console.log(merged.name);
//# sourceMappingURL=app.js.map