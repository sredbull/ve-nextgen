import { Header } from './header.entity';
import { Curved } from './curved/curved.entity';
import { Skewed } from './skewed/skewed.entity';
import { HeaderDTO } from './header.dto';
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
