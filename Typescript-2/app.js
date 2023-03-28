//  Objects
// type Person = {
// name : string;
// rollNo : number;
// hobbies : string[];
// email ?: string; //optional
// }
var add = function (val1, val2, calc) {
    if (calc === "add" || calc === "+") {
        return val1 + val2;
    }
    else if (calc === "subtract" || calc === "-") {
        return val1 - val2;
    }
};
console.log(add(10, 5, "+"));
