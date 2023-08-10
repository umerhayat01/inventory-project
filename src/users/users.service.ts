import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRolesService } from 'src/user-roles/user-roles.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>, // private readonly userRoles: UserRolesService,
  ) {}

  async registerUser(createUserInput: CreateUserInput): Promise<User> {
    // const user = this.userRepository.create(createUserInput);
    // const abc=await this.userRoles.create()
    // return await this.userRepository.save(user);
    return;
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: number) {
    return await this.userRepository.findOneOrFail({ where: { id: id } });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
