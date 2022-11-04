import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUserInput } from "./dto/createUser.input";
import { UpdateUserInput } from "./dto/updateUser.input";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";

@Resolver()
export class UserResolver {

    constructor(private readonly userService: UserService) {}

    @Query(() => User)
    fetchUser(
        @Args('email') email: string
    ) {
        return this.userService.findUser({ email });
    }

    @Query(() => [User])
    fetchUsers() {
        return this.userService.findUsers();
    }

    @Query(() => User)
    fetchLoggedIn() {
        return this.userService.findLoggedInUser();
    }

    @Mutation(() => User)
    createUser(@Args('userInput') userInput: CreateUserInput) {
        return this.userService.create({ userInput });
    }

    @Mutation(() => User)
    updateUser(@Args('userInput') userInput: UpdateUserInput) {
        return this.userService.update({ userInput });
    }

    @Mutation(() => Boolean)
    deleteUser(@Args('userId') userId: string) {
        return this.userService.delete({ userId });
    }

    @Mutation(() => Boolean)
    resetPwd(
        @Args('email') email: string,
        @Args('newPwd') newPwd: string
    ) {
        return this.userService.resetPwd({ email, newPwd });
    }


}