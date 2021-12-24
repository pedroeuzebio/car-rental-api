import { Response, Request } from "express";

import { container } from "tsyringe";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;
        const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
        // eslint-disable-next-line no-use-before-define
        await createCategoryUseCase.execute({ name, description });
        return response.status(201).send();
    }
}

export { CreateCategoryController };
