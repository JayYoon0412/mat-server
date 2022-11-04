import { Field, ObjectType } from "@nestjs/graphql";
import { MatMap } from "src/apis/matMap/entities/matMap.entity";
import { User } from "src/apis/user/entities/user.entity";
import { CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Dibs {

    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @ManyToOne(() => User)
    @Field(() => User)
    dibber: User;

    @ManyToOne(() => MatMap)
    @Field(() => MatMap)
    dibbed: MatMap;

    @CreateDateColumn()
    @Field(() => Date)
    createdAt: Date;
}