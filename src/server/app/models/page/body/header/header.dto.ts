import { Field, ObjectType, createUnionType } from '@nestjs/graphql';
import { MainDTO } from '../../../main.dto';
import { CurvedDTO } from './curved/curved.dto';
import { SkewedDTO } from './skewed/skewed.dto';

export const HeaderUnion = createUnionType({
  name: 'HeaderUnion',
  types: () => [CurvedDTO, SkewedDTO],
  resolveType: (value) => {
    return value.type
  }
});

@ObjectType('page_body_header')
export class HeaderDTO extends MainDTO {
  @Field()
  type: string;
}
