import { Field, ObjectType } from '@nestjs/graphql';
import { MainDTO as MainEntityDTO } from '../../../main.dto';

@ObjectType('PageBodySidebar')
export class SidebarDTO extends MainEntityDTO {
  @Field()
  title!: string;
}
