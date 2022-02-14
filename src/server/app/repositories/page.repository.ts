import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';

import { Page } from '../entities/page.entity';

@Injectable()
export class _PageRepository {
  constructor(
    @InjectRepository(Page)
    private pageRepository: Repository<Page>,
  ) {}

  findOne(params: FindOneOptions<Page> = {}) {
    return this.pageRepository.findOne(
      Object.assign(params, { relations: ['head', 'head.meta'] }),
    );
  }

  findAll(params: FindManyOptions<Page> = {}) {
    return this.pageRepository.find(
      Object.assign(params, { relations: ['head', 'head.meta'] }),
    );
  }
}
