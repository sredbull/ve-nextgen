import { Column, ChildEntity } from 'typeorm';
import { Article, SourceType } from '../article.entity';

@ChildEntity(SourceType.MARKDOWN)
export class Markdown extends Article {
  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  subTitle: string;

  @Column({ type: 'text', nullable: false })
  markdown: string;

  type: SourceType.MARKDOWN;
}
