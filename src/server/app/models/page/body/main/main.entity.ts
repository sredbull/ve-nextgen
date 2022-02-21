import { Column, Entity, OneToOne, OneToMany } from 'typeorm';
import { Main as MainEntity } from '../../../main.entity';
import { Body } from '../body.entity';
import { Article } from './article/article.entity';

@Entity({ name: 'page_body_main' })
export class Main extends MainEntity {
  @OneToOne((_type) => Body, (body) => body.main, { nullable: false })
  body: Body;

  @OneToMany((_type) => Article, (article) => article.main, { nullable: true })
  articles?: Article[]
}
