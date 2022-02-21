import { Article } from './article.entity';
import { Markdown } from './markdown/markdown.entity';
import { ArticleDTO } from './article.dto';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Article, Markdown])],
      resolvers: [{ DTOClass: ArticleDTO, EntityClass: Article }],
    }),
  ],
})
export class ArticleModule {}
