import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum categories {
  APPAREL = 'apparel',
  BOOKS = 'books',
  HEALTH = 'health',
  GENERAL = 'general',
}

registerEnumType(categories, {
  name: 'categories',
});

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  price: number;

  @Column({ type: 'enum', enum: categories, default: categories.GENERAL })
  @Field()
  category: categories;
}
