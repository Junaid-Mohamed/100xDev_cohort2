// on way for defining type for object.
// but when you have to use this obj at differenet places it would require you to re write this type again in that place.
// which voilates the DRY principle,
// hence you use the interface here

function isLegal(user:{
    firstName:string,
    lastName:string,
    age:number
}):Boolean{
    if(user.age>=18) return true;
    else return false;
}

function isLegal1(user:User):Boolean{
    if(user.age>=18) return true;
    else return false;
}

interface User{
        firstName:string,
        lastName:string,
        age:number
}

isLegal({
    firstName:"Mohammed",
    lastName:"Junaid",
    age:25
})