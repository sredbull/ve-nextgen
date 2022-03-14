import { Relation } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { MainDTO } from '../main.dto';
import { HeadDTO } from './head/head.dto';
import { BodyDTO } from './body/body.dto';

@ObjectType('Page')
@Relation('head', () => HeadDTO, { disableRemove: true })
@Relation('body', () => BodyDTO, { disableRemove: true })
export class PageDTO extends MainDTO {
  @Field()
  lang!: string;
}
