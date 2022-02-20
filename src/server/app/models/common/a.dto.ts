import { Field, ObjectType } from '@nestjs/graphql';
import { MainDTO } from '../main.dto';
import { RelEnum, TargetEnum } from './a.entity';
import { Navigation } from '../page/body/navigation/navigation.entity';

@ObjectType('CommonA')
export class ADTO extends MainDTO {
  @Field()
  href: string;

  @Field(type => RelEnum)
  rel: string;

  @Field(type => TargetEnum)
  target: string;
}
