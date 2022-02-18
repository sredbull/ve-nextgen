import { Field, ObjectType } from '@nestjs/graphql';
import { MainDTO as MainEntityDTO } from '../../main.dto';

@ObjectType('header')
export class HeaderDTO extends MainEntityDTO {
  @Field()
  type: string;
}
