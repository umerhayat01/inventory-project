import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum roles {
  SUPER = 'super Admin',
  ADMIN = 'admin',
  MEMBER = 'member',
}

registerEnumType(roles, {
  name: 'roles',
});

@Entity()
@ObjectType()
export class Role {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column({ type: 'enum', enum: roles, default: roles.MEMBER })
  @Field()
  name: roles;
}
