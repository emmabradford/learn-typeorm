import {Entity, Column, ManyToOne} from "typeorm";
import Model from './model';
import {User} from './User';

@Entity('posts')
export class Post extends Model{
    @Column()
    title:string

    @Column()
    body: string 
    
    @ManyToOne(() => User)
    user: User
}