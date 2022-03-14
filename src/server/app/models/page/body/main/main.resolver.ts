import { Resolver, ResolveField } from '@nestjs/graphql';
import { QueryService, InjectQueryService } from '@nestjs-query/core';
import { CRUDResolver } from '@nestjs-query/query-graphql';
import { ArticleUnion } from './article/article.dto';
import { MainDTO } from './main.dto';
import { Main } from './main.entity';

@Resolver(() => MainDTO)
// @ts-ignore
export class MainResolver extends CRUDResolver(MainDTO) {
  constructor(@InjectQueryService(Main) readonly service: QueryService<Main>) {
    // @ts-ignore
    super(service);
  }

  @ResolveField('articles', () => [ArticleUnion])
  articles() {}
}
