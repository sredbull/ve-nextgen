import { Body } from '../../entities/page/body.entity';
import { BodyDTO } from '../../dtos/page/body.dto';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Body])],
      resolvers: [{ DTOClass: BodyDTO, EntityClass: Body }],
    }),
  ],
})
export class BodyModule {}
