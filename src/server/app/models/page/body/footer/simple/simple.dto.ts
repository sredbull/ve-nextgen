import { Field, ObjectType } from '@nestjs/graphql';
import { MainDTO } from '../../../../main.dto';

@ObjectType('page_body_footer_simple')
export class SimpleDTO extends MainDTO {
  @Field()
  title!: string;

  @Field()
  subTitle!: string;

  @Field()
  copyright!: string;
}
