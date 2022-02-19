import { Field, ObjectType, createUnionType } from '@nestjs/graphql';
import { MainDTO } from '../../main.dto';
import { ExtendedDTO } from './footer/extended.dto';
import { SimpleDTO } from './footer/simple.dto';

export const FooterUnion = createUnionType({
  name: 'FooterUnion',
  types: () => [ExtendedDTO, SimpleDTO],
  resolveType: (value) => {
    return value.type
  }
});

@ObjectType('page_body_footer')
export class FooterDTO extends MainDTO {
  @Field()
  type: string;
}