import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { FooterDTO } from './footer.dto';
import { Footer } from './footer.entity';
import { Extended } from './extended/extended.entity';
import { Simple } from './simple/simple.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([Footer, Extended, Simple]),
      ],
      resolvers: [{ DTOClass: FooterDTO, EntityClass: Footer }],
    }),
  ],
})
export class FooterModule {}
