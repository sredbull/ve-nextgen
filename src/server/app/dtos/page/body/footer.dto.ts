import { Field, ObjectType } from '@nestjs/graphql';
import { MainDTO as MainEntityDTO } from '../../main.dto';

@ObjectType('footer')
export class FooterDTO extends MainEntityDTO {
  @Field()
  title!: string;
}
