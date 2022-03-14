import { Column, Entity, TableInheritance, ManyToOne } from 'typeorm';
import { Main as MainEntity } from '../../../../main.entity';
import { Main } from '../main.entity';

export enum SourceType {
  MARKDOWN = 'page_body_main_article_markdown',
}

@Entity('page_body_main_article')
@TableInheritance({ column: { type: 'enum', enum: SourceType, name: 'type' } })
export class Article extends MainEntity {
  @ManyToOne((_type) => Main, (main) => main.articles, { nullable: true })
  main: Main;

  @Column({
    type: 'enum',
    enum: SourceType,
  })
  type: SourceType;
}
