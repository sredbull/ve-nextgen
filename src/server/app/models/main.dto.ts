import { IDField } from '@nestjs-query/query-graphql';
import { GraphQLISODateTime, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('main')
export class MainDTO {
  @IDField(() => ID)
  id!: number;

  @Field(() => GraphQLISODateTime)
  created!: Date;

  @Field(() => GraphQLISODateTime)
  updated_at!: Date;
}
