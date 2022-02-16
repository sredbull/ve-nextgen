import { Meta } from '../../../entities/page/head/meta.entity';
import { MetaDTO } from '../../../dtos/page/head/meta.dto';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Meta])],
      resolvers: [{ DTOClass: MetaDTO, EntityClass: Meta }],
    }),
  ],
})
export class MetaModule {}
