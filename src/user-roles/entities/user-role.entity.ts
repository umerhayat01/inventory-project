import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Role } from 'src/roles/entities/role.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class UserRole {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @ManyToOne(() => User, (user) => user.userRoles)
  @Field((type) => User)
  user: User;

  @ManyToOne(() => Role, (role) => role.userRoles)
  @Field((type) => Role)
  role: Role;
}
