import { Entity, JoinColumn, OneToOne } from 'typeorm';
import { Page } from '../page.entity';
import { Main as MainEntity } from '../../main.entity';
import { Header } from './header/header.entity';
import { Curved } from './header/curved/curved.entity';
import { Skewed } from './header/skewed/skewed.entity';
import { Navigation } from './navigation/navigation.entity';
import { Main } from './main/main.entity';
import { Sidebar } from './sidebar/sidebar.entity';
import { Footer } from './footer/footer.entity';
import { Extended } from './footer/extended/extended.entity';
import { Simple } from './footer/simple/simple.entity';

@Entity({ name: 'page_body' })
export class Body extends MainEntity {
  @OneToOne((_type) => Page, (page) => page.head, { nullable: false })
  page: Page;

  @OneToOne((_type) => Header, (header) => header.body, { nullable: false, cascade: true })
  @JoinColumn()
  header: Curved | Skewed;

  @OneToOne((_type) => Navigation, (navigation) => navigation.body, { nullable: false, cascade: true })
  @JoinColumn()
  navigation: Navigation;

  @OneToOne((_type) => Main, (main) => main.body, { nullable: false, cascade: true })
  @JoinColumn()
  main: Main;

  @OneToOne((_type) => Sidebar, (sidebar) => sidebar.body, { nullable: true, cascade: true })
  @JoinColumn()
  sidebar: Sidebar;

  @OneToOne((_type) => Footer, (footer) => footer.body, { nullable: false, cascade: true })
  @JoinColumn()
  footer: Extended | Simple;
}
