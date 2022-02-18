import { Field, ObjectType } from '@nestjs/graphql';
import { MainDTO as MainEntityDTO } from '../../main.dto';

@ObjectType('navigation')
export class NavigationDTO extends MainEntityDTO {
  @Field()
  title!: string;
}
