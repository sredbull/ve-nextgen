import { Field, ObjectType } from '@nestjs/graphql';
import { MainDTO } from '../../../../main.dto';

@ObjectType('PageBodyHeaderCurved')
export class CurvedDTO extends MainDTO {
  @Field()
  title!: string;

  @Field()
  subTitle!: string;
}
