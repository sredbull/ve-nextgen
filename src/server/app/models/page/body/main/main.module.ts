import { Main } from './main.entity';
import { MainDTO } from './main.dto';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Main])],
      resolvers: [{ DTOClass: MainDTO, EntityClass: Main }],
    }),
  ],
})
export class MainModule {}
