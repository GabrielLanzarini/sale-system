import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678227712946 implements MigrationInterface {
    name = 'default1678227712946'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "adm_accounts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" text NOT NULL, "password" text NOT NULL, CONSTRAINT "PK_cd0890aea07da079a878b467446" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "description" text NOT NULL, "photo" text NOT NULL, "amount" real NOT NULL, "value" real NOT NULL, "created_at" date NOT NULL, "adm_id" uuid, CONSTRAINT "REL_2c8a59389547d43655402392e5" UNIQUE ("adm_id"), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_accounts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" text NOT NULL, "password" text NOT NULL, "email" text NOT NULL, CONSTRAINT "PK_125e915cf23ad1cfb43815ce59b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "requests" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "sale_date" date NOT NULL, "product_id" uuid, "user_id" uuid, CONSTRAINT "REL_9b9fce9ca7e20692b1575a2507" UNIQUE ("product_id"), CONSTRAINT "REL_9e5e2eb56e3837b43e5a547be2" UNIQUE ("user_id"), CONSTRAINT "PK_0428f484e96f9e6a55955f29b5f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_infos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "last_name" text NOT NULL, "cpf" text NOT NULL, "user_id" uuid, CONSTRAINT "REL_a71db1054b3702f88d46d12034" UNIQUE ("user_id"), CONSTRAINT "PK_dff10c2d65f58909fbd2f88bff5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_2c8a59389547d43655402392e58" FOREIGN KEY ("adm_id") REFERENCES "adm_accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "requests" ADD CONSTRAINT "FK_9b9fce9ca7e20692b1575a25078" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "requests" ADD CONSTRAINT "FK_9e5e2eb56e3837b43e5a547be23" FOREIGN KEY ("user_id") REFERENCES "user_accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_infos" ADD CONSTRAINT "FK_a71db1054b3702f88d46d120345" FOREIGN KEY ("user_id") REFERENCES "user_accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_infos" DROP CONSTRAINT "FK_a71db1054b3702f88d46d120345"`);
        await queryRunner.query(`ALTER TABLE "requests" DROP CONSTRAINT "FK_9e5e2eb56e3837b43e5a547be23"`);
        await queryRunner.query(`ALTER TABLE "requests" DROP CONSTRAINT "FK_9b9fce9ca7e20692b1575a25078"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_2c8a59389547d43655402392e58"`);
        await queryRunner.query(`DROP TABLE "user_infos"`);
        await queryRunner.query(`DROP TABLE "requests"`);
        await queryRunner.query(`DROP TABLE "user_accounts"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "adm_accounts"`);
    }

}
