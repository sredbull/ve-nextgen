import { Field, ObjectType } from '@nestjs/graphql';
import { MainDTO as MainEntityDTO } from '../../../main.dto';

@ObjectType('PageBodyMain')
export class MainDTO extends MainEntityDTO {
  @Field()
  title!: string;
}
