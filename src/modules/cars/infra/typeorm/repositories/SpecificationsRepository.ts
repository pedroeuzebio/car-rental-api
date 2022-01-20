import { getRepository, Repository } from "typeorm";

import {
    ISpecificationsRepository,
    ICreateSpecificationDTO,
} from "../../../repositories/ISpecificationRepository";
import { Specification } from "../entities/Specification";

class SpecificationsRepository implements ISpecificationsRepository {
    private repository: Repository<Specification>;
    constructor() {
        this.repository = getRepository(Specification);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

    async create({
        description,
        name,
    }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            description,
            name,
        });
        await this.repository.save(specification);
    }

    async findByName(name: string): Promise<Specification> {
        const specification = this.repository.findOne({
            name,
        });
        return specification;
    }
}
export { SpecificationsRepository };
