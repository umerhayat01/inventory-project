import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class UserRole {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;
}
