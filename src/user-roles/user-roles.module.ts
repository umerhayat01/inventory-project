import { Module } from '@nestjs/common';
import { UserRolesService } from './user-roles.service';
import { UserRolesResolver } from './user-roles.resolver';

@Module({
  providers: [UserRolesResolver, UserRolesService],
})
export class UserRolesModule {}
