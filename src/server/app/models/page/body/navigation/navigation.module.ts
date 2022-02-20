import { Navigation } from './navigation.entity';
import { NavigationDTO } from './navigation.dto';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Navigation])],
      resolvers: [{ DTOClass: NavigationDTO, EntityClass: Navigation }],
    }),
  ],
})
export class NavigationModule {}
