import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Cursor for paging through collections */
  ConnectionCursor: any;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AddArticlesToPageBodyMainInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type AddItemsToPageBodyNavigationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type ArticleUnion = PageBodyMainArticleMarkdown;

export type CommonA = {
  __typename?: 'CommonA';
  created: Scalars['DateTime'];
  href: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  rel: RelEnum;
  target: TargetEnum;
  updated_at: Scalars['DateTime'];
};

export type CommonAAggregateGroupBy = {
  __typename?: 'CommonAAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type CommonAAvgAggregate = {
  __typename?: 'CommonAAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type CommonAConnection = {
  __typename?: 'CommonAConnection';
  /** Array of edges. */
  edges: Array<CommonAEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type CommonACountAggregate = {
  __typename?: 'CommonACountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type CommonADeleteFilter = {
  and?: InputMaybe<Array<CommonADeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CommonADeleteFilter>>;
};

export type CommonADeleteResponse = {
  __typename?: 'CommonADeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  rel?: Maybe<RelEnum>;
  target?: Maybe<TargetEnum>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type CommonAEdge = {
  __typename?: 'CommonAEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the CommonA */
  node: CommonA;
};

export type CommonAFilter = {
  and?: InputMaybe<Array<CommonAFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CommonAFilter>>;
};

export type CommonAMaxAggregate = {
  __typename?: 'CommonAMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type CommonAMinAggregate = {
  __typename?: 'CommonAMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type CommonASort = {
  direction: SortDirection;
  field: CommonASortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CommonASortFields {
  Id = 'id',
}

export type CommonASumAggregate = {
  __typename?: 'CommonASumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type CommonAUpdateFilter = {
  and?: InputMaybe<Array<CommonAUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CommonAUpdateFilter>>;
};

export type CreateCommonA = {
  created?: InputMaybe<Scalars['DateTime']>;
  href?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  rel?: InputMaybe<RelEnum>;
  target?: InputMaybe<TargetEnum>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CreateManyCommonAsInput = {
  /** Array of records to create */
  commonAS: Array<CreateCommonA>;
};

export type CreateManyPageBodiesInput = {
  /** Array of records to create */
  pageBodies: Array<CreatePageBody>;
};

export type CreateManyPageBodyFootersInput = {
  /** Array of records to create */
  pageBodyFooters: Array<CreatePageBodyFooter>;
};

export type CreateManyPageBodyHeadersInput = {
  /** Array of records to create */
  pageBodyHeaders: Array<CreatePageBodyHeader>;
};

export type CreateManyPageBodyMainArticlesInput = {
  /** Array of records to create */
  pageBodyMainArticles: Array<CreatePageBodyMainArticle>;
};

export type CreateManyPageBodyMainsInput = {
  /** Array of records to create */
  pageBodyMains: Array<CreatePageBodyMain>;
};

export type CreateManyPageBodyNavigationsInput = {
  /** Array of records to create */
  pageBodyNavigations: Array<CreatePageBodyNavigation>;
};

export type CreateManyPageBodySidebarsInput = {
  /** Array of records to create */
  pageBodySidebars: Array<CreatePageBodySidebar>;
};

export type CreateManyPageHeadMetasInput = {
  /** Array of records to create */
  pageHeadMetas: Array<CreatePageHeadMeta>;
};

export type CreateManyPageHeadsInput = {
  /** Array of records to create */
  pageHeads: Array<CreatePageHead>;
};

export type CreateManyPagesInput = {
  /** Array of records to create */
  pages: Array<CreatePage>;
};

export type CreateOneCommonAInput = {
  /** The record to create */
  commonA: CreateCommonA;
};

export type CreateOnePageBodyFooterInput = {
  /** The record to create */
  pageBodyFooter: CreatePageBodyFooter;
};

export type CreateOnePageBodyHeaderInput = {
  /** The record to create */
  pageBodyHeader: CreatePageBodyHeader;
};

export type CreateOnePageBodyInput = {
  /** The record to create */
  pageBody: CreatePageBody;
};

export type CreateOnePageBodyMainArticleInput = {
  /** The record to create */
  pageBodyMainArticle: CreatePageBodyMainArticle;
};

export type CreateOnePageBodyMainInput = {
  /** The record to create */
  pageBodyMain: CreatePageBodyMain;
};

export type CreateOnePageBodyNavigationInput = {
  /** The record to create */
  pageBodyNavigation: CreatePageBodyNavigation;
};

export type CreateOnePageBodySidebarInput = {
  /** The record to create */
  pageBodySidebar: CreatePageBodySidebar;
};

export type CreateOnePageHeadInput = {
  /** The record to create */
  pageHead: CreatePageHead;
};

export type CreateOnePageHeadMetaInput = {
  /** The record to create */
  pageHeadMeta: CreatePageHeadMeta;
};

export type CreateOnePageInput = {
  /** The record to create */
  page: CreatePage;
};

export type CreatePage = {
  created?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  lang?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CreatePageBody = {
  created?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CreatePageBodyFooter = {
  created?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CreatePageBodyHeader = {
  created?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CreatePageBodyMain = {
  created?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CreatePageBodyMainArticle = {
  created?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CreatePageBodyNavigation = {
  created?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CreatePageBodySidebar = {
  created?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CreatePageHead = {
  created?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type CreatePageHeadMeta = {
  charset?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  nofollow?: InputMaybe<Scalars['Boolean']>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  viewport?: InputMaybe<Scalars['String']>;
};

export type CursorPaging = {
  /** Paginate after opaque cursor */
  after?: InputMaybe<Scalars['ConnectionCursor']>;
  /** Paginate before opaque cursor */
  before?: InputMaybe<Scalars['ConnectionCursor']>;
  /** Paginate first */
  first?: InputMaybe<Scalars['Int']>;
  /** Paginate last */
  last?: InputMaybe<Scalars['Int']>;
};

export type DeleteManyCommonAsInput = {
  /** Filter to find records to delete */
  filter: CommonADeleteFilter;
};

export type DeleteManyPageBodiesInput = {
  /** Filter to find records to delete */
  filter: PageBodyDeleteFilter;
};

export type DeleteManyPageBodyFootersInput = {
  /** Filter to find records to delete */
  filter: PageBodyFooterDeleteFilter;
};

export type DeleteManyPageBodyHeadersInput = {
  /** Filter to find records to delete */
  filter: PageBodyHeaderDeleteFilter;
};

export type DeleteManyPageBodyMainArticlesInput = {
  /** Filter to find records to delete */
  filter: PageBodyMainArticleDeleteFilter;
};

export type DeleteManyPageBodyMainsInput = {
  /** Filter to find records to delete */
  filter: PageBodyMainDeleteFilter;
};

export type DeleteManyPageBodyNavigationsInput = {
  /** Filter to find records to delete */
  filter: PageBodyNavigationDeleteFilter;
};

export type DeleteManyPageBodySidebarsInput = {
  /** Filter to find records to delete */
  filter: PageBodySidebarDeleteFilter;
};

export type DeleteManyPageHeadMetasInput = {
  /** Filter to find records to delete */
  filter: PageHeadMetaDeleteFilter;
};

export type DeleteManyPageHeadsInput = {
  /** Filter to find records to delete */
  filter: PageHeadDeleteFilter;
};

export type DeleteManyPagesInput = {
  /** Filter to find records to delete */
  filter: PageDeleteFilter;
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int'];
};

export type DeleteOneCommonAInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOnePageBodyFooterInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOnePageBodyHeaderInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOnePageBodyInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOnePageBodyMainArticleInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOnePageBodyMainInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOnePageBodyNavigationInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOnePageBodySidebarInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOnePageHeadInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOnePageHeadMetaInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type DeleteOnePageInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export type FooterUnion = PageBodyFooterExtended | PageBodyFooterSimple;

export type HeaderUnion = PageBodyHeaderCurved | PageBodyHeaderSkewed;

export type IdFilterComparison = {
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  iLike?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  neq?: InputMaybe<Scalars['ID']>;
  notILike?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  notLike?: InputMaybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addArticlesToPageBodyMain: PageBodyMain;
  addItemsToPageBodyNavigation: PageBodyNavigation;
  createManyCommonAS: Array<CommonA>;
  createManyPageBodies: Array<PageBody>;
  createManyPageBodyFooters: Array<PageBodyFooter>;
  createManyPageBodyHeaders: Array<PageBodyHeader>;
  createManyPageBodyMainArticles: Array<PageBodyMainArticle>;
  createManyPageBodyMains: Array<PageBodyMain>;
  createManyPageBodyNavigations: Array<PageBodyNavigation>;
  createManyPageBodySidebars: Array<PageBodySidebar>;
  createManyPageHeadMetas: Array<PageHeadMeta>;
  createManyPageHeads: Array<PageHead>;
  createManyPages: Array<Page>;
  createOneCommonA: CommonA;
  createOnePage: Page;
  createOnePageBody: PageBody;
  createOnePageBodyFooter: PageBodyFooter;
  createOnePageBodyHeader: PageBodyHeader;
  createOnePageBodyMain: PageBodyMain;
  createOnePageBodyMainArticle: PageBodyMainArticle;
  createOnePageBodyNavigation: PageBodyNavigation;
  createOnePageBodySidebar: PageBodySidebar;
  createOnePageHead: PageHead;
  createOnePageHeadMeta: PageHeadMeta;
  deleteManyCommonAS: DeleteManyResponse;
  deleteManyPageBodies: DeleteManyResponse;
  deleteManyPageBodyFooters: DeleteManyResponse;
  deleteManyPageBodyHeaders: DeleteManyResponse;
  deleteManyPageBodyMainArticles: DeleteManyResponse;
  deleteManyPageBodyMains: DeleteManyResponse;
  deleteManyPageBodyNavigations: DeleteManyResponse;
  deleteManyPageBodySidebars: DeleteManyResponse;
  deleteManyPageHeadMetas: DeleteManyResponse;
  deleteManyPageHeads: DeleteManyResponse;
  deleteManyPages: DeleteManyResponse;
  deleteOneCommonA: CommonADeleteResponse;
  deleteOnePage: PageDeleteResponse;
  deleteOnePageBody: PageBodyDeleteResponse;
  deleteOnePageBodyFooter: PageBodyFooterDeleteResponse;
  deleteOnePageBodyHeader: PageBodyHeaderDeleteResponse;
  deleteOnePageBodyMain: PageBodyMainDeleteResponse;
  deleteOnePageBodyMainArticle: PageBodyMainArticleDeleteResponse;
  deleteOnePageBodyNavigation: PageBodyNavigationDeleteResponse;
  deleteOnePageBodySidebar: PageBodySidebarDeleteResponse;
  deleteOnePageHead: PageHeadDeleteResponse;
  deleteOnePageHeadMeta: PageHeadMetaDeleteResponse;
  setArticlesOnPageBodyMain: PageBodyMain;
  setBodyOnPage: Page;
  setFooterOnPageBody: PageBody;
  setHeadOnPage: Page;
  setHeaderOnPageBody: PageBody;
  setItemsOnPageBodyNavigation: PageBodyNavigation;
  setMainOnPageBody: PageBody;
  setMetaOnPageHead: PageHead;
  setNavigationOnPageBody: PageBody;
  setSidebarOnPageBody: PageBody;
  updateManyCommonAS: UpdateManyResponse;
  updateManyPageBodies: UpdateManyResponse;
  updateManyPageBodyFooters: UpdateManyResponse;
  updateManyPageBodyHeaders: UpdateManyResponse;
  updateManyPageBodyMainArticles: UpdateManyResponse;
  updateManyPageBodyMains: UpdateManyResponse;
  updateManyPageBodyNavigations: UpdateManyResponse;
  updateManyPageBodySidebars: UpdateManyResponse;
  updateManyPageHeadMetas: UpdateManyResponse;
  updateManyPageHeads: UpdateManyResponse;
  updateManyPages: UpdateManyResponse;
  updateOneCommonA: CommonA;
  updateOnePage: Page;
  updateOnePageBody: PageBody;
  updateOnePageBodyFooter: PageBodyFooter;
  updateOnePageBodyHeader: PageBodyHeader;
  updateOnePageBodyMain: PageBodyMain;
  updateOnePageBodyMainArticle: PageBodyMainArticle;
  updateOnePageBodyNavigation: PageBodyNavigation;
  updateOnePageBodySidebar: PageBodySidebar;
  updateOnePageHead: PageHead;
  updateOnePageHeadMeta: PageHeadMeta;
};

export type MutationAddArticlesToPageBodyMainArgs = {
  input: AddArticlesToPageBodyMainInput;
};

export type MutationAddItemsToPageBodyNavigationArgs = {
  input: AddItemsToPageBodyNavigationInput;
};

export type MutationCreateManyCommonAsArgs = {
  input: CreateManyCommonAsInput;
};

export type MutationCreateManyPageBodiesArgs = {
  input: CreateManyPageBodiesInput;
};

export type MutationCreateManyPageBodyFootersArgs = {
  input: CreateManyPageBodyFootersInput;
};

export type MutationCreateManyPageBodyHeadersArgs = {
  input: CreateManyPageBodyHeadersInput;
};

export type MutationCreateManyPageBodyMainArticlesArgs = {
  input: CreateManyPageBodyMainArticlesInput;
};

export type MutationCreateManyPageBodyMainsArgs = {
  input: CreateManyPageBodyMainsInput;
};

export type MutationCreateManyPageBodyNavigationsArgs = {
  input: CreateManyPageBodyNavigationsInput;
};

export type MutationCreateManyPageBodySidebarsArgs = {
  input: CreateManyPageBodySidebarsInput;
};

export type MutationCreateManyPageHeadMetasArgs = {
  input: CreateManyPageHeadMetasInput;
};

export type MutationCreateManyPageHeadsArgs = {
  input: CreateManyPageHeadsInput;
};

export type MutationCreateManyPagesArgs = {
  input: CreateManyPagesInput;
};

export type MutationCreateOneCommonAArgs = {
  input: CreateOneCommonAInput;
};

export type MutationCreateOnePageArgs = {
  input: CreateOnePageInput;
};

export type MutationCreateOnePageBodyArgs = {
  input: CreateOnePageBodyInput;
};

export type MutationCreateOnePageBodyFooterArgs = {
  input: CreateOnePageBodyFooterInput;
};

export type MutationCreateOnePageBodyHeaderArgs = {
  input: CreateOnePageBodyHeaderInput;
};

export type MutationCreateOnePageBodyMainArgs = {
  input: CreateOnePageBodyMainInput;
};

export type MutationCreateOnePageBodyMainArticleArgs = {
  input: CreateOnePageBodyMainArticleInput;
};

export type MutationCreateOnePageBodyNavigationArgs = {
  input: CreateOnePageBodyNavigationInput;
};

export type MutationCreateOnePageBodySidebarArgs = {
  input: CreateOnePageBodySidebarInput;
};

export type MutationCreateOnePageHeadArgs = {
  input: CreateOnePageHeadInput;
};

export type MutationCreateOnePageHeadMetaArgs = {
  input: CreateOnePageHeadMetaInput;
};

export type MutationDeleteManyCommonAsArgs = {
  input: DeleteManyCommonAsInput;
};

export type MutationDeleteManyPageBodiesArgs = {
  input: DeleteManyPageBodiesInput;
};

export type MutationDeleteManyPageBodyFootersArgs = {
  input: DeleteManyPageBodyFootersInput;
};

export type MutationDeleteManyPageBodyHeadersArgs = {
  input: DeleteManyPageBodyHeadersInput;
};

export type MutationDeleteManyPageBodyMainArticlesArgs = {
  input: DeleteManyPageBodyMainArticlesInput;
};

export type MutationDeleteManyPageBodyMainsArgs = {
  input: DeleteManyPageBodyMainsInput;
};

export type MutationDeleteManyPageBodyNavigationsArgs = {
  input: DeleteManyPageBodyNavigationsInput;
};

export type MutationDeleteManyPageBodySidebarsArgs = {
  input: DeleteManyPageBodySidebarsInput;
};

export type MutationDeleteManyPageHeadMetasArgs = {
  input: DeleteManyPageHeadMetasInput;
};

export type MutationDeleteManyPageHeadsArgs = {
  input: DeleteManyPageHeadsInput;
};

export type MutationDeleteManyPagesArgs = {
  input: DeleteManyPagesInput;
};

export type MutationDeleteOneCommonAArgs = {
  input: DeleteOneCommonAInput;
};

export type MutationDeleteOnePageArgs = {
  input: DeleteOnePageInput;
};

export type MutationDeleteOnePageBodyArgs = {
  input: DeleteOnePageBodyInput;
};

export type MutationDeleteOnePageBodyFooterArgs = {
  input: DeleteOnePageBodyFooterInput;
};

export type MutationDeleteOnePageBodyHeaderArgs = {
  input: DeleteOnePageBodyHeaderInput;
};

export type MutationDeleteOnePageBodyMainArgs = {
  input: DeleteOnePageBodyMainInput;
};

export type MutationDeleteOnePageBodyMainArticleArgs = {
  input: DeleteOnePageBodyMainArticleInput;
};

export type MutationDeleteOnePageBodyNavigationArgs = {
  input: DeleteOnePageBodyNavigationInput;
};

export type MutationDeleteOnePageBodySidebarArgs = {
  input: DeleteOnePageBodySidebarInput;
};

export type MutationDeleteOnePageHeadArgs = {
  input: DeleteOnePageHeadInput;
};

export type MutationDeleteOnePageHeadMetaArgs = {
  input: DeleteOnePageHeadMetaInput;
};

export type MutationSetArticlesOnPageBodyMainArgs = {
  input: SetArticlesOnPageBodyMainInput;
};

export type MutationSetBodyOnPageArgs = {
  input: SetBodyOnPageInput;
};

export type MutationSetFooterOnPageBodyArgs = {
  input: SetFooterOnPageBodyInput;
};

export type MutationSetHeadOnPageArgs = {
  input: SetHeadOnPageInput;
};

export type MutationSetHeaderOnPageBodyArgs = {
  input: SetHeaderOnPageBodyInput;
};

export type MutationSetItemsOnPageBodyNavigationArgs = {
  input: SetItemsOnPageBodyNavigationInput;
};

export type MutationSetMainOnPageBodyArgs = {
  input: SetMainOnPageBodyInput;
};

export type MutationSetMetaOnPageHeadArgs = {
  input: SetMetaOnPageHeadInput;
};

export type MutationSetNavigationOnPageBodyArgs = {
  input: SetNavigationOnPageBodyInput;
};

export type MutationSetSidebarOnPageBodyArgs = {
  input: SetSidebarOnPageBodyInput;
};

export type MutationUpdateManyCommonAsArgs = {
  input: UpdateManyCommonAsInput;
};

export type MutationUpdateManyPageBodiesArgs = {
  input: UpdateManyPageBodiesInput;
};

export type MutationUpdateManyPageBodyFootersArgs = {
  input: UpdateManyPageBodyFootersInput;
};

export type MutationUpdateManyPageBodyHeadersArgs = {
  input: UpdateManyPageBodyHeadersInput;
};

export type MutationUpdateManyPageBodyMainArticlesArgs = {
  input: UpdateManyPageBodyMainArticlesInput;
};

export type MutationUpdateManyPageBodyMainsArgs = {
  input: UpdateManyPageBodyMainsInput;
};

export type MutationUpdateManyPageBodyNavigationsArgs = {
  input: UpdateManyPageBodyNavigationsInput;
};

export type MutationUpdateManyPageBodySidebarsArgs = {
  input: UpdateManyPageBodySidebarsInput;
};

export type MutationUpdateManyPageHeadMetasArgs = {
  input: UpdateManyPageHeadMetasInput;
};

export type MutationUpdateManyPageHeadsArgs = {
  input: UpdateManyPageHeadsInput;
};

export type MutationUpdateManyPagesArgs = {
  input: UpdateManyPagesInput;
};

export type MutationUpdateOneCommonAArgs = {
  input: UpdateOneCommonAInput;
};

export type MutationUpdateOnePageArgs = {
  input: UpdateOnePageInput;
};

export type MutationUpdateOnePageBodyArgs = {
  input: UpdateOnePageBodyInput;
};

export type MutationUpdateOnePageBodyFooterArgs = {
  input: UpdateOnePageBodyFooterInput;
};

export type MutationUpdateOnePageBodyHeaderArgs = {
  input: UpdateOnePageBodyHeaderInput;
};

export type MutationUpdateOnePageBodyMainArgs = {
  input: UpdateOnePageBodyMainInput;
};

export type MutationUpdateOnePageBodyMainArticleArgs = {
  input: UpdateOnePageBodyMainArticleInput;
};

export type MutationUpdateOnePageBodyNavigationArgs = {
  input: UpdateOnePageBodyNavigationInput;
};

export type MutationUpdateOnePageBodySidebarArgs = {
  input: UpdateOnePageBodySidebarInput;
};

export type MutationUpdateOnePageHeadArgs = {
  input: UpdateOnePageHeadInput;
};

export type MutationUpdateOnePageHeadMetaArgs = {
  input: UpdateOnePageHeadMetaInput;
};

export type Page = {
  __typename?: 'Page';
  body: PageBody;
  created: Scalars['DateTime'];
  head: PageHead;
  id: Scalars['ID'];
  lang: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type PageAggregateGroupBy = {
  __typename?: 'PageAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type PageAvgAggregate = {
  __typename?: 'PageAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PageBody = {
  __typename?: 'PageBody';
  created: Scalars['DateTime'];
  footer: FooterUnion;
  header: HeaderUnion;
  id: Scalars['ID'];
  main: PageBodyMain;
  navigation: PageBodyNavigation;
  sidebar: PageBodySidebar;
  updated_at: Scalars['DateTime'];
};

export type PageBodyAggregateGroupBy = {
  __typename?: 'PageBodyAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type PageBodyAvgAggregate = {
  __typename?: 'PageBodyAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PageBodyConnection = {
  __typename?: 'PageBodyConnection';
  /** Array of edges. */
  edges: Array<PageBodyEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type PageBodyCountAggregate = {
  __typename?: 'PageBodyCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type PageBodyDeleteFilter = {
  and?: InputMaybe<Array<PageBodyDeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageBodyDeleteFilter>>;
};

export type PageBodyDeleteResponse = {
  __typename?: 'PageBodyDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type PageBodyEdge = {
  __typename?: 'PageBodyEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the PageBody */
  node: PageBody;
};

export type PageBodyFilter = {
  and?: InputMaybe<Array<PageBodyFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageBodyFilter>>;
};

export type PageBodyFooter = {
  __typename?: 'PageBodyFooter';
  created: Scalars['DateTime'];
  id: Scalars['ID'];
  type: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type PageBodyFooterAggregateGroupBy = {
  __typename?: 'PageBodyFooterAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type PageBodyFooterAvgAggregate = {
  __typename?: 'PageBodyFooterAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PageBodyFooterConnection = {
  __typename?: 'PageBodyFooterConnection';
  /** Array of edges. */
  edges: Array<PageBodyFooterEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type PageBodyFooterCountAggregate = {
  __typename?: 'PageBodyFooterCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type PageBodyFooterDeleteFilter = {
  and?: InputMaybe<Array<PageBodyFooterDeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageBodyFooterDeleteFilter>>;
};

export type PageBodyFooterDeleteResponse = {
  __typename?: 'PageBodyFooterDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type PageBodyFooterEdge = {
  __typename?: 'PageBodyFooterEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the PageBodyFooter */
  node: PageBodyFooter;
};

export type PageBodyFooterExtended = {
  __typename?: 'PageBodyFooterExtended';
  copyright: Scalars['String'];
  created: Scalars['DateTime'];
  id: Scalars['ID'];
  subTitle: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type PageBodyFooterFilter = {
  and?: InputMaybe<Array<PageBodyFooterFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageBodyFooterFilter>>;
};

export type PageBodyFooterMaxAggregate = {
  __typename?: 'PageBodyFooterMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type PageBodyFooterMinAggregate = {
  __typename?: 'PageBodyFooterMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type PageBodyFooterSimple = {
  __typename?: 'PageBodyFooterSimple';
  copyright: Scalars['String'];
  created: Scalars['DateTime'];
  id: Scalars['ID'];
  subTitle: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type PageBodyFooterSort = {
  direction: SortDirection;
  field: PageBodyFooterSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PageBodyFooterSortFields {
  Id = 'id',
}

export type PageBodyFooterSumAggregate = {
  __typename?: 'PageBodyFooterSumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PageBodyFooterUpdateFilter = {
  and?: InputMaybe<Array<PageBodyFooterUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageBodyFooterUpdateFilter>>;
};

export type PageBodyHeader = {
  __typename?: 'PageBodyHeader';
  created: Scalars['DateTime'];
  id: Scalars['ID'];
  type: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type PageBodyHeaderAggregateGroupBy = {
  __typename?: 'PageBodyHeaderAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type PageBodyHeaderAvgAggregate = {
  __typename?: 'PageBodyHeaderAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PageBodyHeaderConnection = {
  __typename?: 'PageBodyHeaderConnection';
  /** Array of edges. */
  edges: Array<PageBodyHeaderEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type PageBodyHeaderCountAggregate = {
  __typename?: 'PageBodyHeaderCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type PageBodyHeaderCurved = {
  __typename?: 'PageBodyHeaderCurved';
  created: Scalars['DateTime'];
  id: Scalars['ID'];
  subTitle: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type PageBodyHeaderDeleteFilter = {
  and?: InputMaybe<Array<PageBodyHeaderDeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageBodyHeaderDeleteFilter>>;
};

export type PageBodyHeaderDeleteResponse = {
  __typename?: 'PageBodyHeaderDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type PageBodyHeaderEdge = {
  __typename?: 'PageBodyHeaderEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the PageBodyHeader */
  node: PageBodyHeader;
};

export type PageBodyHeaderFilter = {
  and?: InputMaybe<Array<PageBodyHeaderFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageBodyHeaderFilter>>;
};

export type PageBodyHeaderMaxAggregate = {
  __typename?: 'PageBodyHeaderMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type PageBodyHeaderMinAggregate = {
  __typename?: 'PageBodyHeaderMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type PageBodyHeaderSkewed = {
  __typename?: 'PageBodyHeaderSkewed';
  created: Scalars['DateTime'];
  id: Scalars['ID'];
  subTitle: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type PageBodyHeaderSort = {
  direction: SortDirection;
  field: PageBodyHeaderSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PageBodyHeaderSortFields {
  Id = 'id',
}

export type PageBodyHeaderSumAggregate = {
  __typename?: 'PageBodyHeaderSumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PageBodyHeaderUpdateFilter = {
  and?: InputMaybe<Array<PageBodyHeaderUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageBodyHeaderUpdateFilter>>;
};

export type PageBodyMain = {
  __typename?: 'PageBodyMain';
  articles: Array<ArticleUnion>;
  created: Scalars['DateTime'];
  id: Scalars['ID'];
  updated_at: Scalars['DateTime'];
};

export type PageBodyMainAggregateGroupBy = {
  __typename?: 'PageBodyMainAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type PageBodyMainArticle = {
  __typename?: 'PageBodyMainArticle';
  created: Scalars['DateTime'];
  id: Scalars['ID'];
  type: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type PageBodyMainArticleAggregateGroupBy = {
  __typename?: 'PageBodyMainArticleAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type PageBodyMainArticleAvgAggregate = {
  __typename?: 'PageBodyMainArticleAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PageBodyMainArticleConnection = {
  __typename?: 'PageBodyMainArticleConnection';
  /** Array of edges. */
  edges: Array<PageBodyMainArticleEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type PageBodyMainArticleCountAggregate = {
  __typename?: 'PageBodyMainArticleCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type PageBodyMainArticleDeleteFilter = {
  and?: InputMaybe<Array<PageBodyMainArticleDeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageBodyMainArticleDeleteFilter>>;
};

export type PageBodyMainArticleDeleteResponse = {
  __typename?: 'PageBodyMainArticleDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type PageBodyMainArticleEdge = {
  __typename?: 'PageBodyMainArticleEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the PageBodyMainArticle */
  node: PageBodyMainArticle;
};

export type PageBodyMainArticleFilter = {
  and?: InputMaybe<Array<PageBodyMainArticleFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageBodyMainArticleFilter>>;
};

export type PageBodyMainArticleMarkdown = {
  __typename?: 'PageBodyMainArticleMarkdown';
  created: Scalars['DateTime'];
  id: Scalars['ID'];
  markdown: Scalars['String'];
  subTitle: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type PageBodyMainArticleMaxAggregate = {
  __typename?: 'PageBodyMainArticleMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type PageBodyMainArticleMinAggregate = {
  __typename?: 'PageBodyMainArticleMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type PageBodyMainArticleSort = {
  direction: SortDirection;
  field: PageBodyMainArticleSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PageBodyMainArticleSortFields {
  Id = 'id',
}

export type PageBodyMainArticleSumAggregate = {
  __typename?: 'PageBodyMainArticleSumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PageBodyMainArticleUpdateFilter = {
  and?: InputMaybe<Array<PageBodyMainArticleUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageBodyMainArticleUpdateFilter>>;
};

export type PageBodyMainAvgAggregate = {
  __typename?: 'PageBodyMainAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PageBodyMainConnection = {
  __typename?: 'PageBodyMainConnection';
  /** Array of edges. */
  edges: Array<PageBodyMainEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type PageBodyMainCountAggregate = {
  __typename?: 'PageBodyMainCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type PageBodyMainDeleteFilter = {
  and?: InputMaybe<Array<PageBodyMainDeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageBodyMainDeleteFilter>>;
};

export type PageBodyMainDeleteResponse = {
  __typename?: 'PageBodyMainDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type PageBodyMainEdge = {
  __typename?: 'PageBodyMainEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the PageBodyMain */
  node: PageBodyMain;
};

export type PageBodyMainFilter = {
  and?: InputMaybe<Array<PageBodyMainFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageBodyMainFilter>>;
};

export type PageBodyMainMaxAggregate = {
  __typename?: 'PageBodyMainMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type PageBodyMainMinAggregate = {
  __typename?: 'PageBodyMainMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type PageBodyMainSort = {
  direction: SortDirection;
  field: PageBodyMainSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PageBodyMainSortFields {
  Id = 'id',
}

export type PageBodyMainSumAggregate = {
  __typename?: 'PageBodyMainSumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PageBodyMainUpdateFilter = {
  and?: InputMaybe<Array<PageBodyMainUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageBodyMainUpdateFilter>>;
};

export type PageBodyMaxAggregate = {
  __typename?: 'PageBodyMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type PageBodyMinAggregate = {
  __typename?: 'PageBodyMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type PageBodyNavigation = {
  __typename?: 'PageBodyNavigation';
  created: Scalars['DateTime'];
  id: Scalars['ID'];
  items?: Maybe<Array<CommonA>>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type PageBodyNavigationItemsArgs = {
  filter?: InputMaybe<CommonAFilter>;
  sorting?: InputMaybe<Array<CommonASort>>;
};

export type PageBodyNavigationAggregateGroupBy = {
  __typename?: 'PageBodyNavigationAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type PageBodyNavigationAvgAggregate = {
  __typename?: 'PageBodyNavigationAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PageBodyNavigationConnection = {
  __typename?: 'PageBodyNavigationConnection';
  /** Array of edges. */
  edges: Array<PageBodyNavigationEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type PageBodyNavigationCountAggregate = {
  __typename?: 'PageBodyNavigationCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type PageBodyNavigationDeleteFilter = {
  and?: InputMaybe<Array<PageBodyNavigationDeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageBodyNavigationDeleteFilter>>;
};

export type PageBodyNavigationDeleteResponse = {
  __typename?: 'PageBodyNavigationDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type PageBodyNavigationEdge = {
  __typename?: 'PageBodyNavigationEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the PageBodyNavigation */
  node: PageBodyNavigation;
};

export type PageBodyNavigationFilter = {
  and?: InputMaybe<Array<PageBodyNavigationFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageBodyNavigationFilter>>;
};

export type PageBodyNavigationMaxAggregate = {
  __typename?: 'PageBodyNavigationMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type PageBodyNavigationMinAggregate = {
  __typename?: 'PageBodyNavigationMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type PageBodyNavigationSort = {
  direction: SortDirection;
  field: PageBodyNavigationSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PageBodyNavigationSortFields {
  Id = 'id',
}

export type PageBodyNavigationSumAggregate = {
  __typename?: 'PageBodyNavigationSumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PageBodyNavigationUpdateFilter = {
  and?: InputMaybe<Array<PageBodyNavigationUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageBodyNavigationUpdateFilter>>;
};

export type PageBodySidebar = {
  __typename?: 'PageBodySidebar';
  created: Scalars['DateTime'];
  id: Scalars['ID'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type PageBodySidebarAggregateGroupBy = {
  __typename?: 'PageBodySidebarAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type PageBodySidebarAvgAggregate = {
  __typename?: 'PageBodySidebarAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PageBodySidebarConnection = {
  __typename?: 'PageBodySidebarConnection';
  /** Array of edges. */
  edges: Array<PageBodySidebarEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type PageBodySidebarCountAggregate = {
  __typename?: 'PageBodySidebarCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type PageBodySidebarDeleteFilter = {
  and?: InputMaybe<Array<PageBodySidebarDeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageBodySidebarDeleteFilter>>;
};

export type PageBodySidebarDeleteResponse = {
  __typename?: 'PageBodySidebarDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type PageBodySidebarEdge = {
  __typename?: 'PageBodySidebarEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the PageBodySidebar */
  node: PageBodySidebar;
};

export type PageBodySidebarFilter = {
  and?: InputMaybe<Array<PageBodySidebarFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageBodySidebarFilter>>;
};

export type PageBodySidebarMaxAggregate = {
  __typename?: 'PageBodySidebarMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type PageBodySidebarMinAggregate = {
  __typename?: 'PageBodySidebarMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type PageBodySidebarSort = {
  direction: SortDirection;
  field: PageBodySidebarSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PageBodySidebarSortFields {
  Id = 'id',
}

export type PageBodySidebarSumAggregate = {
  __typename?: 'PageBodySidebarSumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PageBodySidebarUpdateFilter = {
  and?: InputMaybe<Array<PageBodySidebarUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageBodySidebarUpdateFilter>>;
};

export type PageBodySort = {
  direction: SortDirection;
  field: PageBodySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PageBodySortFields {
  Id = 'id',
}

export type PageBodySumAggregate = {
  __typename?: 'PageBodySumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PageBodyUpdateFilter = {
  and?: InputMaybe<Array<PageBodyUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageBodyUpdateFilter>>;
};

export type PageConnection = {
  __typename?: 'PageConnection';
  /** Array of edges. */
  edges: Array<PageEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type PageCountAggregate = {
  __typename?: 'PageCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type PageDeleteFilter = {
  and?: InputMaybe<Array<PageDeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageDeleteFilter>>;
};

export type PageDeleteResponse = {
  __typename?: 'PageDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  lang?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type PageEdge = {
  __typename?: 'PageEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Page */
  node: Page;
};

export type PageFilter = {
  and?: InputMaybe<Array<PageFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageFilter>>;
};

export type PageHead = {
  __typename?: 'PageHead';
  created: Scalars['DateTime'];
  id: Scalars['ID'];
  meta: PageHeadMeta;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type PageHeadAggregateGroupBy = {
  __typename?: 'PageHeadAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type PageHeadAvgAggregate = {
  __typename?: 'PageHeadAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PageHeadConnection = {
  __typename?: 'PageHeadConnection';
  /** Array of edges. */
  edges: Array<PageHeadEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type PageHeadCountAggregate = {
  __typename?: 'PageHeadCountAggregate';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
};

export type PageHeadDeleteFilter = {
  and?: InputMaybe<Array<PageHeadDeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageHeadDeleteFilter>>;
  title?: InputMaybe<StringFieldComparison>;
};

export type PageHeadDeleteResponse = {
  __typename?: 'PageHeadDeleteResponse';
  created?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type PageHeadEdge = {
  __typename?: 'PageHeadEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the PageHead */
  node: PageHead;
};

export type PageHeadFilter = {
  and?: InputMaybe<Array<PageHeadFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageHeadFilter>>;
  title?: InputMaybe<StringFieldComparison>;
};

export type PageHeadMaxAggregate = {
  __typename?: 'PageHeadMaxAggregate';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type PageHeadMeta = {
  __typename?: 'PageHeadMeta';
  charset: Scalars['String'];
  created: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  nofollow: Scalars['Boolean'];
  noindex: Scalars['Boolean'];
  updated_at: Scalars['DateTime'];
  viewport: Scalars['String'];
};

export type PageHeadMetaAggregateGroupBy = {
  __typename?: 'PageHeadMetaAggregateGroupBy';
  id?: Maybe<Scalars['ID']>;
};

export type PageHeadMetaAvgAggregate = {
  __typename?: 'PageHeadMetaAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PageHeadMetaConnection = {
  __typename?: 'PageHeadMetaConnection';
  /** Array of edges. */
  edges: Array<PageHeadMetaEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type PageHeadMetaCountAggregate = {
  __typename?: 'PageHeadMetaCountAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type PageHeadMetaDeleteFilter = {
  and?: InputMaybe<Array<PageHeadMetaDeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageHeadMetaDeleteFilter>>;
};

export type PageHeadMetaDeleteResponse = {
  __typename?: 'PageHeadMetaDeleteResponse';
  charset?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  nofollow?: Maybe<Scalars['Boolean']>;
  noindex?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  viewport?: Maybe<Scalars['String']>;
};

export type PageHeadMetaEdge = {
  __typename?: 'PageHeadMetaEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the PageHeadMeta */
  node: PageHeadMeta;
};

export type PageHeadMetaFilter = {
  and?: InputMaybe<Array<PageHeadMetaFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageHeadMetaFilter>>;
};

export type PageHeadMetaMaxAggregate = {
  __typename?: 'PageHeadMetaMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type PageHeadMetaMinAggregate = {
  __typename?: 'PageHeadMetaMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type PageHeadMetaSort = {
  direction: SortDirection;
  field: PageHeadMetaSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PageHeadMetaSortFields {
  Id = 'id',
}

export type PageHeadMetaSumAggregate = {
  __typename?: 'PageHeadMetaSumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PageHeadMetaUpdateFilter = {
  and?: InputMaybe<Array<PageHeadMetaUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageHeadMetaUpdateFilter>>;
};

export type PageHeadMinAggregate = {
  __typename?: 'PageHeadMinAggregate';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type PageHeadSort = {
  direction: SortDirection;
  field: PageHeadSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PageHeadSortFields {
  Id = 'id',
  Title = 'title',
}

export type PageHeadSumAggregate = {
  __typename?: 'PageHeadSumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PageHeadUpdateFilter = {
  and?: InputMaybe<Array<PageHeadUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageHeadUpdateFilter>>;
  title?: InputMaybe<StringFieldComparison>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars['ConnectionCursor']>;
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars['ConnectionCursor']>;
};

export type PageMaxAggregate = {
  __typename?: 'PageMaxAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type PageMinAggregate = {
  __typename?: 'PageMinAggregate';
  id?: Maybe<Scalars['ID']>;
};

export type PageSort = {
  direction: SortDirection;
  field: PageSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PageSortFields {
  Id = 'id',
}

export type PageSumAggregate = {
  __typename?: 'PageSumAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type PageUpdateFilter = {
  and?: InputMaybe<Array<PageUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PageUpdateFilter>>;
};

export type Query = {
  __typename?: 'Query';
  commonA?: Maybe<CommonA>;
  commonAS: CommonAConnection;
  page?: Maybe<Page>;
  pageBodies: PageBodyConnection;
  pageBody?: Maybe<PageBody>;
  pageBodyFooter?: Maybe<PageBodyFooter>;
  pageBodyFooters: PageBodyFooterConnection;
  pageBodyHeader?: Maybe<PageBodyHeader>;
  pageBodyHeaders: PageBodyHeaderConnection;
  pageBodyMain?: Maybe<PageBodyMain>;
  pageBodyMainArticle?: Maybe<PageBodyMainArticle>;
  pageBodyMainArticles: PageBodyMainArticleConnection;
  pageBodyMains: PageBodyMainConnection;
  pageBodyNavigation?: Maybe<PageBodyNavigation>;
  pageBodyNavigations: PageBodyNavigationConnection;
  pageBodySidebar?: Maybe<PageBodySidebar>;
  pageBodySidebars: PageBodySidebarConnection;
  pageHead?: Maybe<PageHead>;
  pageHeadMeta?: Maybe<PageHeadMeta>;
  pageHeadMetas: PageHeadMetaConnection;
  pageHeads: PageHeadConnection;
  pages: PageConnection;
  users: Array<User>;
  whoAmI: User;
};

export type QueryCommonAArgs = {
  id: Scalars['ID'];
};

export type QueryCommonAsArgs = {
  filter?: InputMaybe<CommonAFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<CommonASort>>;
};

export type QueryPageArgs = {
  id: Scalars['ID'];
};

export type QueryPageBodiesArgs = {
  filter?: InputMaybe<PageBodyFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<PageBodySort>>;
};

export type QueryPageBodyArgs = {
  id: Scalars['ID'];
};

export type QueryPageBodyFooterArgs = {
  id: Scalars['ID'];
};

export type QueryPageBodyFootersArgs = {
  filter?: InputMaybe<PageBodyFooterFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<PageBodyFooterSort>>;
};

export type QueryPageBodyHeaderArgs = {
  id: Scalars['ID'];
};

export type QueryPageBodyHeadersArgs = {
  filter?: InputMaybe<PageBodyHeaderFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<PageBodyHeaderSort>>;
};

export type QueryPageBodyMainArgs = {
  id: Scalars['ID'];
};

export type QueryPageBodyMainArticleArgs = {
  id: Scalars['ID'];
};

export type QueryPageBodyMainArticlesArgs = {
  filter?: InputMaybe<PageBodyMainArticleFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<PageBodyMainArticleSort>>;
};

export type QueryPageBodyMainsArgs = {
  filter?: InputMaybe<PageBodyMainFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<PageBodyMainSort>>;
};

export type QueryPageBodyNavigationArgs = {
  id: Scalars['ID'];
};

export type QueryPageBodyNavigationsArgs = {
  filter?: InputMaybe<PageBodyNavigationFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<PageBodyNavigationSort>>;
};

export type QueryPageBodySidebarArgs = {
  id: Scalars['ID'];
};

export type QueryPageBodySidebarsArgs = {
  filter?: InputMaybe<PageBodySidebarFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<PageBodySidebarSort>>;
};

export type QueryPageHeadArgs = {
  id: Scalars['ID'];
};

export type QueryPageHeadMetaArgs = {
  id: Scalars['ID'];
};

export type QueryPageHeadMetasArgs = {
  filter?: InputMaybe<PageHeadMetaFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<PageHeadMetaSort>>;
};

export type QueryPageHeadsArgs = {
  filter?: InputMaybe<PageHeadFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<PageHeadSort>>;
};

export type QueryPagesArgs = {
  filter?: InputMaybe<PageFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<PageSort>>;
};

export enum RelEnum {
  Alternate = 'ALTERNATE',
  Author = 'AUTHOR',
  Bookmark = 'BOOKMARK',
  External = 'EXTERNAL',
  Help = 'HELP',
  License = 'LICENSE',
  Next = 'NEXT',
  Nofollow = 'NOFOLLOW',
  Noopener = 'NOOPENER',
  Noreferrer = 'NOREFERRER',
  Prev = 'PREV',
  Search = 'SEARCH',
  Tag = 'TAG',
}

export type SetArticlesOnPageBodyMainInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetBodyOnPageInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetFooterOnPageBodyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetHeadOnPageInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetHeaderOnPageBodyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetItemsOnPageBodyNavigationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type SetMainOnPageBodyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetMetaOnPageHeadInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetNavigationOnPageBodyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type SetSidebarOnPageBodyInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST',
}

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  iLike?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  notILike?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  notLike?: InputMaybe<Scalars['String']>;
};

export enum TargetEnum {
  Blank = 'BLANK',
  Parent = 'PARENT',
  Self = 'SELF',
  Top = 'TOP',
}

export type UpdateCommonA = {
  created?: InputMaybe<Scalars['DateTime']>;
  href?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  rel?: InputMaybe<RelEnum>;
  target?: InputMaybe<TargetEnum>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UpdateManyCommonAsInput = {
  /** Filter used to find fields to update */
  filter: CommonAUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdateCommonA;
};

export type UpdateManyPageBodiesInput = {
  /** Filter used to find fields to update */
  filter: PageBodyUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdatePageBody;
};

export type UpdateManyPageBodyFootersInput = {
  /** Filter used to find fields to update */
  filter: PageBodyFooterUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdatePageBodyFooter;
};

export type UpdateManyPageBodyHeadersInput = {
  /** Filter used to find fields to update */
  filter: PageBodyHeaderUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdatePageBodyHeader;
};

export type UpdateManyPageBodyMainArticlesInput = {
  /** Filter used to find fields to update */
  filter: PageBodyMainArticleUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdatePageBodyMainArticle;
};

export type UpdateManyPageBodyMainsInput = {
  /** Filter used to find fields to update */
  filter: PageBodyMainUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdatePageBodyMain;
};

export type UpdateManyPageBodyNavigationsInput = {
  /** Filter used to find fields to update */
  filter: PageBodyNavigationUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdatePageBodyNavigation;
};

export type UpdateManyPageBodySidebarsInput = {
  /** Filter used to find fields to update */
  filter: PageBodySidebarUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdatePageBodySidebar;
};

export type UpdateManyPageHeadMetasInput = {
  /** Filter used to find fields to update */
  filter: PageHeadMetaUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdatePageHeadMeta;
};

export type UpdateManyPageHeadsInput = {
  /** Filter used to find fields to update */
  filter: PageHeadUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdatePageHead;
};

export type UpdateManyPagesInput = {
  /** Filter used to find fields to update */
  filter: PageUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UpdatePage;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int'];
};

export type UpdateOneCommonAInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdateCommonA;
};

export type UpdateOnePageBodyFooterInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdatePageBodyFooter;
};

export type UpdateOnePageBodyHeaderInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdatePageBodyHeader;
};

export type UpdateOnePageBodyInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdatePageBody;
};

export type UpdateOnePageBodyMainArticleInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdatePageBodyMainArticle;
};

export type UpdateOnePageBodyMainInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdatePageBodyMain;
};

export type UpdateOnePageBodyNavigationInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdatePageBodyNavigation;
};

export type UpdateOnePageBodySidebarInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdatePageBodySidebar;
};

export type UpdateOnePageHeadInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdatePageHead;
};

export type UpdateOnePageHeadMetaInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdatePageHeadMeta;
};

export type UpdateOnePageInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UpdatePage;
};

export type UpdatePage = {
  created?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  lang?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UpdatePageBody = {
  created?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UpdatePageBodyFooter = {
  created?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UpdatePageBodyHeader = {
  created?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UpdatePageBodyMain = {
  created?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UpdatePageBodyMainArticle = {
  created?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UpdatePageBodyNavigation = {
  created?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UpdatePageBodySidebar = {
  created?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UpdatePageHead = {
  created?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type UpdatePageHeadMeta = {
  charset?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  nofollow?: InputMaybe<Scalars['Boolean']>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
  viewport?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  created_at: Scalars['DateTime'];
  id: Scalars['Float'];
  name: Scalars['String'];
  provider: Scalars['String'];
  providerId: Scalars['String'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
};

export type BodyFragment = {
  __typename?: 'Page';
  body: {
    __typename?: 'PageBody';
    header:
      | { __typename?: 'PageBodyHeaderCurved'; title: string; subTitle: string }
      | {
          __typename?: 'PageBodyHeaderSkewed';
          title: string;
          subTitle: string;
        };
    navigation: {
      __typename?: 'PageBodyNavigation';
      title: string;
      items?: Array<{
        __typename?: 'CommonA';
        name: string;
        href: string;
        rel: RelEnum;
        target: TargetEnum;
      }> | null;
    };
    main: {
      __typename?: 'PageBodyMain';
      articles: Array<{
        __typename?: 'PageBodyMainArticleMarkdown';
        title: string;
        subTitle: string;
        markdown: string;
      }>;
    };
    footer:
      | {
          __typename?: 'PageBodyFooterExtended';
          title: string;
          subTitle: string;
          copyright: string;
        }
      | {
          __typename?: 'PageBodyFooterSimple';
          title: string;
          subTitle: string;
          copyright: string;
        };
  };
};

export type FooterFragment = {
  __typename?: 'PageBody';
  footer:
    | {
        __typename?: 'PageBodyFooterExtended';
        title: string;
        subTitle: string;
        copyright: string;
      }
    | {
        __typename?: 'PageBodyFooterSimple';
        title: string;
        subTitle: string;
        copyright: string;
      };
};

export type ExtendedFragment = {
  __typename?: 'PageBodyFooterExtended';
  title: string;
  subTitle: string;
  copyright: string;
};

export type SimpleFragment = {
  __typename?: 'PageBodyFooterSimple';
  title: string;
  subTitle: string;
  copyright: string;
};

export type HeaderFragment = {
  __typename?: 'PageBody';
  header:
    | { __typename?: 'PageBodyHeaderCurved'; title: string; subTitle: string }
    | { __typename?: 'PageBodyHeaderSkewed'; title: string; subTitle: string };
};

export type CurvedFragment = {
  __typename?: 'PageBodyHeaderCurved';
  title: string;
  subTitle: string;
};

export type SkewedFragment = {
  __typename?: 'PageBodyHeaderSkewed';
  title: string;
  subTitle: string;
};

export type MainFragment = {
  __typename?: 'PageBody';
  main: {
    __typename?: 'PageBodyMain';
    articles: Array<{
      __typename?: 'PageBodyMainArticleMarkdown';
      title: string;
      subTitle: string;
      markdown: string;
    }>;
  };
};

export type ArticleFragment = {
  __typename?: 'PageBodyMain';
  articles: Array<{
    __typename?: 'PageBodyMainArticleMarkdown';
    title: string;
    subTitle: string;
    markdown: string;
  }>;
};

export type MarkdownFragment = {
  __typename?: 'PageBodyMainArticleMarkdown';
  title: string;
  subTitle: string;
  markdown: string;
};

export type NavigationFragment = {
  __typename?: 'PageBody';
  navigation: {
    __typename?: 'PageBodyNavigation';
    title: string;
    items?: Array<{
      __typename?: 'CommonA';
      name: string;
      href: string;
      rel: RelEnum;
      target: TargetEnum;
    }> | null;
  };
};

export type HeadFragment = {
  __typename?: 'Page';
  head: {
    __typename?: 'PageHead';
    title: string;
    meta: {
      __typename?: 'PageHeadMeta';
      charset: string;
      description: string;
      noindex: boolean;
      nofollow: boolean;
      viewport: string;
    };
  };
};

export type PageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type PageQuery = {
  __typename?: 'Query';
  page?: {
    __typename?: 'Page';
    lang: string;
    head: {
      __typename?: 'PageHead';
      title: string;
      meta: {
        __typename?: 'PageHeadMeta';
        charset: string;
        description: string;
        noindex: boolean;
        nofollow: boolean;
        viewport: string;
      };
    };
    body: {
      __typename?: 'PageBody';
      header:
        | {
            __typename?: 'PageBodyHeaderCurved';
            title: string;
            subTitle: string;
          }
        | {
            __typename?: 'PageBodyHeaderSkewed';
            title: string;
            subTitle: string;
          };
      navigation: {
        __typename?: 'PageBodyNavigation';
        title: string;
        items?: Array<{
          __typename?: 'CommonA';
          name: string;
          href: string;
          rel: RelEnum;
          target: TargetEnum;
        }> | null;
      };
      main: {
        __typename?: 'PageBodyMain';
        articles: Array<{
          __typename?: 'PageBodyMainArticleMarkdown';
          title: string;
          subTitle: string;
          markdown: string;
        }>;
      };
      footer:
        | {
            __typename?: 'PageBodyFooterExtended';
            title: string;
            subTitle: string;
            copyright: string;
          }
        | {
            __typename?: 'PageBodyFooterSimple';
            title: string;
            subTitle: string;
            copyright: string;
          };
    };
  } | null;
};

export const CurvedFragmentDoc = gql`
  fragment Curved on PageBodyHeaderCurved {
    title
    subTitle
  }
`;
export const SkewedFragmentDoc = gql`
  fragment Skewed on PageBodyHeaderSkewed {
    title
    subTitle
  }
`;
export const HeaderFragmentDoc = gql`
  fragment Header on PageBody {
    header {
      ...Curved
      ...Skewed
    }
  }
  ${CurvedFragmentDoc}
  ${SkewedFragmentDoc}
`;
export const NavigationFragmentDoc = gql`
  fragment Navigation on PageBody {
    navigation {
      title
      items {
        name
        href
        rel
        target
      }
    }
  }
`;
export const MarkdownFragmentDoc = gql`
  fragment Markdown on PageBodyMainArticleMarkdown {
    title
    subTitle
    markdown
  }
`;
export const ArticleFragmentDoc = gql`
  fragment Article on PageBodyMain {
    articles {
      ...Markdown
    }
  }
  ${MarkdownFragmentDoc}
`;
export const MainFragmentDoc = gql`
  fragment Main on PageBody {
    main {
      ...Article
    }
  }
  ${ArticleFragmentDoc}
`;
export const ExtendedFragmentDoc = gql`
  fragment Extended on PageBodyFooterExtended {
    title
    subTitle
    copyright
  }
`;
export const SimpleFragmentDoc = gql`
  fragment Simple on PageBodyFooterSimple {
    title
    subTitle
    copyright
  }
`;
export const FooterFragmentDoc = gql`
  fragment Footer on PageBody {
    footer {
      ...Extended
      ...Simple
    }
  }
  ${ExtendedFragmentDoc}
  ${SimpleFragmentDoc}
`;
export const BodyFragmentDoc = gql`
  fragment Body on Page {
    body {
      ...Header
      ...Navigation
      ...Main
      ...Footer
    }
  }
  ${HeaderFragmentDoc}
  ${NavigationFragmentDoc}
  ${MainFragmentDoc}
  ${FooterFragmentDoc}
`;
export const HeadFragmentDoc = gql`
  fragment Head on Page {
    head {
      title
      meta {
        charset
        description
        noindex
        nofollow
        viewport
      }
    }
  }
`;
export const PageDocument = gql`
  query Page($id: ID!) {
    page(id: $id) {
      lang
      ...Head
      ...Body
    }
  }
  ${HeadFragmentDoc}
  ${BodyFragmentDoc}
`;

export function usePageQuery(
  options: Omit<Urql.UseQueryArgs<PageQueryVariables>, 'query'>,
) {
  return Urql.useQuery<PageQuery>({ query: PageDocument, ...options });
}
