import { Column, Entity, ManyToOne } from 'typeorm';
import { registerEnumType } from '@nestjs/graphql';
import { Main } from '../main.entity';
import { Navigation } from '../page/body/navigation/navigation.entity';

export enum RelEnum {
  ALTERNATE = 'alternate',
  AUTHOR = 'author',
  BOOKMARK = 'bookmarkc',
  EXTERNAL = 'external',
  HELP = 'help',
  LICENSE = 'license',
  NEXT = 'next',
  NOFOLLOW = 'nofollow',
  NOREFERRER = 'noreferrer',
  NOOPENER = 'noopener',
  PREV = 'prev',
  SEARCH = 'search',
  TAG = 'tag',
}

registerEnumType(RelEnum, {
  name: 'RelEnum',
});

export enum TargetEnum {
  BLANK = '_blank',
  PARENT = '_parent',
  SELF = '_self',
  TOP = '_top',
}

registerEnumType(TargetEnum, {
  name: 'TargetEnum',
});

@Entity('common_a')
export class A extends Main {
  @ManyToOne((_type) => Navigation, (navigation) => navigation.items, {
    nullable: true,
  })
  navigation: Navigation;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  href: string;

  @Column({
    type: 'enum',
    enum: RelEnum,
    nullable: true,
  })
  rel: RelEnum;

  @Column({
    type: 'enum',
    enum: TargetEnum,
    nullable: false,
    default: TargetEnum.SELF,
  })
  target: TargetEnum;
}
