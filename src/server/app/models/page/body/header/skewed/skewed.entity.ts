import { Column, ChildEntity } from 'typeorm';
import { Header, SourceType } from '../header.entity';


@ChildEntity(SourceType.SKEWED)
export class Skewed extends Header {
  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  subTitle: string;
}
