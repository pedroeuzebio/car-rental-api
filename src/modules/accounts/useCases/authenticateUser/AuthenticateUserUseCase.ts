import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";

import { UsersRepository } from "../../infra/typeorm/repositories/usersRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    email: string;
    password: string;
}
interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}
@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository") private usersRepository: IUsersRepository
    ) {}
    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email);
        if (!user) {
            throw new AppError("Email or password incorrect");
        }
        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new AppError("Email or password incorrect");
        }
        // eslint-disable-next-line prettier/prettier
        const token = sign({}, "af8eb58bce3edb213f88a683a9221043", {subject:user.id, expiresIn: "1d"});
        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email,
            },
        };
        return tokenReturn;
    }
}

export { AuthenticateUserUseCase };
