import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/createSpecificationController";
import { CreateSpecificationUseCase } from "../modules/cars/useCases/createSpecification/CreateSpecificationUseCase";

const specificationsRoutes = Router();
const createSpecificationController = new CreateSpecificationController();
specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };
