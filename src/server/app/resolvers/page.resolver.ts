import { Resolver, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { _PageRepository } from '../repositories/page.repository';
import { FindManyOptions } from 'typeorm';
import { Page } from '../entities/page.entity';

@Resolver((_of) => Page)
export class PageResolver {
  constructor(
    @Inject(_PageRepository) private pageRepository: _PageRepository,
  ) {}

  @Query((_returns) => [Page])
  async Pages(params: FindManyOptions<Page> = {}): Promise<Page[]> {
    return this.pageRepository.findAll(params);
  }
}
