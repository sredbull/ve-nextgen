import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class _UserRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(user: CreateUserDto) {
    return this.userRepository.save(user);
  }

  findOne(params: FindOneOptions<User> = {}) {
    return this.userRepository.findOne(params);
  }

  findAll(params: FindManyOptions<User> = {}) {
    return this.userRepository.find(params);
  }
}
