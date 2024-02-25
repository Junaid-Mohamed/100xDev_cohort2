"use strict";
const x = 10;
console.log(x);
function greet(name) {
    console.log("Hi ", name);
}
// ?if you return a+b then ts will be able to type infer that return is of type number only,
// but what if they return string or any other type hence writing the return type is imp.
function sum(a, b) {
    console.log("Sum=", a + b);
    return a + b;
}
function isLegal(age) {
    if (age >= 18)
        return true;
    else
        return false;
}
function takeInputFunction(cb) {
    setTimeout(cb, 3000);
}
takeInputFunction(() => { console.log("Hi Worlds"); });
