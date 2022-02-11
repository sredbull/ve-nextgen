import { Resolver, Query } from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { FindManyOptions } from 'typeorm';
import { User } from '../entities/user.entity';
import { GqlAuthGuard } from '../auth/graphql/gql-auth.guard';
import { CurrentUser } from '../auth/graphql/gql-auth.decorator';

@Resolver((_of) => User)
export class UserResolver {
  constructor(@Inject(UserRepository) private userRepository: UserRepository) {}

  @Query((_returns) => [User])
  async users(params: FindManyOptions<User> = {}): Promise<User[]> {
    return this.userRepository.findAll(params);
  }

  @Query((_returns) => User)
  @UseGuards(GqlAuthGuard)
  whoAmI(@CurrentUser() user: User) {
    return this.userRepository.findOne({ where: { id: user.id } });
  }
}
