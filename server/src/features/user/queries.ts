import { prisma } from "../../lib/prisma.js";

const createUser: ()=>Promise<void> = async() =>{
   try{
        await prisma.user.create({
            data:{
                firstName: 'john',
                lastName: "doe",
                email: "johndoe@doe.com",
                birthDate: "01.01.2020"
            }
        })
        console.log("account created") ;
   }catch(err){
    console.log("could not create account");
   }
}

const query ={
    createUser
}

export{
    query
}