import { Sidebar } from './sidebar.entity';
import { SidebarDTO } from './sidebar.dto';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Sidebar])],
      resolvers: [{ DTOClass: SidebarDTO, EntityClass: Sidebar }],
    }),
  ],
})
export class SidebarModule {}
