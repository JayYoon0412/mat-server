import { Field, Int, ObjectType } from "@nestjs/graphql";
import { MatMap } from "src/apis/matMap/entities/matMap.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class MatZip {

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
    address: string;

    @Column()
    @Field(() => Int)
    likeCount: number;

    @Column()
    @Field(() => String)
    category: string;

    @ManyToMany(() => MatMap, (parentMap) => parentMap.zipList)
    @Field(() => [MatMap])
    parentMap: MatMap[];
}