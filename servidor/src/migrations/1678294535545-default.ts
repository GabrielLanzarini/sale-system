import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678294535545 implements MigrationInterface {
    name = 'default1678294535545'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "created_at" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "created_at" DROP DEFAULT`);
    }

}
