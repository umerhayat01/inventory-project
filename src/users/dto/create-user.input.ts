import { InputType, Int, Field } from '@nestjs/graphql';
import { Role } from '../entities/roles.entity';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  password: string;

  @Field()
  email: string;

  @Field()
  roles: Role[];
}
