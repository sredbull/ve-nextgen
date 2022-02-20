import { Field, ObjectType } from '@nestjs/graphql';
import { MainDTO } from '../../../../main.dto';

@ObjectType('PageBodyFooterSimple')
export class SimpleDTO extends MainDTO {
  @Field()
  title!: string;

  @Field()
  subTitle!: string;

  @Field()
  copyright!: string;
}
