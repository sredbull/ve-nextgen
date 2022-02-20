import { Column, Entity, OneToOne, JoinColumn } from 'typeorm';
import { Main } from '../main.entity';
import { Head } from './head/head.entity';
import { Body } from './body/body.entity';

@Entity()
export class Page extends Main {
  @Column({ default: 'en', nullable: false })
  lang: string;

  @OneToOne((_type) => Head, (head) => head.page, { nullable: false, cascade: true })
  @JoinColumn()
  head: Head;

  @OneToOne((_type) => Body, (body) => body.page, { nullable: false, cascade: true })
  @JoinColumn()
  body: Body;
}
