import { Field, ObjectType } from '@nestjs/graphql';
import { MainDTO } from '../../../../main.dto';

@ObjectType('PageBodyFooterExtended')
export class ExtendedDTO extends MainDTO {
  @Field()
  title!: string;

  @Field()
  subTitle!: string;

  @Field()
  copyright!: string;
}
