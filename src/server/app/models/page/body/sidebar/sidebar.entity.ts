import { Column, Entity, OneToOne } from 'typeorm';
import { Main } from '../../../main.entity';
import { Body } from '../body.entity';

@Entity({ name: 'page_body_sidebar' })
export class Sidebar extends Main {
  @OneToOne((_type) => Body, (body) => body.sidebar, { nullable: false })
  body: Body;

  @Column({ nullable: false })
  title: string;
}
