import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserRolesMigration1691651209114 implements MigrationInterface {
  name = 'UserRolesMigration1691651209114';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user_role" ("id" SERIAL NOT NULL, CONSTRAINT "PK_fb2e442d14add3cefbdf33c4561" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user_role"`);
  }
}
