import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678295136054 implements MigrationInterface {
    name = 'default1678295136054'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_2c8a59389547d43655402392e58"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "REL_2c8a59389547d43655402392e5"`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_2c8a59389547d43655402392e58" FOREIGN KEY ("adm_id") REFERENCES "adm_accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_2c8a59389547d43655402392e58"`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "REL_2c8a59389547d43655402392e5" UNIQUE ("adm_id")`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_2c8a59389547d43655402392e58" FOREIGN KEY ("adm_id") REFERENCES "adm_accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
