import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Page } from '../page.entity';
import { Meta } from './head/meta.entity';

@ObjectType()
@Entity()
export class Head {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field((_type) => Page)
  @OneToOne((_type) => Page, (page) => page.head, { nullable: false })
  page: Page;

  @Field()
  @Column({ nullable: false })
  title: string;

  @Field((_type) => Meta)
  @OneToOne((_type) => Meta, (meta) => meta.head, { nullable: false })
  meta: Meta;
}
