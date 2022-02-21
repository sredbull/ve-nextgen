import { Main } from './main.entity';
import { MainDTO } from './main.dto';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { MainResolver } from './main.resolver';

@Module({
  providers: [MainResolver],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Main])],
      dtos: [{ DTOClass: MainDTO }],
    }),
  ],
})
export class MainModule {}
