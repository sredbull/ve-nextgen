import { Column, ChildEntity } from 'typeorm';
import { Footer, SourceType } from '../footer.entity';

@ChildEntity(SourceType.EXTENDED)
export class Extended extends Footer {
  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  subTitle: string;

  @Column({ nullable: false })
  copyright: string;
}
