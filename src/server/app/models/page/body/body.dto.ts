import { ObjectType } from '@nestjs/graphql';
import { Relation } from '@nestjs-query/query-graphql';
import { MainDTO as MainEntityDTO } from '../../main.dto';
import { HeaderDTO } from './header/header.dto';
import { NavigationDTO } from './navigation/navigation.dto';
import { SidebarDTO } from './sidebar/sidebar.dto';
import { FooterDTO } from './footer/footer.dto';
import { MainDTO } from './main/main.dto';

@ObjectType('PageBody')
@Relation('header', () => HeaderDTO, { disableRemove: true })
@Relation('navigation', () => NavigationDTO, { disableRemove: true })
@Relation('main', () => MainDTO, { disableRemove: true })
@Relation('sidebar', () => SidebarDTO, { disableRemove: true })
@Relation('footer', () => FooterDTO, { disableRemove: true })
export class BodyDTO extends MainEntityDTO {}
