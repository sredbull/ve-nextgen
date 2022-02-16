import { Column, Entity, OneToOne, JoinColumn } from 'typeorm';
import { Main } from './main.entity';
import { Head } from './page/head.entity';

@Entity()
export class Page extends Main {
  @Column({ default: 'en', nullable: false })
  lang: string;

  @OneToOne((_type) => Head, (head) => head.page, { nullable: false })
  @JoinColumn()
  head: Head;
}
