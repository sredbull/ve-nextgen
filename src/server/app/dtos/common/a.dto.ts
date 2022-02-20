import { Field, ObjectType } from '@nestjs/graphql';
import { MainDTO } from '../main.dto';
import { RelEnum, TargetEnum } from '../../entities/common/a.entity';
import { Navigation } from '../../entities/page/body/navigation.entity';

@ObjectType('CommonA')
export class ADTO extends MainDTO {
  @Field()
  href: string;

  @Field(type => RelEnum)
  rel: string;

  @Field(type => TargetEnum)
  target: string;
}
