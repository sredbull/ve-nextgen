import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Head } from '../head.entity';

@ObjectType()
@Entity({ name: 'head_meta' })
export class Meta {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

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
