import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn} from "typeorm";

@Entity("users")
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    role: string;

    @Column({type: 'uuid'})
    uuid: string; 
    
    @CreateDateColumn()
    createdAt: Date;
    
    @CreateDateColumn()
    updatedAt: Date;
}
