import { MigrationInterface, QueryRunner } from "typeorm";

export class default1680108052858 implements MigrationInterface {
    name = 'default1680108052858'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "requests" DROP CONSTRAINT "FK_9b9fce9ca7e20692b1575a25078"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "product_name" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "requests" ADD "product_name" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "requests" ADD "value" numeric(100,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "requests" ADD "amount" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "requests" ADD "photo" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adm_accounts" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "adm_accounts" ADD "username" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adm_accounts" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "adm_accounts" ADD "password" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "photo"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "photo" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "amount" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "value" numeric(100,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_accounts" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "user_accounts" ADD "username" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_accounts" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user_accounts" ADD "password" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_accounts" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user_accounts" ADD "email" character varying(40) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "requests" ALTER COLUMN "product_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_infos" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user_infos" ADD "name" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_infos" DROP COLUMN "last_name"`);
        await queryRunner.query(`ALTER TABLE "user_infos" ADD "last_name" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_infos" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "user_infos" ADD "cpf" character varying(11) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_infos" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "user_infos" ADD "cpf" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_infos" DROP COLUMN "last_name"`);
        await queryRunner.query(`ALTER TABLE "user_infos" ADD "last_name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_infos" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user_infos" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "requests" ALTER COLUMN "product_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_accounts" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user_accounts" ADD "email" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_accounts" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user_accounts" ADD "password" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_accounts" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "user_accounts" ADD "username" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "value" real NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "amount" real NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "photo"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "photo" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adm_accounts" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "adm_accounts" ADD "password" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adm_accounts" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "adm_accounts" ADD "username" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "requests" DROP COLUMN "photo"`);
        await queryRunner.query(`ALTER TABLE "requests" DROP COLUMN "amount"`);
        await queryRunner.query(`ALTER TABLE "requests" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "requests" DROP COLUMN "product_name"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "product_name"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "requests" ADD CONSTRAINT "FK_9b9fce9ca7e20692b1575a25078" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
