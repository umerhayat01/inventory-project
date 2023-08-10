import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserRoleInput {
  @Field()
  userId: number;

  @Field()
  roleId: number;
}
