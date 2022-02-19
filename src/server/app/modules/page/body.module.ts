import { Body } from '../../entities/page/body.entity';
import { BodyDTO } from '../../dtos/page/body.dto';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { BodyResolver } from '../../resolvers/body.resolver';

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
