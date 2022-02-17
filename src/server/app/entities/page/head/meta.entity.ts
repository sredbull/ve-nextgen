import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Head } from '../head.entity';
import { Main } from '../../main.entity';

@Entity({ name: 'head_meta' })
export class Meta extends Main {
  @OneToOne((_type) => Head, (head) => head.meta, { nullable: false })
  head: Meta;

  @Column({ default: 'utf-8', nullable: false })
  charset: string;

  @Column({ nullable: false })
  description: string;

  @Column({ default: false, nullable: false })
  noindex: boolean;

  @Column({ default: false, nullable: false })
  nofollow: boolean;

  @Column({ nullable: false })
  robots: string;

  @Column({ default: 'width=device-width, initial-scale=1', nullable: false })
  viewport: string;
}
