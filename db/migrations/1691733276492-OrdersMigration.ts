import { MigrationInterface, QueryRunner } from "typeorm";

export class OrdersMigration1691733276492 implements MigrationInterface {
    name = 'OrdersMigration1691733276492'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."order_orderstatus_enum" AS ENUM('pending', 'Approved')`);
        await queryRunner.query(`CREATE TABLE "order" ("id" SERIAL NOT NULL, "orderStatus" "public"."order_orderstatus_enum" NOT NULL DEFAULT 'pending', CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TYPE "public"."order_orderstatus_enum"`);
    }

}
