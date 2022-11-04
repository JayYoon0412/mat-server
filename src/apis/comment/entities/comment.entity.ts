import { Field, ObjectType } from "@nestjs/graphql";
import { MatZip } from "src/apis/matZip/entities/matZip.entity";
import { User } from "src/apis/user/entities/user.entity";
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Tree, TreeChildren, TreeParent } from "typeorm";

@Tree('closure-table')
@Entity()
@ObjectType()
export class Comment extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    @Field(() => String)
    id: string;

    @Column()
    @Field(() => String)
    content: string;

    @CreateDateColumn()
    @Field(() => Date)
    createdAt: Date;

    @DeleteDateColumn()
    @Field(() => Date)
    deletedAt: Date;

    @ManyToOne((() => User))
    @Field(() => User)
    writer: User;

    @TreeChildren({ cascade: true })
    @Field(() => [Comment], { nullable: true })
    subComments: Comment[];

    @TreeParent()
    @Field(() => Comment)
    parentComment: Comment;

    @ManyToOne(() => MatZip, { cascade: true, onDelete: 'CASCADE', eager: true })
    @Field(() => MatZip)
    parentZip: MatZip;

}