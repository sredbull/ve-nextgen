import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Thing } from '../entities/thing.entity';
import { ThingsResolver } from '../resolvers/things.resolver';
import { ThingsService } from '../services/things.service';

@Module({
  imports: [TypeOrmModule.forFeature([Thing])],
  providers: [ThingsService, ThingsResolver],
  exports: [ThingsService],
})
export class ThingsModule {}
