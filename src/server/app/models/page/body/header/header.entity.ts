import { Column, Entity, TableInheritance, OneToOne } from 'typeorm';
import { Main } from '../../../main.entity';
import { Body } from '../body.entity';

export enum SourceType {
  CURVED = 'page_body_header_curved',
  SKEWED = 'page_body_header_skewed',
}

@Entity('page_body_header')
@TableInheritance({ column: { type: 'enum', enum: SourceType, name: 'type' } })
export class Header extends Main {
  @OneToOne((_type) => Body, (body) => body.header, { nullable: false })
  body: Body;

  @Column({
    type: 'enum',
    enum: SourceType,
  })
  type: SourceType;
}
