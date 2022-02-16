import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { Page } from '../page.entity';
import { Meta } from './head/meta.entity';
import { Main } from '../main.entity';

@Entity({ name: 'page_head' })
export class Head extends Main {
  @OneToOne((_type) => Page, (page) => page.head, { nullable: false })
  page: Page;

  @Column({ nullable: false })
  title: string;

  @OneToOne((_type) => Meta, (meta) => meta.head, { nullable: false })
  @JoinColumn()
  meta: Meta;
}
