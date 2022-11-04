import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    async findUser({ email }) {
        return await this.userRepository.findOne({where: { email }});
    }

    async findUsers() {
        return await this.userRepository.find();
    }

    async findLoggedInUser() {
    }

    async create({ userInput }) {
        const { email, pwd, ...userInfo } = userInput;
        const userFound = await this.userRepository.findOne({ where: { email }});
        if ( userFound ) throw new ConflictException(" Error: Email Already In Use ");
        const hashedPwd = bcrypt.hash(pwd, 10);
        const newUser = await this.userRepository.save({
            ...userInfo, email, pwd: hashedPwd
        })
        return newUser;
    }

    async update({ userInput }) {

    }

    async delete({ userId }) {
        const result = await this.userRepository.softDelete({ id: userId });
        return result.affected ? true : false;
    }

    async resetPwd({ email, newPwd }) {

    }
}