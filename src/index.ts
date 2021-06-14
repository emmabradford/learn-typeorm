import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import express, { Request, Response } from "express";
import { Post } from "./entity/Post";

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
app.put('/users/:uuid', async(req: Request, res: Response)=>{
    const uuid = req.params.uuid
    const {name, email, role} = req.body

    try{
        const user = await User.findOneOrFail({uuid})

        user.name = name || user.name
        user.email = email || user.email
        user.role = role || user.role
        await user.save()
        return res.json(user)
    }catch(err){
        console.log(err)
        return res.status(500).json({ error: 'Oh No WHO THE F*** MUREDERED THE UNTAMED SHITPOST!'})

    }

})

//DELETE
app.delete('/users/:uuid', async(req: Request, res: Response) =>{
    const uuid = req.params.uuid
    try{
        const user = await User.findOneOrFail({uuid})
        await user.remove()
        return res.status(204).json({message: "You killed them"})
    } catch(err){
        console.log(err)
        return res.status(500).json({error:"SOME FUCKER KILLED the UNTAMED SHITPOST"})
    }
})

//FIND
app.get('/users/:uuid', async(req: Request, res: Response) => {
    const uuid = req.params.uuid
    try{
        const user = await User.findOneOrFail({uuid})
        return res.json(user)
    }catch(err){
        console.log(err)
        return res.status(404).json({user: "I could not find them!"})
    }
})

//CREATE A POST
app.post('/posts', async(req: Request, res: Response)=>{
    const {userUuid, title, body} = req.body
    try{
        const user = await User.findOneOrFail({uuid: userUuid})
        const post = new Post({title, body, user})
        await post.save()
        return res.json(post)
    } catch(err){
        console.log(err)
        return res.status(500).json({error:'It did not work'})
    }
})

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
