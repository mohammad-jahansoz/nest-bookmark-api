import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Users from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly user_repository: Repository<Users>,
  ) {}

  async findAll() {
    return await this.user_repository.find();
  }

  async createUser(data: CreateUserDto) {
    const user = this.user_repository.create(data);
    await this.user_repository.save(user);
    return user;
  }

  async findUserByEmail(email: string) {
    return await this.user_repository.findOneBy({ email: email });
  }
}
