import {Entity, Column, OneToMany} from "typeorm";
import Model from './model';
import {Post} from './Post';

@Entity("users")
export class User extends Model {
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    role: string;

    @OneToMany(()=> Post, (post)=> post.user)
    posts: Post[]
}
