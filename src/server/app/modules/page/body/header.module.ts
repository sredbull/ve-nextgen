import { Header } from '../../../entities/page/body/header.entity';
import { Curved } from '../../../entities/page/body/header/curved.entity';
import { Skewed } from '../../../entities/page/body/header/skewed.entity';
import { HeaderDTO } from '../../../dtos/page/body/header.dto';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Header, Curved, Skewed])],
      resolvers: [{ DTOClass: HeaderDTO, EntityClass: Header }],
    }),
  ],
})
export class HeaderModule {}
