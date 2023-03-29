// Access modefire

// class Product {
//     constructor(
//         private id: number,
//         private name: string,
//         private price: number
//     ) {
//     }
//     public getId(): number {
//         return this.id;
//     }
//     public getName(): string {
//         return this.name;
//     }
//     public getPrice(): number {
//         return this.price;
//     }
// }
// const product1 = new Product(1, "Cup", 100);
// console.log(product1.getName());

//Geters And Seters    // IN geters function you must kept return there   // IN setes function you must kept a parameter there
// class Product {
//     constructor(
//         private _id: number,
//         private _name: string,
//         private _price: number
//     ) {}
//     //Geters
//     get id () {
//         return this._id;
//     }
//     get name () {
//         return this._name;
//     }

//     get price (){
//         return this._price;
//     }

//     //Seters

//     set id (newId : number) {
//         if (!newId) {
//         throw  new Error ("Name cannot be empty");
//         }
//         else {
//         this._id = newId;
//         }
//     }

//     set name (newName : string) {
//         if (!newName) {
//         throw  new Error ("Name cannot be empty");
//         }
//         else {
//         this._name = newName;
//         }
//     }

//     set price (newName : number) {
//         if (!newName) {
//         throw  new Error ("Name cannot be empty");
//         }
//         else {
//         this._price = newName;
//         }
//     }
// }
// // const product1 = new Product(1, "Cup", 100);
// // console.log(product1);
// // product1.name = "Apple";
// // product1.id = 4;
// // product1.price = 200;
// // console.log(product1.id,product1.name,product1.price);

// //first child class
// class ClothingProducts extends Product {
//     constructor(
//         id :number,
//         name : string,
//         price : number,
//         private _color : string,
//         private _size : "S" | "M" | "L" | "XL"
//     ){super (id , name, price )}
// }

// const tshirt = new ClothingProducts (2, "T-shirt", 300, "red", "M");
// console.log(tshirt);

//second child class
// class ElectronicProducts extends Product {
//     constructor(
//         id :number,
//         name : string,
//         price : number,
//         private _brands : string,
//         private _model : string
//     ){super (id , name, price )}

// }
// var iron = new ElectronicProducts(3, "Iron", 300, "Toyota", "v3");
// console.log(iron);


// ABSTRACT CLASS and Methods

// abstract class Product {
//     constructor(
//         private _id: number,
//         private _name: string,
//         private _price: number
//     ) {}

//     //Geters
//     get id () {
//         return this._id;
//     }
//     get name () {
//         return this._name;
//     }

//     get price (){
//         return this._price;
//     }

//     //Seters
//     set id (newId : number) {
//         if (!newId) {
//         throw  new Error ("Name cannot be empty");
//         }
//         else {
//         this._id = newId;
//         }
//     }

//     set name (newName : string) {
//         if (!newName) {
//         throw  new Error ("Name cannot be empty");
//         }
//         else {
//         this._name = newName;
//         }
//     }

//     set price (newName : number) {
//         if (!newName) {
//         throw  new Error ("Name cannot be empty");
//         }
//         else {
//         this._price = newName;
//         }
//     }
//     abstract getDiscountRates() :number;
// }

// //first child class
// class ClothingProducts extends Product {
//     constructor(
//         id :number,
//         name : string,
//         price : number,
//         private _color : string,
//         private _size : "S" | "M" | "L" | "XL"
//     ){super (id , name, price )}

//     getDiscountRates() {
//        return this.price * 0.9;
//     }
// }

// //second child class
// class ElectronicProducts extends Product {
//     constructor(
//         id :number,
//         name : string,
//         price : number,
//         private _brands : string,
//         private _model : string
//     ){super (id , name, price )}

//     getDiscountRates() {
//         return this.price * 0.5;
//      }
// }
// var iron = new ElectronicProducts(3, "Iron", 300, "Toyota", "v3");
// console.log(iron);


// SINGLETONSE 
class UTil {
    static instance: UTil;
    private constructor() { }
    static getinstance() {
        if (!this.instance) {
            this.instance = new UTil();
        }
        return this.instance;
    }
}
const utl1 = UTil.getinstance();
const utl2 = UTil.getinstance();
