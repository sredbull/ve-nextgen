import { Head } from './head.entity';
import { HeadDTO } from './head.dto';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Head])],
      resolvers: [{ DTOClass: HeadDTO, EntityClass: Head }],
    }),
  ],
})
export class HeadModule {}
