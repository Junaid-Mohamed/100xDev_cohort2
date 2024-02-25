const x:number = 10;
console.log(x)

function greet(name:String){
    console.log("Hi ",name);
}

// ?if you return a+b then ts will be able to type infer that return is of type number only,
// but what if they return string or any other type hence writing the return type is imp.
function sum(a:number,b:number):number{
    console.log("Sum=",a+b);
    return a+b;
}

function isLegal(age:number):Boolean{
    if(age>=18) return true;
    else return false;
}

function takeInputFunction(cb:){
    setTimeout(()=>{
        cb();
    },1000)
}

takeInputFunction(()=>{console.log("Hi Worlds")})