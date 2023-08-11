import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

export enum roles {
  SUPER = 'Super Admin',
  ADMIN = 'Admin',
  MEMBER = 'Member',
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

  @Field((type) => [User])
  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}
