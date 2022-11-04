import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateUserInput {

    @Field(() => String)
    name: string;

    @Field(() => String)
    username: string;

    @Field(() => String)
    email: string;

    @Field(() => String)
    pwd: string;

    @Field(() => String, { nullable: true })
    institution: string;

    @Field(() => String)
    address: string;

}