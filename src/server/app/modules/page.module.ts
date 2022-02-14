import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Page } from '../entities/page.entity';
import { Head } from '../entities/page/head.entity';
import { Meta } from '../entities/page/head/meta.entity';
import { PageResolver } from '../resolvers/page.resolver';
import { _PageRepository } from '../repositories/page.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Page, Head, Meta])],
  providers: [_PageRepository, PageResolver],
  exports: [_PageRepository],
})
export class PageModule {}
