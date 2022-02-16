import { Relation } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { MainDTO } from './main.dto';
import { HeadDTO } from './page/head.dto'

@ObjectType('page')
@Relation('head', () => HeadDTO, { disableRemove: true })
export class PageDTO extends MainDTO {
  @Field()
  lang!: string;
}
