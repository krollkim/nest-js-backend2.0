import { Entity } from "typeorm/decorator/entity/Entity";
import { Column } from "typeorm/decorator/columns/Column";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";

@Entity("newcontact")
export class Contact {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;
    
    @Column()
    createTime: string;

    @Column()
    email: string;
    
    @Column()
    phone: string;

    @Column()
    content: string;

    @Column({type: 'boolean', default: false})
    isCompleted: boolean;
}