import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  TableInheritance,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Head } from '../head.entity';

@ObjectType()
@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Meta {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field((_type) => Meta)
  @OneToOne((_type) => Head, (head) => head.meta, { nullable: false })
  head: Meta;

  @Field()
  @Column({ default: 'utf-8', nullable: false })
  charset: string;

  @Field()
  @Column({ nullable: false })
  description: string;

  @Field()
  @Column({ nullable: false })
  robots: string;

  @Field()
  @Column({ default: 'width=device-width, initial-scale=1', nullable: false })
  viewport: string;
}
