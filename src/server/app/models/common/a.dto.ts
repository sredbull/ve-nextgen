import { Field, ObjectType } from '@nestjs/graphql';
import { MainDTO } from '../main.dto';
import { RelEnum, TargetEnum } from './a.entity';

@ObjectType('CommonA')
export class ADTO extends MainDTO {
  @Field()
  name: string;

  @Field()
  href: string;

  @Field(() => RelEnum)
  rel: string;

  @Field(() => TargetEnum)
  target: string;
}
