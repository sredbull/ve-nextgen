import { Field, ObjectType, createUnionType } from '@nestjs/graphql';
import { MainDTO } from '../../../main.dto';
import { ExtendedDTO } from './extended/extended.dto';
import { SimpleDTO } from './simple/simple.dto';
import CamelCase from 'camelcase';

export const FooterUnion = createUnionType({
  name: 'FooterUnion',
  types: () => [ExtendedDTO, SimpleDTO],
  resolveType: (value) => {
    return CamelCase(value.type, { pascalCase: true });
  },
});

@ObjectType('PageBodyFooter')
export class FooterDTO extends MainDTO {
  @Field()
  type: string;
}
