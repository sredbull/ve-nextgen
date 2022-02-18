import { Relation } from '@nestjs-query/query-graphql';
import { Field, ObjectType } from '@nestjs/graphql';
import { MainDTO as MainEntityDTO } from '../main.dto';
import { HeaderDTO } from './body/header.dto';
import { NavigationDTO } from './body/navigation.dto';
import { MainDTO } from './body/main.dto';
import { SidebarDTO } from './body/sidebar.dto';
import { FooterDTO } from './body/footer.dto';

@ObjectType('body')
@Relation('header', () => HeaderDTO, { disableRemove: true })
@Relation('navigation', () => NavigationDTO, { disableRemove: true })
@Relation('main', () => MainDTO, { disableRemove: true })
@Relation('sidebar', () => SidebarDTO, { disableRemove: true })
@Relation('footer', () => FooterDTO, { disableRemove: true })
export class BodyDTO extends MainEntityDTO {
  @Field()
  title!: string;
}
