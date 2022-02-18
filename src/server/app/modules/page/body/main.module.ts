import { Main } from '../../../entities/page/body/main.entity';
import { MainDTO } from '../../../dtos/page/body/main.dto';
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
