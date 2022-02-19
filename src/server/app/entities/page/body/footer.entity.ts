import { Column, Entity, TableInheritance, OneToOne } from 'typeorm';
import { Main } from '../../main.entity';
import { Body } from '../body.entity';

export enum SourceType {
  EXTENDED = 'page_body_footer_extended',
  SIMPLE = 'page_body_footer_simple',
}

@Entity('page_body_footer')
@TableInheritance({ column: { type: 'enum', enum: SourceType, name: 'type' } })
export class Footer extends Main {
  @OneToOne((_type) => Body, (body) => body.footer, { nullable: false })
  body: Body;

  @Column({
    type: 'enum',
    enum: SourceType,
  })
  type: SourceType;
}
