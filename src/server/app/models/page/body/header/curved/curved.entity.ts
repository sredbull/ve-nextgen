import { Column, ChildEntity } from 'typeorm';
import { Header, SourceType } from '../header.entity';

@ChildEntity(SourceType.CURVED)
export class Curved extends Header {
  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  subTitle: string;

  type: SourceType.CURVED;
}
