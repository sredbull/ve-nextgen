import { IDField } from '@nestjs-query/query-graphql';
import { GraphQLISODateTime, Field, ID } from '@nestjs/graphql';

export abstract class MainDTO {
  @IDField(() => ID)
  id!: number;

  @Field(() => GraphQLISODateTime)
  created!: Date;

  @Field(() => GraphQLISODateTime)
  updated_at!: Date;
}
