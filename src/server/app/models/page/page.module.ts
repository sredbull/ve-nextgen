import { Page } from './page.entity';
import { PageDTO } from './page.dto';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Page])],
      resolvers: [{ DTOClass: PageDTO, EntityClass: Page }],
    }),
  ],
})
export class PageModule {}
