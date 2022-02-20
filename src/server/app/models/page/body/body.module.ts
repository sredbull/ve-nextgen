import { Body } from './body.entity';
import { BodyDTO } from './body.dto';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { BodyResolver } from './body.resolver';

@Module({
  providers: [BodyResolver],
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Body])],
      dtos: [{ DTOClass: BodyDTO }],
    }),
  ],
})
export class BodyModule {}
