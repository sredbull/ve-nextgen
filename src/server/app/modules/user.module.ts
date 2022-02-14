import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UserResolver } from '../resolvers/user.resolver';
import { _UserRepository } from '../repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [_UserRepository, UserResolver],
  exports: [_UserRepository],
})
export class UserModule {}
