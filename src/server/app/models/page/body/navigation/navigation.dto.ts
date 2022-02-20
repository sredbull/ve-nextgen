import { UnPagedRelation } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { ADTO } from '../../../common/a.dto';
import { MainDTO } from '../../../main.dto';

@ObjectType('PageBodyNavigation')
@UnPagedRelation('items', () => ADTO, { disableRemove: true, nullable: true })
export class NavigationDTO extends MainDTO {
  @Field()
  title!: string;
}
