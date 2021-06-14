import {Entity, ManyToOne, Column} from "typeorm";
import Model from './model';
import {User} from './User';

@Entity('posts')
export class Post extends Model{
    @Column()
    title:string

    @Column()
    body: 
    
    @ManyToOne(()=> User)
    user: User

    constructor({title, body}: {title: string, body: string}){
        super()
        Object.assign(this, {title, body})
    }
}