import {Entity, Column} from "typeorm";
import Model from './model';

@Entity('posts')
export class user extends Model{
    @Column()
    title:string

    @Column()
    body: string
}