import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSpecifications1638830252801 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "create table specifications(id varchar (50) PRIMARY KEY, name varchar (50) , description varchar(255), created_at timestamp default CURRENT_TIMESTAMP)"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("specifications");
    }
}
