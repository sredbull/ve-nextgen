import { Column, Entity, OneToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Main } from './main.entity';
import { Head } from './page/head.entity';

@ObjectType()
@Entity()
export class Page extends Main {
  @Field()
  @Column({ default: 'en', nullable: false })
  lang: string;

  @Field((_type) => Head)
  @OneToOne((_type) => Head, (head) => head.page, { nullable: false })
  @JoinColumn()
  head: Head;
}
