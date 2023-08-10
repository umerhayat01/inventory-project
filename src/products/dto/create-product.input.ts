import { InputType, Int, Field } from '@nestjs/graphql';
import { categories } from '../entities/product.entity';

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  price: number;

  @Field()
  category: categories;
}
