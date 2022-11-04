import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {

    helloUser() {
        return "Hello User!"
    }
}