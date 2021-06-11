import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, BeforeInsert} from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity('users')
export class user extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title:string

    @Column()
    body: string

    @Column({type: 'uuid'})
    uuid: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @BeforeInsert()
    createUuid(){
        this.uuid = uuid()
    }

    toJSON(){
        return {...this, id: undefined}
    }

}