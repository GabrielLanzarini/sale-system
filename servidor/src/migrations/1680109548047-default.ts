import { MigrationInterface, QueryRunner } from "typeorm";

export class default1680109548047 implements MigrationInterface {
    name = 'default1680109548047'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_2c8a59389547d43655402392e58"`);
        await queryRunner.query(`ALTER TABLE "requests" DROP CONSTRAINT "FK_9e5e2eb56e3837b43e5a547be23"`);
        await queryRunner.query(`ALTER TABLE "user_infos" DROP CONSTRAINT "FK_a71db1054b3702f88d46d120345"`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_2c8a59389547d43655402392e58" FOREIGN KEY ("adm_id") REFERENCES "adm_accounts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "requests" ADD CONSTRAINT "FK_9e5e2eb56e3837b43e5a547be23" FOREIGN KEY ("user_id") REFERENCES "user_accounts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_infos" ADD CONSTRAINT "FK_a71db1054b3702f88d46d120345" FOREIGN KEY ("user_id") REFERENCES "user_accounts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_infos" DROP CONSTRAINT "FK_a71db1054b3702f88d46d120345"`);
        await queryRunner.query(`ALTER TABLE "requests" DROP CONSTRAINT "FK_9e5e2eb56e3837b43e5a547be23"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_2c8a59389547d43655402392e58"`);
        await queryRunner.query(`ALTER TABLE "user_infos" ADD CONSTRAINT "FK_a71db1054b3702f88d46d120345" FOREIGN KEY ("user_id") REFERENCES "user_accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "requests" ADD CONSTRAINT "FK_9e5e2eb56e3837b43e5a547be23" FOREIGN KEY ("user_id") REFERENCES "user_accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_2c8a59389547d43655402392e58" FOREIGN KEY ("adm_id") REFERENCES "adm_accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
