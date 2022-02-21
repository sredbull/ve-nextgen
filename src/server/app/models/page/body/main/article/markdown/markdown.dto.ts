import { Field, ObjectType } from '@nestjs/graphql';
import { MainDTO } from '../../../../../main.dto';

@ObjectType('PageBodyMainArticleMarkdown')
export class MarkdownDTO extends MainDTO {
  @Field()
  title: string;

  @Field()
  subTitle: string;

  @Field()
  markdown: string;
}
