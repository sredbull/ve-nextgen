import { Field, ObjectType, createUnionType } from '@nestjs/graphql';
import { MainDTO } from '../../../main.dto';
import { CurvedDTO } from './curved/curved.dto';
import { SkewedDTO } from './skewed/skewed.dto';
import CamelCase from 'camelcase'

export const HeaderUnion = createUnionType({
  name: 'HeaderUnion',
  types: () => [CurvedDTO, SkewedDTO],
  resolveType: (value) => {
    return CamelCase(value.type, {pascalCase: true});
  }
});

@ObjectType('PageBodyHeader')
export class HeaderDTO extends MainDTO {
  @Field()
  type: string;
}
