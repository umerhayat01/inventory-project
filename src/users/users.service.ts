import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { Admin, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Role, roles } from './entities/roles.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Role) private roleRepository: Repository<Role>,
  ) {}

  async registerUser(createUserInput: CreateUserInput): Promise<User> {
    const user = this.userRepository.create(createUserInput);
    return await this.userRepository.save(user);
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUserById(id: number) {
    return await this.userRepository.findOneOrFail({ where: { id: id } });
  }

  async updateUser(id: number, updateUserInput: UpdateUserInput) {
    // const user = await this.userRepository.findOne({ where: { id: id } });
    // if (user) {
    //   return await this.userRepository.save({
    //     ...user,
    //     ...updateUserInput,
    //   });
    // } else {
    //   throw new NotFoundException(`User with id ${id} not found`);
    // }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async createRoles(): Promise<Role> {
    // Create super admin role
    await this.roleRepository.save({
      name: roles.SUPER,
    });
    // Create admin role
    await this.roleRepository.save({
      name: roles.ADMIN,
    });

    return;
  }

  async insertAdmin() {}
}
