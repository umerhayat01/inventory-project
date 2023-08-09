import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum roles {
  SUPER = 'super Admin',
  ADMIN = 'admin',
  MEMBER = 'member',
}

@Entity()
@ObjectType()
export class Role {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: roles;
  default: roles.MEMBER;
}
