import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";

@Resolver()
export class AuthResolver {
    constructor(
        private readonly authService: AuthService
    ) {}

    @Mutation(() => String)
    async login(
        @Args('email') email: string,
        @Args('pwd') pwd: string,
        @Context() context: any
    ) {
        // find user by email
        // if does not exist, throw error
        // check password
        // if does not equal, throw error
        // only then set token
    }
}