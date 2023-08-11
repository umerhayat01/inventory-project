import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductsMigration1691733150489 implements MigrationInterface {
    name = 'ProductsMigration1691733150489'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."product_category_enum" AS ENUM('apparel', 'books', 'health', 'general')`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, "category" "public"."product_category_enum" NOT NULL DEFAULT 'general', CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TYPE "public"."product_category_enum"`);
    }

}
