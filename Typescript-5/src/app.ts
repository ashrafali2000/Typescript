// Union operator
// let abc : string | number = "Apple";
// abc = 1233;

// type Animale = {
//     name : string;
//     runningSpeed : number;
// }
// type Bird = {
//     name : string;
//    flyingSpeed : number;
// }

// Union Types
// type Creatures = Animale | Bird;
// const tiger : Creatures = {
//     name : "tigre",
//     runningSpeed : 200
// }

// Intersection Types
// type Creatures = Animale & Bird;
// const coacroch : Creatures = {
//     name : "coacroch",
//     runningSpeed : 200,
//     flyingSpeed : 300
// }

//  Interfaces
// interface Animale {
//     name : string;
//     runningSpeed : number
// }
// interface Bird {
//     name : string;
//     flyingSpeed : number
// }
// interface Creatures extends Animale, Bird {}

// const tiger : Creatures = {
//         name : "tigre",
//         runningSpeed : 200,
//         flyingSpeed : 10
//     }


// interface Animale {
//     name : string;
//     runningSpeed : number;
//     eat(food : string) : string
// }
// class Tiger implements Animale {
//     constructor (public name : string, public runningSpeed: number) {}
//     eat(food : string) {
//         return "Eating food";
//     }
// }

//Type Gaurds
type Animale = {
        name : string;
        runningSpeed : number;
    }
    type Bird = {
        name : string;
       flyingSpeed : number;
    }
    type Creatures = Animale | Bird;
    function log (creature : Creatures ) {
        if ("runningSpeed" in creature) {  //type gaurds
        console.log(creature.runningSpeed);
    }
    }
    const sparrow : Creatures= {
        name : "sparrow",
        flyingSpeed : 150
    }
    log(sparrow);


    //according to assignment
    //dummyJSON