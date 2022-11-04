import { Field, ObjectType } from "@nestjs/graphql";
import { MatZip } from "src/apis/matZip/entities/matZip.entity";
import { User } from "src/apis/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class MatMap {

    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => String)
    name: string;

    @CreateDateColumn()
    @Field(() => Date)
    createdAt: Date;

    @Column()
    @Field(() => String)
    areaCode: string;

    @ManyToOne(() => User)
    @Field(() => User)
    creator: User;

    @JoinTable()
    @ManyToMany(() => MatZip, (zipList) => zipList.parentMap)
    @Field(() => [MatZip])
    zipList: MatZip[];
}