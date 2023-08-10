import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { UserRole } from 'src/user-roles/entities/user-role.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany(() => UserRole, (userRole) => userRole.role)
  @Field((type) => UserRole)
  userRoles: UserRole[];
}
