import { Specification } from "../model/Specification";
import {
    ISpecificationsRepository,
    ICreateSpecificationDTO,
} from "../repositories/ISpecificationRepository";

class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];
    constructor() {
        this.specifications = [];
    }
    findByName(name: string) {
        const specification = this.specifications.find(
            (specification) => specification.name === name
        );
        return specification;
    }
    create({ description, name }: ICreateSpecificationDTO): void {
        const specification = new Specification();
        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });
        this.specifications.push(specification);
    }
}
export { SpecificationsRepository };