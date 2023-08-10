import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserRolesService } from './user-roles.service';
import { UserRole } from './entities/user-role.entity';
import { CreateUserRoleInput } from './dto/create-user-role.input';
import { UpdateUserRoleInput } from './dto/update-user-role.input';

@Resolver(() => UserRole)
export class UserRolesResolver {
  constructor(private readonly userRolesService: UserRolesService) {}

  @Mutation(() => UserRole)
  createUserRole(@Args('createUserRoleInput') createUserRoleInput: CreateUserRoleInput) {
    return this.userRolesService.create(createUserRoleInput);
  }

  @Query(() => [UserRole], { name: 'userRoles' })
  findAll() {
    return this.userRolesService.findAll();
  }

  @Query(() => UserRole, { name: 'userRole' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userRolesService.findOne(id);
  }

  @Mutation(() => UserRole)
  updateUserRole(@Args('updateUserRoleInput') updateUserRoleInput: UpdateUserRoleInput) {
    return this.userRolesService.update(updateUserRoleInput.id, updateUserRoleInput);
  }

  @Mutation(() => UserRole)
  removeUserRole(@Args('id', { type: () => Int }) id: number) {
    return this.userRolesService.remove(id);
  }
}
