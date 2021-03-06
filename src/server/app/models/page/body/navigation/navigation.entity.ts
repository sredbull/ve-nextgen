import { Column, Entity, OneToOne, OneToMany } from 'typeorm';
import { A } from '../../../common/a.entity';
import { Main } from '../../../main.entity';
import { Body } from '../body.entity';

@Entity({ name: 'page_body_navigation' })
export class Navigation extends Main {
  @OneToOne((_type) => Body, (body) => body.navigation, { nullable: false })
  body: Body;

  @Column({ nullable: false })
  title: string;

  @OneToMany((_type) => A, (a) => a.navigation, { nullable: true })
  items?: A[];
}
