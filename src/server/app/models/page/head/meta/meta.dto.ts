import { Field, ObjectType } from '@nestjs/graphql';
import { MainDTO } from '../../../main.dto';

@ObjectType('PageHeadMeta')
export class MetaDTO extends MainDTO {
  @Field()
  charset!: string;

  @Field()
  description!: string;

  @Field()
  noindex!: boolean;

  @Field()
  nofollow!: boolean;

  @Field()
  viewport!: string;
}
