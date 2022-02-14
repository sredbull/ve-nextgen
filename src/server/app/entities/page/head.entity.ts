import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Page } from '../page.entity';
import { Meta } from './head/meta.entity';

@ObjectType()
@Entity({ name: 'page_head' })
export class Head {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne((_type) => Page, (page) => page.head, { nullable: false })
  page: Page;

  @Field()
  @Column({ nullable: false })
  title: string;

  @Field((_type) => Meta)
  @OneToOne((_type) => Meta, (meta) => meta.head, { nullable: false })
  @JoinColumn()
  meta: Meta;
}
