import { Field, Int, ObjectType } from "@nestjs/graphql";
import { MatZip } from "src/apis/matZip/entities/matZip.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Menu {

    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => String)
    number: string;

    @Column()
    @Field(() => String)
    name: string;

    @Column()
    @Field(() => String)
    description: string;

    @Column()
    @Field(() => Int)
    price: number;

    @Column()
    @Field(() => Int)
    likeCount: number;

    @Column()
    @Field(() => String)
    category: string;

    @ManyToOne(() => MatZip)
    @Field(() => MatZip)
    parentZip: MatZip;
}