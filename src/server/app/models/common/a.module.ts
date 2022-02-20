import { A } from './a.entity';
import { ADTO } from './a.dto';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([A])],
      resolvers: [{ DTOClass: ADTO, EntityClass: A }],
    }),
  ],
})
export class AModule {}
