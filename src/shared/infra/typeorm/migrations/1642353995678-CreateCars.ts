import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCars1642353995678 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "create table cars(id varchar (50) PRIMARY KEY, name varchar (50) , description varchar(255), daily_rate numeric,available boolean default 1,license_plate varchar(255),fine_amount numeric, brand  varchar(255), category_id varchar (50) , created_at timestamp default CURRENT_TIMESTAMP, constraint FKCategoryCar foreign key (category_id) references categories(id) )"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cars");
    }
}