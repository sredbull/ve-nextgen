import { Footer } from '../../../entities/page/body/footer.entity';
import { FooterDTO } from '../../../dtos/page/body/footer.dto';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Footer])],
      resolvers: [{ DTOClass: FooterDTO, EntityClass: Footer }],
    }),
  ],
})
export class FooterModule {}
