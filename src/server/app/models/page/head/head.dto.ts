import { FilterableField, Relation } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { MainDTO } from '../../main.dto';
import { MetaDTO } from './meta/meta.dto';

@ObjectType('PageHead')
@Relation('meta', () => MetaDTO, { disableRemove: true })
export class HeadDTO extends MainDTO {
  @FilterableField()
  title!: string;
}
