"use strict";
function firstEle(arr) {
    return arr[0];
}
const value = firstEle([1, 2, 3]);
function identity(arg) {
    return arg[0];
}
let op1 = identity(["String", "Array"]);
let op2 = identity([1, 2, 3]);
console.log(op1.toUpperCase());
let op3 = identity(["string", 1, 2]);
console.log();
let op4 = identity(["string", "only", "input"]);
console.log(op4);
