"use strict";
//   Decorators
function add(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else if (typeof x === "string" && typeof y === "string") {
        return x + y;
    }
    else {
        throw new Error("Type are not matched");
    }
}
const value = add("Hello", "world"); // type casting 
const value2 = add(5.3333, 5.34232); // type casting
console.log(value2.toFixed(2));
console.log(value.split(" "));
//# sourceMappingURL=app.js.map