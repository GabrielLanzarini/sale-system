import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678299059621 implements MigrationInterface {
    name = 'default1678299059621'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "requests" DROP CONSTRAINT "FK_9b9fce9ca7e20692b1575a25078"`);
        await queryRunner.query(`ALTER TABLE "requests" DROP CONSTRAINT "FK_9e5e2eb56e3837b43e5a547be23"`);
        await queryRunner.query(`ALTER TABLE "requests" DROP COLUMN "sale_date"`);
        await queryRunner.query(`ALTER TABLE "requests" ADD "sale_date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "requests" DROP CONSTRAINT "REL_9b9fce9ca7e20692b1575a2507"`);
        await queryRunner.query(`ALTER TABLE "requests" DROP CONSTRAINT "REL_9e5e2eb56e3837b43e5a547be2"`);
        await queryRunner.query(`ALTER TABLE "requests" ADD CONSTRAINT "FK_9b9fce9ca7e20692b1575a25078" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "requests" ADD CONSTRAINT "FK_9e5e2eb56e3837b43e5a547be23" FOREIGN KEY ("user_id") REFERENCES "user_accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "requests" DROP CONSTRAINT "FK_9e5e2eb56e3837b43e5a547be23"`);
        await queryRunner.query(`ALTER TABLE "requests" DROP CONSTRAINT "FK_9b9fce9ca7e20692b1575a25078"`);
        await queryRunner.query(`ALTER TABLE "requests" ADD CONSTRAINT "REL_9e5e2eb56e3837b43e5a547be2" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "requests" ADD CONSTRAINT "REL_9b9fce9ca7e20692b1575a2507" UNIQUE ("product_id")`);
        await queryRunner.query(`ALTER TABLE "requests" DROP COLUMN "sale_date"`);
        await queryRunner.query(`ALTER TABLE "requests" ADD "sale_date" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "requests" ADD CONSTRAINT "FK_9e5e2eb56e3837b43e5a547be23" FOREIGN KEY ("user_id") REFERENCES "user_accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "requests" ADD CONSTRAINT "FK_9b9fce9ca7e20692b1575a25078" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
