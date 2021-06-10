import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import express, { Request, Response } from "express";

const app = express()
app.use(express.json())

//CREATE
app.post('/users', async(req: Request, res: Response)=> {
    const {name, email, role} = req.body

    try{
        const user = User.create({name, email, role})

        await user.save()
        return res.status(201).json(user)
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

//READ
app.get('/users', async (_:Request, res: Response)=>{
    try{
        const users = await User.find()

        return res.json(users)
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})
//UPDATE
//DELETE
//FIND

createConnection().then(async () => {
//    const user = new User();

//    user.lastName = "Wei";
//    user.firstName = "Ying";
//    user.email = "Wuxian@BurialMounds.com";
//    user.role = "Yiling Laozu";

//    await user.save()

//    console.log("Mo xuanyu is dead. Wei Ying is back, baby! DOon't tell Lan Zhan");
    app.listen(3000, ()=> console.log("the untamed shitpost has started"))
    
}).catch(error => console.log(error));
