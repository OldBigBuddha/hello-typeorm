import { MigrationInterface, QueryRunner, Table, TableColumnOptions } from "typeorm";

const ID_COLUMN: TableColumnOptions = {
    name: "id",
    type: "integer",
    isGenerated: true,
    isPrimary: true,
    generationStrategy: "increment",
    comment: "ID",
}

const UUID_COLUMN: TableColumnOptions = {
    name: "uuid",
    type: "uuid",
    isNullable: false,
    isUnique: true,
    generationStrategy: "uuid",
    comment: "UUID",
}

const FIRST_NAME_COLUMN: TableColumnOptions= {
    name: "first_name",
    type: "varchar",
    length: "64",
    isNullable: false,
    comment: "名"
}

const LAST_NAME_COLUMN: TableColumnOptions= {
    name: "last_name",
    type: "varchar",
    length: "64",
    isNullable: false,
    comment: "姓",
}

const AGE_COLUMN: TableColumnOptions= {
    name: "age",
    type: "integer",
    isNullable: false,
    comment: "年齢",
}

const RND_COLUMN: TableColumnOptions = {
    name: "rnd",
    type: "char",
    length: "16",
    isNullable: false,
    comment: "JWT用のランダム文字列"
}

const USERS_TABLENAME = "users";
const USERS_TABLE = new Table({
    name: USERS_TABLENAME,
    columns: [
        ID_COLUMN,
        UUID_COLUMN,
        FIRST_NAME_COLUMN,
        LAST_NAME_COLUMN,
        AGE_COLUMN,
        RND_COLUMN,
    ],
});


export class CreateUsers1639918698661 implements MigrationInterface {
    name = '202112191CreateUsers1639918698661'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(USERS_TABLE);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(USERS_TABLENAME);
    }

}
