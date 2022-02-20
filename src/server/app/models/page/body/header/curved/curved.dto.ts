import { Field, ObjectType } from '@nestjs/graphql';
import { MainDTO } from '../../../../main.dto';

@ObjectType('page_body_header_curved')
export class CurvedDTO extends MainDTO {
  @Field()
  title!: string;

  @Field()
  subTitle!: string;
}
