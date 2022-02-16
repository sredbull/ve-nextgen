import { FilterableField, Relation } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { MainDTO } from '../main.dto';
import { MetaDTO } from './head/meta.dto';

@ObjectType('head')
@Relation('meta', () => MetaDTO, { disableRemove: true })
export class HeadDTO extends MainDTO {
  @FilterableField()
  title!: string;
}
