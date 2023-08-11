import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUSerAssociation1691737244483 implements MigrationInterface {
    name = 'AddUSerAssociation1691737244483'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "UserRoles" ("userId" integer NOT NULL, "roleId" integer NOT NULL, CONSTRAINT "PK_64638eac129969085b987f6826f" PRIMARY KEY ("userId", "roleId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a6b832f61ba4bd959c838a1953" ON "UserRoles" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_5f1d6fdea1024424fd60b193b9" ON "UserRoles" ("roleId") `);
        await queryRunner.query(`ALTER TABLE "UserRoles" ADD CONSTRAINT "FK_a6b832f61ba4bd959c838a1953b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "UserRoles" ADD CONSTRAINT "FK_5f1d6fdea1024424fd60b193b9f" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "UserRoles" DROP CONSTRAINT "FK_5f1d6fdea1024424fd60b193b9f"`);
        await queryRunner.query(`ALTER TABLE "UserRoles" DROP CONSTRAINT "FK_a6b832f61ba4bd959c838a1953b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5f1d6fdea1024424fd60b193b9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a6b832f61ba4bd959c838a1953"`);
        await queryRunner.query(`DROP TABLE "UserRoles"`);
    }

}
