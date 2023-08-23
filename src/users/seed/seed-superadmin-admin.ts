import { Seeder } from 'typeorm-seeding';
import { roles } from '../entities/roles.entity'; // Import your roles enum if not already imported
import { UsersService } from '../users.service';
import { CreateUserInput } from '../dto/create-user.input';

export default class SeedSuperAdminAdmin implements Seeder {
  constructor(private readonly userService: UsersService) {}

  public async run(): Promise<void> {
    let superAdmin: CreateUserInput = {
      name: 'Super Admin',
      password: 'superadminpassword',
      email: 'superadmin@example.com',
      roles: [],
    };

    // let admin: CreateUserInput =     {
    //   name: 'Admin',
    //   password: 'adminpassword',
    //   email: 'admin@example.com',
    //   roles: [2],
    // }

    await this.userService.registerUser(superAdmin);

    /*
    // Create super admin role
    await connection.getRepository(Role).save({
      name: roles.SUPER,
    });

    // Create admin role
    await connection.getRepository(Role).save({
      name: roles.ADMIN,
    });

    // Create a super admin user
    await connection.getRepository(User).save({
      name: 'Super Admin',
      password: 'superadminpassword',
      email: 'superadmin@example.com',
      roles: [1], 
    });

    // Create an admin user
    await connection.getRepository(User).save({
      name: 'Admin',
      password: 'adminpassword',
      email: 'admin@example.com',
      roles: [2], // Assign role IDs (1 is super admin, 2 is admin, adjust as needed)
    });*/
  }
}
