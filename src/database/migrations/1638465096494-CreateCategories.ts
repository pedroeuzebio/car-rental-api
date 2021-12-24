import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategories1638465096494 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.createTable(
        //     new Table({
        //         name: "categories",
        //         columns: [
        //             {
        //                 name:"id",
        //                 type: "varchar",
        //                 isPrimary: true,
        //             },
        //             {
        //                 name: "name",
        //                 type: "varchar"

        //             },
        //             {
        //                 name: "description",
        //                 type: "varchar"
        //             },
        //             {
        //                 name : "created_at",
        //                 type: "timestamp",
        //                 default: "now"
        //             }
        //         ],

        //     })
        // )
        await queryRunner.query(
            "create table categories(id varchar (50) PRIMARY KEY, name varchar (50) , description varchar(255), created_at timestamp default CURRENT_TIMESTAMP)"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categories");
    }

}
