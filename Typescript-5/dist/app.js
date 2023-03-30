"use strict";
// Union operator
// let abc : string | number = "Apple";
// abc = 1233;
function log(creature) {
    if ("runningSpeed" in creature) { //type gaurds
        console.log(creature.runningSpeed);
    }
}
const sparrow = {
    name: "sparrow",
    flyingSpeed: 150
};
log(sparrow);
//according to assignment
//dummyJSON
//# sourceMappingURL=app.js.map