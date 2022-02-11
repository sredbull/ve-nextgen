import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { UserResolver } from '../resolvers/user.resolver';
import { UserRepository } from '../repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserRepository, UserResolver],
  exports: [UserRepository],
})
export class UserModule {}
