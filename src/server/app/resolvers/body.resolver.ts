import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { QueryService, InjectQueryService } from '@nestjs-query/core';
import { CRUDResolver } from '@nestjs-query/query-graphql';
import { HeaderUnion } from '../dtos/page/body/header.dto';
import { BodyDTO } from '../dtos/page/body.dto';
import { MainDTO } from '../dtos/page/body/main.dto';
import { SidebarDTO } from '../dtos/page/body/sidebar.dto';
import { FooterUnion } from '../dtos/page/body/footer.dto';
import { Body } from '../entities/page/body.entity';
import { Page } from '../entities/page.entity';

@Resolver(() => BodyDTO)
// @ts-ignore
export class BodyResolver extends CRUDResolver(BodyDTO) {
  constructor(
    @InjectQueryService(Body) readonly service: QueryService<Body>
  ) {
    // @ts-ignore
    super(service);
  }

  @ResolveField('header', () => HeaderUnion)
  header() {}

  @ResolveField('footer', () => FooterUnion)
  footer() {}
}
