import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function insertUser(email:string,password:string,firstName:string,lastName:string){

    const res = await prisma.user.create({
        data:{
            email,
            password,
            firstName,
            lastName
        },
        select:{
            id:true,
            firstName:true
        }
    })
    console.log(res);

}

// insertUser("junai@gmail.com","pass","Mohammed","Junaid");

interface UpdateParam{
    firstName:string,
    lastName:string
}

async function updateUser(email:string,{firstName,lastName}:UpdateParam){
    const res = await prisma.user.update({
        where:{
            email
        },
        data:{
          firstName,
          lastName
        }

    })
    console.log(res);
}

// updateUser("junai@gmail.com",{firstName:"Junaid",lastName:"Mohammed"})

async function deleteUser(email:string){
    const res = await prisma.user.delete({
        where:{
            email
        }
    })
    console.log(res);
}

readUsers();

// deleteUser("junai@gmail.com");

async function readUsers(){
    const res = await prisma.user.findMany()
    console.log(res);
}