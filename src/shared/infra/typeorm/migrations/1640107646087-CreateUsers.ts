import {MigrationInterface, QueryRunner, QueryRunnerAlreadyReleasedError, Table} from "typeorm";

export class CreateUsers1640107646087 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "create table users(id varchar (50) PRIMARY KEY, name varchar (50) , username varchar(255) UNIQUE, email varchar(255),password varchar(255),driver_license varchar(255),isAdmin boolean default 0, created_at timestamp default CURRENT_TIMESTAMP)"
        );
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
