import { Field, ObjectType } from '@nestjs/graphql';
import { MainDTO } from '../../main.dto';

@ObjectType('meta')
export class MetaDTO extends MainDTO {
  @Field()
  charset!: string;

  @Field()
  description!: string;

  @Field()
  robots!: string;

  @Field()
  viewport!: string;
}
