import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { FooterDTO } from '../../../dtos/page/body/footer.dto';
import { Footer } from '../../../entities/page/body/footer.entity';
import { Extended } from '../../..//entities/page/body/footer/extended.entity';
import { Simple } from '../../..//entities/page/body/footer/simple.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Footer, Extended, Simple])],
      resolvers: [{ DTOClass: FooterDTO, EntityClass: Footer }],
    }),
  ],
})
export class FooterModule {}
