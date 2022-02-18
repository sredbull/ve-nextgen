import { Field, ObjectType } from '@nestjs/graphql';
import { MainDTO as MainEntityDTO } from '../../../main.dto';

@ObjectType('header_skewed')
export class SkewedDTO extends MainEntityDTO {
  @Field()
  title!: string;

  @Field()
  subTitle!: string;
}
