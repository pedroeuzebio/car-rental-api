import { AppError } from "../../../../errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
describe("Create Category", () => {
    beforeEach(() => {
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(
            categoriesRepositoryInMemory
        );
    });
    it("Should be able to create a new category ", async () => {
        const category = {
            name: "Category test",
            description: "Category description test",
        };
        await createCategoryUseCase.execute({
            name: category.name,
            description: category.description,
        });
        const categoyCreated = await categoriesRepositoryInMemory.findByName(
            category.name
        );
        console.log(categoyCreated);
        expect(categoyCreated).toHaveProperty("id");
    });
    it("Should not be able to create a new category with existing name ", async () => {
        expect(async () => {
            const category = {
                name: "Category test",
                description: "Category description test",
            };
            await createCategoryUseCase.execute({
                name: category.name,
                description: category.description,
            });
            await createCategoryUseCase.execute({
                name: category.name,
                description: category.description,
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});