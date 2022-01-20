import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../../../errors/AppError";
import { UsersRepository } from "../../../../modules/accounts/infra/typeorm/repositories/usersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const autHeader = request.headers.authorization;
    if (!autHeader) {
        throw new AppError("Token missing", 401);
    }
    const [, token] = autHeader.split(" ");
    try {
        const { sub: user_id } = verify(
            token,
            "af8eb58bce3edb213f88a683a9221043"
        ) as IPayload;
        const usersRepository = new UsersRepository();
        const user = usersRepository.findById(user_id);
        if (!user) {
            throw new AppError("user does not exists!", 401);
        }
        request.user = {
            id: user_id,
        };
        next();
    } catch (error) {
        throw new AppError("Invalid Token!", 401);
    }
}
