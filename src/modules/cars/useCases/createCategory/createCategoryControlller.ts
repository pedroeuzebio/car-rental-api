import { Response, Request } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) {}
    handle(request: Request, response: Response) {
        const { name, description } = request.body;
        // eslint-disable-next-line no-use-before-define
        this.createCategoryUseCase.execute({ name, description });
        return response.status(201).send();
    }
}

export { CreateCategoryController };
