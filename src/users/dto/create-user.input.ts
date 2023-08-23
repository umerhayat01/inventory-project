import { InputType, Field } from '@nestjs/graphql';
import { Role, roles } from '../entities/roles.entity';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  password: string;

  @Field()
  email: string;

  @Field((type) => [roles])
  roles: Role[];
}
