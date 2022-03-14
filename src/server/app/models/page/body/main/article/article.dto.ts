import { Field, ObjectType, createUnionType } from '@nestjs/graphql';
import { MainDTO } from '../../../../main.dto';
import { MarkdownDTO } from './markdown/markdown.dto';
import CamelCase from 'camelcase';

export const ArticleUnion = createUnionType({
  name: 'ArticleUnion',
  types: () => [MarkdownDTO],
  resolveType: (value) => {
    return CamelCase(value.type, { pascalCase: true });
  },
});

@ObjectType('PageBodyMainArticle')
export class ArticleDTO extends MainDTO {
  @Field()
  type: string;
}
