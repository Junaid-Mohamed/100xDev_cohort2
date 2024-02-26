interface Person{
    name:string;
    age:number;
    greet(phrase:string):void;
}


// Generics

type Input = number[]| string[];

function firstEle(arr:Input){
    return arr[0];
}

//  few problems exists in this.
// 1. cannot modify the o/p assuming with the way of i/p
// console.log(firstEle(["Junaid","Suhail"]).toUpperCase());

// 2. user cannot give only one type of i/p they can give of mix bag of values of the type this funtion takes in.
// when type is like this it is problem type Input = number| string;
// const value = firstEle([1,2,3,"Junaid","Suhail"]);
//  we can fix this by telling type to be of type arr of either one type. -> type Input = number[]| string[];

const value = firstEle([1,2,3]);

//  to fix this both issues, Generics

// smallest ex for Generics

function identity<T>(arg:T[]){
    return arg[0];
}

// also no need to say explicityly the type of return, ts will infer implicitly the type.

let op1 = identity(["String","Array"]);
let op2 = identity([1,2,3]);

console.log(op1.toUpperCase());

// if you want to avoid mixed bag of array, explicityly tell the function of they type

let op3 = identity(["string",1,2])
console.log();

let op4 = identity<String>(["string","only","input"]);
console.log(op4);















// from sample.ts file 

// on way for defining type for object.
// but when you have to use this obj at differenet places it would require you to re write this type again in that place.
// which voilates the DRY principle,
// hence you use the interface here

// function isLegal(user:{
//     firstName:string,
//     lastName:string,
//     age:number
// }):Boolean{
//     if(user.age>=18) return true;
//     else return false;
// }

// function isLegal1(user:User):Boolean{
//     if(user.age>=18) return true;
//     else return false;
// }

// interface User{
//         firstName:string,
//         lastName:string,
//         age:number
// }

// isLegal({
//     firstName:"Mohammed",
//     lastName:"Junaid",
//     age:25
// })