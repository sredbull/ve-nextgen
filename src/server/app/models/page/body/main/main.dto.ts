import { UnPagedRelation } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { MainDTO as MainEntityDTO } from '../../../main.dto';
import { ArticleDTO } from './article/article.dto';

@ObjectType('PageBodyMain')
@UnPagedRelation('articles', () => ArticleDTO, { disableRemove: true, nullable: true })
export class MainDTO extends MainEntityDTO {}
