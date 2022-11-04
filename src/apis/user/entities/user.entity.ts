import { Field, ObjectType } from "@nestjs/graphql";
import { Dibs } from "src/apis/dibs/entities/dibs.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class User {

    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => String)
    name: string;

    @Column()
    @Field(() => String)
    username: string;

    @Column()
    @Field(() => String)
    email: string;

    @Column()
    pwd: string;

    @Column()
    @Field(() => String)
    institution: string;

    @Column()
    @Field(() => Date)
    createdAt: Date;

    @Column()
    @Field(() => String)
    address: string;
}