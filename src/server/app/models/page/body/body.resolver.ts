import { Resolver, ResolveField } from '@nestjs/graphql';
import { QueryService, InjectQueryService } from '@nestjs-query/core';
import { CRUDResolver } from '@nestjs-query/query-graphql';
import { HeaderUnion } from './header/header.dto';
import { BodyDTO } from './body.dto';
import { FooterUnion } from './footer/footer.dto';
import { Body } from './body.entity';

@Resolver(() => BodyDTO)
// @ts-ignore
export class BodyResolver extends CRUDResolver(BodyDTO) {
  constructor(@InjectQueryService(Body) readonly service: QueryService<Body>) {
    // @ts-ignore
    super(service);
  }

  @ResolveField('header', () => HeaderUnion)
  header() {}

  @ResolveField('footer', () => FooterUnion)
  footer() {}
}
