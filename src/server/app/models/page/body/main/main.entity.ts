import { Column, Entity, OneToOne } from 'typeorm';
import { Main as MainEntity } from '../../../main.entity';
import { Body } from '../body.entity';

@Entity({ name: 'page_body_main' })
export class Main extends MainEntity {
  @OneToOne((_type) => Body, (body) => body.main, { nullable: false })
  body: Body;

  @Column({ nullable: false })
  title: string;
}
