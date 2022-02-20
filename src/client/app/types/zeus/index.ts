/* eslint-disable */

import { AllTypesProps, ReturnTypes } from './const';
type ZEUS_INTERFACES = never
type ZEUS_UNIONS = GraphQLTypes["HeaderUnion"] | GraphQLTypes["FooterUnion"]

export type ValueTypes = {
    ["User"]: AliasType<{
	id?:boolean,
	provider?:boolean,
	providerId?:boolean,
	username?:boolean,
	name?:boolean,
	created_at?:boolean,
	updated_at?:boolean,
		__typename?: boolean
}>;
	/** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
["DateTime"]:unknown;
	["meta"]: AliasType<{
	id?:boolean,
	created?:boolean,
	updated_at?:boolean,
	charset?:boolean,
	description?:boolean,
	noindex?:boolean,
	nofollow?:boolean,
	viewport?:boolean,
		__typename?: boolean
}>;
	["head"]: AliasType<{
	id?:boolean,
	created?:boolean,
	updated_at?:boolean,
	title?:boolean,
	meta?:ValueTypes["meta"],
		__typename?: boolean
}>;
	["page_body_header"]: AliasType<{
	id?:boolean,
	created?:boolean,
	updated_at?:boolean,
	type?:boolean,
		__typename?: boolean
}>;
	["CommonA"]: AliasType<{
	id?:boolean,
	created?:boolean,
	updated_at?:boolean,
	href?:boolean,
	rel?:boolean,
	target?:boolean,
		__typename?: boolean
}>;
	["RelEnum"]:RelEnum;
	["TargetEnum"]:TargetEnum;
	["PageBodyNavigation"]: AliasType<{
	id?:boolean,
	created?:boolean,
	updated_at?:boolean,
	title?:boolean,
items?: [{	/** Specify to filter the records returned. */
	filter?:ValueTypes["CommonAFilter"] | null,	/** Specify to sort results. */
	sorting?:ValueTypes["CommonASort"][]},ValueTypes["CommonA"]],
		__typename?: boolean
}>;
	["CommonAFilter"]: {
	and?:ValueTypes["CommonAFilter"][],
	or?:ValueTypes["CommonAFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["IDFilterComparison"]: {
	is?:boolean | null,
	isNot?:boolean | null,
	eq?:string | null,
	neq?:string | null,
	gt?:string | null,
	gte?:string | null,
	lt?:string | null,
	lte?:string | null,
	like?:string | null,
	notLike?:string | null,
	iLike?:string | null,
	notILike?:string | null,
	in?:string[],
	notIn?:string[]
};
	["CommonASort"]: {
	field:ValueTypes["CommonASortFields"],
	direction:ValueTypes["SortDirection"],
	nulls?:ValueTypes["SortNulls"] | null
};
	["CommonASortFields"]:CommonASortFields;
	/** Sort Directions */
["SortDirection"]:SortDirection;
	/** Sort Nulls Options */
["SortNulls"]:SortNulls;
	["sidebar"]: AliasType<{
	id?:boolean,
	created?:boolean,
	updated_at?:boolean,
	title?:boolean,
		__typename?: boolean
}>;
	["page_body_footer"]: AliasType<{
	id?:boolean,
	created?:boolean,
	updated_at?:boolean,
	type?:boolean,
		__typename?: boolean
}>;
	["main"]: AliasType<{
	id?:boolean,
	created?:boolean,
	updated_at?:boolean,
	title?:boolean,
		__typename?: boolean
}>;
	["body"]: AliasType<{
	id?:boolean,
	created?:boolean,
	updated_at?:boolean,
	header?:ValueTypes["HeaderUnion"],
	navigation?:ValueTypes["PageBodyNavigation"],
	main?:ValueTypes["main"],
	sidebar?:ValueTypes["sidebar"],
	footer?:ValueTypes["FooterUnion"],
		__typename?: boolean
}>;
	["HeaderUnion"]: AliasType<{		["...on page_body_header_curved"] : ValueTypes["page_body_header_curved"],
		["...on page_body_header_skewed"] : ValueTypes["page_body_header_skewed"]
		__typename?: boolean
}>;
	["page_body_header_curved"]: AliasType<{
	id?:boolean,
	created?:boolean,
	updated_at?:boolean,
	title?:boolean,
	subTitle?:boolean,
		__typename?: boolean
}>;
	["page_body_header_skewed"]: AliasType<{
	id?:boolean,
	created?:boolean,
	updated_at?:boolean,
	title?:boolean,
	subTitle?:boolean,
		__typename?: boolean
}>;
	["FooterUnion"]: AliasType<{		["...on page_body_footer_extended"] : ValueTypes["page_body_footer_extended"],
		["...on page_body_footer_simple"] : ValueTypes["page_body_footer_simple"]
		__typename?: boolean
}>;
	["page_body_footer_extended"]: AliasType<{
	id?:boolean,
	created?:boolean,
	updated_at?:boolean,
	title?:boolean,
	subTitle?:boolean,
	copyright?:boolean,
		__typename?: boolean
}>;
	["page_body_footer_simple"]: AliasType<{
	id?:boolean,
	created?:boolean,
	updated_at?:boolean,
	title?:boolean,
	subTitle?:boolean,
	copyright?:boolean,
		__typename?: boolean
}>;
	["page"]: AliasType<{
	id?:boolean,
	created?:boolean,
	updated_at?:boolean,
	lang?:boolean,
	head?:ValueTypes["head"],
	body?:ValueTypes["body"],
		__typename?: boolean
}>;
	["DeleteManyResponse"]: AliasType<{
	/** The number of records deleted. */
	deletedCount?:boolean,
		__typename?: boolean
}>;
	["PageDeleteResponse"]: AliasType<{
	id?:boolean,
	created?:boolean,
	updated_at?:boolean,
	lang?:boolean,
		__typename?: boolean
}>;
	["UpdateManyResponse"]: AliasType<{
	/** The number of records updated. */
	updatedCount?:boolean,
		__typename?: boolean
}>;
	["pageEdge"]: AliasType<{
	/** The node containing the page */
	node?:ValueTypes["page"],
	/** Cursor for this node. */
	cursor?:boolean,
		__typename?: boolean
}>;
	/** Cursor for paging through collections */
["ConnectionCursor"]:unknown;
	["PageInfo"]: AliasType<{
	/** true if paging forward and there are more records. */
	hasNextPage?:boolean,
	/** true if paging backwards and there are more records. */
	hasPreviousPage?:boolean,
	/** The cursor of the first returned record. */
	startCursor?:boolean,
	/** The cursor of the last returned record. */
	endCursor?:boolean,
		__typename?: boolean
}>;
	["PageConnection"]: AliasType<{
	/** Paging information */
	pageInfo?:ValueTypes["PageInfo"],
	/** Array of edges. */
	edges?:ValueTypes["pageEdge"],
		__typename?: boolean
}>;
	["pageAggregateGroupBy"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["pageCountAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["pageSumAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["pageAvgAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["pageMinAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["pageMaxAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["HeadDeleteResponse"]: AliasType<{
	id?:boolean,
	created?:boolean,
	updated_at?:boolean,
	title?:boolean,
		__typename?: boolean
}>;
	["headEdge"]: AliasType<{
	/** The node containing the head */
	node?:ValueTypes["head"],
	/** Cursor for this node. */
	cursor?:boolean,
		__typename?: boolean
}>;
	["HeadConnection"]: AliasType<{
	/** Paging information */
	pageInfo?:ValueTypes["PageInfo"],
	/** Array of edges. */
	edges?:ValueTypes["headEdge"],
		__typename?: boolean
}>;
	["headAggregateGroupBy"]: AliasType<{
	id?:boolean,
	title?:boolean,
		__typename?: boolean
}>;
	["headCountAggregate"]: AliasType<{
	id?:boolean,
	title?:boolean,
		__typename?: boolean
}>;
	["headSumAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["headAvgAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["headMinAggregate"]: AliasType<{
	id?:boolean,
	title?:boolean,
		__typename?: boolean
}>;
	["headMaxAggregate"]: AliasType<{
	id?:boolean,
	title?:boolean,
		__typename?: boolean
}>;
	["MetaDeleteResponse"]: AliasType<{
	id?:boolean,
	created?:boolean,
	updated_at?:boolean,
	charset?:boolean,
	description?:boolean,
	noindex?:boolean,
	nofollow?:boolean,
	viewport?:boolean,
		__typename?: boolean
}>;
	["metaEdge"]: AliasType<{
	/** The node containing the meta */
	node?:ValueTypes["meta"],
	/** Cursor for this node. */
	cursor?:boolean,
		__typename?: boolean
}>;
	["MetaConnection"]: AliasType<{
	/** Paging information */
	pageInfo?:ValueTypes["PageInfo"],
	/** Array of edges. */
	edges?:ValueTypes["metaEdge"],
		__typename?: boolean
}>;
	["metaAggregateGroupBy"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["metaCountAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["metaSumAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["metaAvgAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["metaMinAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["metaMaxAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["BodyDeleteResponse"]: AliasType<{
	id?:boolean,
	created?:boolean,
	updated_at?:boolean,
		__typename?: boolean
}>;
	["bodyEdge"]: AliasType<{
	/** The node containing the body */
	node?:ValueTypes["body"],
	/** Cursor for this node. */
	cursor?:boolean,
		__typename?: boolean
}>;
	["BodyConnection"]: AliasType<{
	/** Paging information */
	pageInfo?:ValueTypes["PageInfo"],
	/** Array of edges. */
	edges?:ValueTypes["bodyEdge"],
		__typename?: boolean
}>;
	["bodyAggregateGroupBy"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["bodyCountAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["bodySumAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["bodyAvgAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["bodyMinAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["bodyMaxAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["Page_body_headerDeleteResponse"]: AliasType<{
	id?:boolean,
	created?:boolean,
	updated_at?:boolean,
	type?:boolean,
		__typename?: boolean
}>;
	["page_body_headerEdge"]: AliasType<{
	/** The node containing the page_body_header */
	node?:ValueTypes["page_body_header"],
	/** Cursor for this node. */
	cursor?:boolean,
		__typename?: boolean
}>;
	["Page_body_headerConnection"]: AliasType<{
	/** Paging information */
	pageInfo?:ValueTypes["PageInfo"],
	/** Array of edges. */
	edges?:ValueTypes["page_body_headerEdge"],
		__typename?: boolean
}>;
	["page_body_headerAggregateGroupBy"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["page_body_headerCountAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["page_body_headerSumAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["page_body_headerAvgAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["page_body_headerMinAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["page_body_headerMaxAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["Page_body_footerDeleteResponse"]: AliasType<{
	id?:boolean,
	created?:boolean,
	updated_at?:boolean,
	type?:boolean,
		__typename?: boolean
}>;
	["page_body_footerEdge"]: AliasType<{
	/** The node containing the page_body_footer */
	node?:ValueTypes["page_body_footer"],
	/** Cursor for this node. */
	cursor?:boolean,
		__typename?: boolean
}>;
	["Page_body_footerConnection"]: AliasType<{
	/** Paging information */
	pageInfo?:ValueTypes["PageInfo"],
	/** Array of edges. */
	edges?:ValueTypes["page_body_footerEdge"],
		__typename?: boolean
}>;
	["page_body_footerAggregateGroupBy"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["page_body_footerCountAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["page_body_footerSumAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["page_body_footerAvgAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["page_body_footerMinAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["page_body_footerMaxAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["MainDeleteResponse"]: AliasType<{
	id?:boolean,
	created?:boolean,
	updated_at?:boolean,
	title?:boolean,
		__typename?: boolean
}>;
	["mainEdge"]: AliasType<{
	/** The node containing the main */
	node?:ValueTypes["main"],
	/** Cursor for this node. */
	cursor?:boolean,
		__typename?: boolean
}>;
	["MainConnection"]: AliasType<{
	/** Paging information */
	pageInfo?:ValueTypes["PageInfo"],
	/** Array of edges. */
	edges?:ValueTypes["mainEdge"],
		__typename?: boolean
}>;
	["mainAggregateGroupBy"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["mainCountAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["mainSumAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["mainAvgAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["mainMinAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["mainMaxAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["PageBodyNavigationDeleteResponse"]: AliasType<{
	id?:boolean,
	created?:boolean,
	updated_at?:boolean,
	title?:boolean,
		__typename?: boolean
}>;
	["PageBodyNavigationEdge"]: AliasType<{
	/** The node containing the PageBodyNavigation */
	node?:ValueTypes["PageBodyNavigation"],
	/** Cursor for this node. */
	cursor?:boolean,
		__typename?: boolean
}>;
	["PageBodyNavigationConnection"]: AliasType<{
	/** Paging information */
	pageInfo?:ValueTypes["PageInfo"],
	/** Array of edges. */
	edges?:ValueTypes["PageBodyNavigationEdge"],
		__typename?: boolean
}>;
	["PageBodyNavigationAggregateGroupBy"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["PageBodyNavigationCountAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["PageBodyNavigationSumAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["PageBodyNavigationAvgAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["PageBodyNavigationMinAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["PageBodyNavigationMaxAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["SidebarDeleteResponse"]: AliasType<{
	id?:boolean,
	created?:boolean,
	updated_at?:boolean,
	title?:boolean,
		__typename?: boolean
}>;
	["sidebarEdge"]: AliasType<{
	/** The node containing the sidebar */
	node?:ValueTypes["sidebar"],
	/** Cursor for this node. */
	cursor?:boolean,
		__typename?: boolean
}>;
	["SidebarConnection"]: AliasType<{
	/** Paging information */
	pageInfo?:ValueTypes["PageInfo"],
	/** Array of edges. */
	edges?:ValueTypes["sidebarEdge"],
		__typename?: boolean
}>;
	["sidebarAggregateGroupBy"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["sidebarCountAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["sidebarSumAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["sidebarAvgAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["sidebarMinAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["sidebarMaxAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["CommonADeleteResponse"]: AliasType<{
	id?:boolean,
	created?:boolean,
	updated_at?:boolean,
	href?:boolean,
	rel?:boolean,
	target?:boolean,
		__typename?: boolean
}>;
	["CommonAEdge"]: AliasType<{
	/** The node containing the CommonA */
	node?:ValueTypes["CommonA"],
	/** Cursor for this node. */
	cursor?:boolean,
		__typename?: boolean
}>;
	["CommonAConnection"]: AliasType<{
	/** Paging information */
	pageInfo?:ValueTypes["PageInfo"],
	/** Array of edges. */
	edges?:ValueTypes["CommonAEdge"],
		__typename?: boolean
}>;
	["CommonAAggregateGroupBy"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["CommonACountAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["CommonASumAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["CommonAAvgAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["CommonAMinAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["CommonAMaxAggregate"]: AliasType<{
	id?:boolean,
		__typename?: boolean
}>;
	["Query"]: AliasType<{
	users?:ValueTypes["User"],
	whoAmI?:ValueTypes["User"],
page?: [{	/** The id of the record to find. */
	id:string},ValueTypes["page"]],
pages?: [{	/** Limit or page results. */
	paging?:ValueTypes["CursorPaging"] | null,	/** Specify to filter the records returned. */
	filter?:ValueTypes["pageFilter"] | null,	/** Specify to sort results. */
	sorting?:ValueTypes["pageSort"][]},ValueTypes["PageConnection"]],
head?: [{	/** The id of the record to find. */
	id:string},ValueTypes["head"]],
heads?: [{	/** Limit or page results. */
	paging?:ValueTypes["CursorPaging"] | null,	/** Specify to filter the records returned. */
	filter?:ValueTypes["headFilter"] | null,	/** Specify to sort results. */
	sorting?:ValueTypes["headSort"][]},ValueTypes["HeadConnection"]],
meta?: [{	/** The id of the record to find. */
	id:string},ValueTypes["meta"]],
metas?: [{	/** Limit or page results. */
	paging?:ValueTypes["CursorPaging"] | null,	/** Specify to filter the records returned. */
	filter?:ValueTypes["metaFilter"] | null,	/** Specify to sort results. */
	sorting?:ValueTypes["metaSort"][]},ValueTypes["MetaConnection"]],
body?: [{	/** The id of the record to find. */
	id:string},ValueTypes["body"]],
bodies?: [{	/** Limit or page results. */
	paging?:ValueTypes["CursorPaging"] | null,	/** Specify to filter the records returned. */
	filter?:ValueTypes["bodyFilter"] | null,	/** Specify to sort results. */
	sorting?:ValueTypes["bodySort"][]},ValueTypes["BodyConnection"]],
page_body_header?: [{	/** The id of the record to find. */
	id:string},ValueTypes["page_body_header"]],
page_body_headers?: [{	/** Limit or page results. */
	paging?:ValueTypes["CursorPaging"] | null,	/** Specify to filter the records returned. */
	filter?:ValueTypes["page_body_headerFilter"] | null,	/** Specify to sort results. */
	sorting?:ValueTypes["page_body_headerSort"][]},ValueTypes["Page_body_headerConnection"]],
page_body_footer?: [{	/** The id of the record to find. */
	id:string},ValueTypes["page_body_footer"]],
page_body_footers?: [{	/** Limit or page results. */
	paging?:ValueTypes["CursorPaging"] | null,	/** Specify to filter the records returned. */
	filter?:ValueTypes["page_body_footerFilter"] | null,	/** Specify to sort results. */
	sorting?:ValueTypes["page_body_footerSort"][]},ValueTypes["Page_body_footerConnection"]],
main?: [{	/** The id of the record to find. */
	id:string},ValueTypes["main"]],
mains?: [{	/** Limit or page results. */
	paging?:ValueTypes["CursorPaging"] | null,	/** Specify to filter the records returned. */
	filter?:ValueTypes["mainFilter"] | null,	/** Specify to sort results. */
	sorting?:ValueTypes["mainSort"][]},ValueTypes["MainConnection"]],
pageBodyNavigation?: [{	/** The id of the record to find. */
	id:string},ValueTypes["PageBodyNavigation"]],
pageBodyNavigations?: [{	/** Limit or page results. */
	paging?:ValueTypes["CursorPaging"] | null,	/** Specify to filter the records returned. */
	filter?:ValueTypes["PageBodyNavigationFilter"] | null,	/** Specify to sort results. */
	sorting?:ValueTypes["PageBodyNavigationSort"][]},ValueTypes["PageBodyNavigationConnection"]],
sidebar?: [{	/** The id of the record to find. */
	id:string},ValueTypes["sidebar"]],
sidebars?: [{	/** Limit or page results. */
	paging?:ValueTypes["CursorPaging"] | null,	/** Specify to filter the records returned. */
	filter?:ValueTypes["sidebarFilter"] | null,	/** Specify to sort results. */
	sorting?:ValueTypes["sidebarSort"][]},ValueTypes["SidebarConnection"]],
commonA?: [{	/** The id of the record to find. */
	id:string},ValueTypes["CommonA"]],
commonAS?: [{	/** Limit or page results. */
	paging?:ValueTypes["CursorPaging"] | null,	/** Specify to filter the records returned. */
	filter?:ValueTypes["CommonAFilter"] | null,	/** Specify to sort results. */
	sorting?:ValueTypes["CommonASort"][]},ValueTypes["CommonAConnection"]],
		__typename?: boolean
}>;
	["CursorPaging"]: {
	/** Paginate before opaque cursor */
	before?:ValueTypes["ConnectionCursor"] | null,
	/** Paginate after opaque cursor */
	after?:ValueTypes["ConnectionCursor"] | null,
	/** Paginate first */
	first?:number | null,
	/** Paginate last */
	last?:number | null
};
	["pageFilter"]: {
	and?:ValueTypes["pageFilter"][],
	or?:ValueTypes["pageFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["pageSort"]: {
	field:ValueTypes["pageSortFields"],
	direction:ValueTypes["SortDirection"],
	nulls?:ValueTypes["SortNulls"] | null
};
	["pageSortFields"]:pageSortFields;
	["headFilter"]: {
	and?:ValueTypes["headFilter"][],
	or?:ValueTypes["headFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null,
	title?:ValueTypes["StringFieldComparison"] | null
};
	["StringFieldComparison"]: {
	is?:boolean | null,
	isNot?:boolean | null,
	eq?:string | null,
	neq?:string | null,
	gt?:string | null,
	gte?:string | null,
	lt?:string | null,
	lte?:string | null,
	like?:string | null,
	notLike?:string | null,
	iLike?:string | null,
	notILike?:string | null,
	in?:string[],
	notIn?:string[]
};
	["headSort"]: {
	field:ValueTypes["headSortFields"],
	direction:ValueTypes["SortDirection"],
	nulls?:ValueTypes["SortNulls"] | null
};
	["headSortFields"]:headSortFields;
	["metaFilter"]: {
	and?:ValueTypes["metaFilter"][],
	or?:ValueTypes["metaFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["metaSort"]: {
	field:ValueTypes["metaSortFields"],
	direction:ValueTypes["SortDirection"],
	nulls?:ValueTypes["SortNulls"] | null
};
	["metaSortFields"]:metaSortFields;
	["bodyFilter"]: {
	and?:ValueTypes["bodyFilter"][],
	or?:ValueTypes["bodyFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["bodySort"]: {
	field:ValueTypes["bodySortFields"],
	direction:ValueTypes["SortDirection"],
	nulls?:ValueTypes["SortNulls"] | null
};
	["bodySortFields"]:bodySortFields;
	["page_body_headerFilter"]: {
	and?:ValueTypes["page_body_headerFilter"][],
	or?:ValueTypes["page_body_headerFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["page_body_headerSort"]: {
	field:ValueTypes["page_body_headerSortFields"],
	direction:ValueTypes["SortDirection"],
	nulls?:ValueTypes["SortNulls"] | null
};
	["page_body_headerSortFields"]:page_body_headerSortFields;
	["page_body_footerFilter"]: {
	and?:ValueTypes["page_body_footerFilter"][],
	or?:ValueTypes["page_body_footerFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["page_body_footerSort"]: {
	field:ValueTypes["page_body_footerSortFields"],
	direction:ValueTypes["SortDirection"],
	nulls?:ValueTypes["SortNulls"] | null
};
	["page_body_footerSortFields"]:page_body_footerSortFields;
	["mainFilter"]: {
	and?:ValueTypes["mainFilter"][],
	or?:ValueTypes["mainFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["mainSort"]: {
	field:ValueTypes["mainSortFields"],
	direction:ValueTypes["SortDirection"],
	nulls?:ValueTypes["SortNulls"] | null
};
	["mainSortFields"]:mainSortFields;
	["PageBodyNavigationFilter"]: {
	and?:ValueTypes["PageBodyNavigationFilter"][],
	or?:ValueTypes["PageBodyNavigationFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["PageBodyNavigationSort"]: {
	field:ValueTypes["PageBodyNavigationSortFields"],
	direction:ValueTypes["SortDirection"],
	nulls?:ValueTypes["SortNulls"] | null
};
	["PageBodyNavigationSortFields"]:PageBodyNavigationSortFields;
	["sidebarFilter"]: {
	and?:ValueTypes["sidebarFilter"][],
	or?:ValueTypes["sidebarFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["sidebarSort"]: {
	field:ValueTypes["sidebarSortFields"],
	direction:ValueTypes["SortDirection"],
	nulls?:ValueTypes["SortNulls"] | null
};
	["sidebarSortFields"]:sidebarSortFields;
	["Mutation"]: AliasType<{
setHeadOnPage?: [{	input:ValueTypes["SetHeadOnPageInput"]},ValueTypes["page"]],
setBodyOnPage?: [{	input:ValueTypes["SetBodyOnPageInput"]},ValueTypes["page"]],
createOnePage?: [{	input:ValueTypes["CreateOnePageInput"]},ValueTypes["page"]],
createManyPages?: [{	input:ValueTypes["CreateManyPagesInput"]},ValueTypes["page"]],
updateOnePage?: [{	input:ValueTypes["UpdateOnePageInput"]},ValueTypes["page"]],
updateManyPages?: [{	input:ValueTypes["UpdateManyPagesInput"]},ValueTypes["UpdateManyResponse"]],
deleteOnePage?: [{	input:ValueTypes["DeleteOnePageInput"]},ValueTypes["PageDeleteResponse"]],
deleteManyPages?: [{	input:ValueTypes["DeleteManyPagesInput"]},ValueTypes["DeleteManyResponse"]],
setMetaOnHead?: [{	input:ValueTypes["SetMetaOnHeadInput"]},ValueTypes["head"]],
createOneHead?: [{	input:ValueTypes["CreateOneHeadInput"]},ValueTypes["head"]],
createManyHeads?: [{	input:ValueTypes["CreateManyHeadsInput"]},ValueTypes["head"]],
updateOneHead?: [{	input:ValueTypes["UpdateOneHeadInput"]},ValueTypes["head"]],
updateManyHeads?: [{	input:ValueTypes["UpdateManyHeadsInput"]},ValueTypes["UpdateManyResponse"]],
deleteOneHead?: [{	input:ValueTypes["DeleteOneHeadInput"]},ValueTypes["HeadDeleteResponse"]],
deleteManyHeads?: [{	input:ValueTypes["DeleteManyHeadsInput"]},ValueTypes["DeleteManyResponse"]],
createOneMeta?: [{	input:ValueTypes["CreateOneMetaInput"]},ValueTypes["meta"]],
createManyMetas?: [{	input:ValueTypes["CreateManyMetasInput"]},ValueTypes["meta"]],
updateOneMeta?: [{	input:ValueTypes["UpdateOneMetaInput"]},ValueTypes["meta"]],
updateManyMetas?: [{	input:ValueTypes["UpdateManyMetasInput"]},ValueTypes["UpdateManyResponse"]],
deleteOneMeta?: [{	input:ValueTypes["DeleteOneMetaInput"]},ValueTypes["MetaDeleteResponse"]],
deleteManyMetas?: [{	input:ValueTypes["DeleteManyMetasInput"]},ValueTypes["DeleteManyResponse"]],
setHeaderOnBody?: [{	input:ValueTypes["SetHeaderOnBodyInput"]},ValueTypes["body"]],
setNavigationOnBody?: [{	input:ValueTypes["SetNavigationOnBodyInput"]},ValueTypes["body"]],
setMainOnBody?: [{	input:ValueTypes["SetMainOnBodyInput"]},ValueTypes["body"]],
setSidebarOnBody?: [{	input:ValueTypes["SetSidebarOnBodyInput"]},ValueTypes["body"]],
setFooterOnBody?: [{	input:ValueTypes["SetFooterOnBodyInput"]},ValueTypes["body"]],
createOneBody?: [{	input:ValueTypes["CreateOneBodyInput"]},ValueTypes["body"]],
createManyBodies?: [{	input:ValueTypes["CreateManyBodiesInput"]},ValueTypes["body"]],
updateOneBody?: [{	input:ValueTypes["UpdateOneBodyInput"]},ValueTypes["body"]],
updateManyBodies?: [{	input:ValueTypes["UpdateManyBodiesInput"]},ValueTypes["UpdateManyResponse"]],
deleteOneBody?: [{	input:ValueTypes["DeleteOneBodyInput"]},ValueTypes["BodyDeleteResponse"]],
deleteManyBodies?: [{	input:ValueTypes["DeleteManyBodiesInput"]},ValueTypes["DeleteManyResponse"]],
createOnePage_body_header?: [{	input:ValueTypes["CreateOnePage_body_headerInput"]},ValueTypes["page_body_header"]],
createManyPage_body_headers?: [{	input:ValueTypes["CreateManyPage_body_headersInput"]},ValueTypes["page_body_header"]],
updateOnePage_body_header?: [{	input:ValueTypes["UpdateOnePage_body_headerInput"]},ValueTypes["page_body_header"]],
updateManyPage_body_headers?: [{	input:ValueTypes["UpdateManyPage_body_headersInput"]},ValueTypes["UpdateManyResponse"]],
deleteOnePage_body_header?: [{	input:ValueTypes["DeleteOnePage_body_headerInput"]},ValueTypes["Page_body_headerDeleteResponse"]],
deleteManyPage_body_headers?: [{	input:ValueTypes["DeleteManyPage_body_headersInput"]},ValueTypes["DeleteManyResponse"]],
createOnePage_body_footer?: [{	input:ValueTypes["CreateOnePage_body_footerInput"]},ValueTypes["page_body_footer"]],
createManyPage_body_footers?: [{	input:ValueTypes["CreateManyPage_body_footersInput"]},ValueTypes["page_body_footer"]],
updateOnePage_body_footer?: [{	input:ValueTypes["UpdateOnePage_body_footerInput"]},ValueTypes["page_body_footer"]],
updateManyPage_body_footers?: [{	input:ValueTypes["UpdateManyPage_body_footersInput"]},ValueTypes["UpdateManyResponse"]],
deleteOnePage_body_footer?: [{	input:ValueTypes["DeleteOnePage_body_footerInput"]},ValueTypes["Page_body_footerDeleteResponse"]],
deleteManyPage_body_footers?: [{	input:ValueTypes["DeleteManyPage_body_footersInput"]},ValueTypes["DeleteManyResponse"]],
createOneMain?: [{	input:ValueTypes["CreateOneMainInput"]},ValueTypes["main"]],
createManyMains?: [{	input:ValueTypes["CreateManyMainsInput"]},ValueTypes["main"]],
updateOneMain?: [{	input:ValueTypes["UpdateOneMainInput"]},ValueTypes["main"]],
updateManyMains?: [{	input:ValueTypes["UpdateManyMainsInput"]},ValueTypes["UpdateManyResponse"]],
deleteOneMain?: [{	input:ValueTypes["DeleteOneMainInput"]},ValueTypes["MainDeleteResponse"]],
deleteManyMains?: [{	input:ValueTypes["DeleteManyMainsInput"]},ValueTypes["DeleteManyResponse"]],
addItemsToPageBodyNavigation?: [{	input:ValueTypes["AddItemsToPageBodyNavigationInput"]},ValueTypes["PageBodyNavigation"]],
setItemsOnPageBodyNavigation?: [{	input:ValueTypes["SetItemsOnPageBodyNavigationInput"]},ValueTypes["PageBodyNavigation"]],
createOnePageBodyNavigation?: [{	input:ValueTypes["CreateOnePageBodyNavigationInput"]},ValueTypes["PageBodyNavigation"]],
createManyPageBodyNavigations?: [{	input:ValueTypes["CreateManyPageBodyNavigationsInput"]},ValueTypes["PageBodyNavigation"]],
updateOnePageBodyNavigation?: [{	input:ValueTypes["UpdateOnePageBodyNavigationInput"]},ValueTypes["PageBodyNavigation"]],
updateManyPageBodyNavigations?: [{	input:ValueTypes["UpdateManyPageBodyNavigationsInput"]},ValueTypes["UpdateManyResponse"]],
deleteOnePageBodyNavigation?: [{	input:ValueTypes["DeleteOnePageBodyNavigationInput"]},ValueTypes["PageBodyNavigationDeleteResponse"]],
deleteManyPageBodyNavigations?: [{	input:ValueTypes["DeleteManyPageBodyNavigationsInput"]},ValueTypes["DeleteManyResponse"]],
createOneSidebar?: [{	input:ValueTypes["CreateOneSidebarInput"]},ValueTypes["sidebar"]],
createManySidebars?: [{	input:ValueTypes["CreateManySidebarsInput"]},ValueTypes["sidebar"]],
updateOneSidebar?: [{	input:ValueTypes["UpdateOneSidebarInput"]},ValueTypes["sidebar"]],
updateManySidebars?: [{	input:ValueTypes["UpdateManySidebarsInput"]},ValueTypes["UpdateManyResponse"]],
deleteOneSidebar?: [{	input:ValueTypes["DeleteOneSidebarInput"]},ValueTypes["SidebarDeleteResponse"]],
deleteManySidebars?: [{	input:ValueTypes["DeleteManySidebarsInput"]},ValueTypes["DeleteManyResponse"]],
createOneCommonA?: [{	input:ValueTypes["CreateOneCommonAInput"]},ValueTypes["CommonA"]],
createManyCommonAS?: [{	input:ValueTypes["CreateManyCommonASInput"]},ValueTypes["CommonA"]],
updateOneCommonA?: [{	input:ValueTypes["UpdateOneCommonAInput"]},ValueTypes["CommonA"]],
updateManyCommonAS?: [{	input:ValueTypes["UpdateManyCommonASInput"]},ValueTypes["UpdateManyResponse"]],
deleteOneCommonA?: [{	input:ValueTypes["DeleteOneCommonAInput"]},ValueTypes["CommonADeleteResponse"]],
deleteManyCommonAS?: [{	input:ValueTypes["DeleteManyCommonASInput"]},ValueTypes["DeleteManyResponse"]],
		__typename?: boolean
}>;
	["SetHeadOnPageInput"]: {
	/** The id of the record. */
	id:string,
	/** The id of relation. */
	relationId:string
};
	["SetBodyOnPageInput"]: {
	/** The id of the record. */
	id:string,
	/** The id of relation. */
	relationId:string
};
	["CreateOnePageInput"]: {
	/** The record to create */
	page:ValueTypes["CreatePage"]
};
	["CreatePage"]: {
	id?:string | null,
	created?:ValueTypes["DateTime"] | null,
	updated_at?:ValueTypes["DateTime"] | null,
	lang?:string | null
};
	["CreateManyPagesInput"]: {
	/** Array of records to create */
	pages:ValueTypes["CreatePage"][]
};
	["UpdateOnePageInput"]: {
	/** The id of the record to update */
	id:string,
	/** The update to apply. */
	update:ValueTypes["UpdatePage"]
};
	["UpdatePage"]: {
	id?:string | null,
	created?:ValueTypes["DateTime"] | null,
	updated_at?:ValueTypes["DateTime"] | null,
	lang?:string | null
};
	["UpdateManyPagesInput"]: {
	/** Filter used to find fields to update */
	filter:ValueTypes["pageUpdateFilter"],
	/** The update to apply to all records found using the filter */
	update:ValueTypes["UpdatePage"]
};
	["pageUpdateFilter"]: {
	and?:ValueTypes["pageUpdateFilter"][],
	or?:ValueTypes["pageUpdateFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["DeleteOnePageInput"]: {
	/** The id of the record to delete. */
	id:string
};
	["DeleteManyPagesInput"]: {
	/** Filter to find records to delete */
	filter:ValueTypes["pageDeleteFilter"]
};
	["pageDeleteFilter"]: {
	and?:ValueTypes["pageDeleteFilter"][],
	or?:ValueTypes["pageDeleteFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["SetMetaOnHeadInput"]: {
	/** The id of the record. */
	id:string,
	/** The id of relation. */
	relationId:string
};
	["CreateOneHeadInput"]: {
	/** The record to create */
	head:ValueTypes["CreateHead"]
};
	["CreateHead"]: {
	id?:string | null,
	created?:ValueTypes["DateTime"] | null,
	updated_at?:ValueTypes["DateTime"] | null,
	title?:string | null
};
	["CreateManyHeadsInput"]: {
	/** Array of records to create */
	heads:ValueTypes["CreateHead"][]
};
	["UpdateOneHeadInput"]: {
	/** The id of the record to update */
	id:string,
	/** The update to apply. */
	update:ValueTypes["UpdateHead"]
};
	["UpdateHead"]: {
	id?:string | null,
	created?:ValueTypes["DateTime"] | null,
	updated_at?:ValueTypes["DateTime"] | null,
	title?:string | null
};
	["UpdateManyHeadsInput"]: {
	/** Filter used to find fields to update */
	filter:ValueTypes["headUpdateFilter"],
	/** The update to apply to all records found using the filter */
	update:ValueTypes["UpdateHead"]
};
	["headUpdateFilter"]: {
	and?:ValueTypes["headUpdateFilter"][],
	or?:ValueTypes["headUpdateFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null,
	title?:ValueTypes["StringFieldComparison"] | null
};
	["DeleteOneHeadInput"]: {
	/** The id of the record to delete. */
	id:string
};
	["DeleteManyHeadsInput"]: {
	/** Filter to find records to delete */
	filter:ValueTypes["headDeleteFilter"]
};
	["headDeleteFilter"]: {
	and?:ValueTypes["headDeleteFilter"][],
	or?:ValueTypes["headDeleteFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null,
	title?:ValueTypes["StringFieldComparison"] | null
};
	["CreateOneMetaInput"]: {
	/** The record to create */
	meta:ValueTypes["CreateMeta"]
};
	["CreateMeta"]: {
	id?:string | null,
	created?:ValueTypes["DateTime"] | null,
	updated_at?:ValueTypes["DateTime"] | null,
	charset?:string | null,
	description?:string | null,
	noindex?:boolean | null,
	nofollow?:boolean | null,
	viewport?:string | null
};
	["CreateManyMetasInput"]: {
	/** Array of records to create */
	metas:ValueTypes["CreateMeta"][]
};
	["UpdateOneMetaInput"]: {
	/** The id of the record to update */
	id:string,
	/** The update to apply. */
	update:ValueTypes["UpdateMeta"]
};
	["UpdateMeta"]: {
	id?:string | null,
	created?:ValueTypes["DateTime"] | null,
	updated_at?:ValueTypes["DateTime"] | null,
	charset?:string | null,
	description?:string | null,
	noindex?:boolean | null,
	nofollow?:boolean | null,
	viewport?:string | null
};
	["UpdateManyMetasInput"]: {
	/** Filter used to find fields to update */
	filter:ValueTypes["metaUpdateFilter"],
	/** The update to apply to all records found using the filter */
	update:ValueTypes["UpdateMeta"]
};
	["metaUpdateFilter"]: {
	and?:ValueTypes["metaUpdateFilter"][],
	or?:ValueTypes["metaUpdateFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["DeleteOneMetaInput"]: {
	/** The id of the record to delete. */
	id:string
};
	["DeleteManyMetasInput"]: {
	/** Filter to find records to delete */
	filter:ValueTypes["metaDeleteFilter"]
};
	["metaDeleteFilter"]: {
	and?:ValueTypes["metaDeleteFilter"][],
	or?:ValueTypes["metaDeleteFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["SetHeaderOnBodyInput"]: {
	/** The id of the record. */
	id:string,
	/** The id of relation. */
	relationId:string
};
	["SetNavigationOnBodyInput"]: {
	/** The id of the record. */
	id:string,
	/** The id of relation. */
	relationId:string
};
	["SetMainOnBodyInput"]: {
	/** The id of the record. */
	id:string,
	/** The id of relation. */
	relationId:string
};
	["SetSidebarOnBodyInput"]: {
	/** The id of the record. */
	id:string,
	/** The id of relation. */
	relationId:string
};
	["SetFooterOnBodyInput"]: {
	/** The id of the record. */
	id:string,
	/** The id of relation. */
	relationId:string
};
	["CreateOneBodyInput"]: {
	/** The record to create */
	body:ValueTypes["CreateBody"]
};
	["CreateBody"]: {
	id?:string | null,
	created?:ValueTypes["DateTime"] | null,
	updated_at?:ValueTypes["DateTime"] | null
};
	["CreateManyBodiesInput"]: {
	/** Array of records to create */
	bodies:ValueTypes["CreateBody"][]
};
	["UpdateOneBodyInput"]: {
	/** The id of the record to update */
	id:string,
	/** The update to apply. */
	update:ValueTypes["UpdateBody"]
};
	["UpdateBody"]: {
	id?:string | null,
	created?:ValueTypes["DateTime"] | null,
	updated_at?:ValueTypes["DateTime"] | null
};
	["UpdateManyBodiesInput"]: {
	/** Filter used to find fields to update */
	filter:ValueTypes["bodyUpdateFilter"],
	/** The update to apply to all records found using the filter */
	update:ValueTypes["UpdateBody"]
};
	["bodyUpdateFilter"]: {
	and?:ValueTypes["bodyUpdateFilter"][],
	or?:ValueTypes["bodyUpdateFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["DeleteOneBodyInput"]: {
	/** The id of the record to delete. */
	id:string
};
	["DeleteManyBodiesInput"]: {
	/** Filter to find records to delete */
	filter:ValueTypes["bodyDeleteFilter"]
};
	["bodyDeleteFilter"]: {
	and?:ValueTypes["bodyDeleteFilter"][],
	or?:ValueTypes["bodyDeleteFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["CreateOnePage_body_headerInput"]: {
	/** The record to create */
	page_body_header:ValueTypes["CreatePage_body_header"]
};
	["CreatePage_body_header"]: {
	id?:string | null,
	created?:ValueTypes["DateTime"] | null,
	updated_at?:ValueTypes["DateTime"] | null,
	type?:string | null
};
	["CreateManyPage_body_headersInput"]: {
	/** Array of records to create */
	page_body_headers:ValueTypes["CreatePage_body_header"][]
};
	["UpdateOnePage_body_headerInput"]: {
	/** The id of the record to update */
	id:string,
	/** The update to apply. */
	update:ValueTypes["UpdatePage_body_header"]
};
	["UpdatePage_body_header"]: {
	id?:string | null,
	created?:ValueTypes["DateTime"] | null,
	updated_at?:ValueTypes["DateTime"] | null,
	type?:string | null
};
	["UpdateManyPage_body_headersInput"]: {
	/** Filter used to find fields to update */
	filter:ValueTypes["page_body_headerUpdateFilter"],
	/** The update to apply to all records found using the filter */
	update:ValueTypes["UpdatePage_body_header"]
};
	["page_body_headerUpdateFilter"]: {
	and?:ValueTypes["page_body_headerUpdateFilter"][],
	or?:ValueTypes["page_body_headerUpdateFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["DeleteOnePage_body_headerInput"]: {
	/** The id of the record to delete. */
	id:string
};
	["DeleteManyPage_body_headersInput"]: {
	/** Filter to find records to delete */
	filter:ValueTypes["page_body_headerDeleteFilter"]
};
	["page_body_headerDeleteFilter"]: {
	and?:ValueTypes["page_body_headerDeleteFilter"][],
	or?:ValueTypes["page_body_headerDeleteFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["CreateOnePage_body_footerInput"]: {
	/** The record to create */
	page_body_footer:ValueTypes["CreatePage_body_footer"]
};
	["CreatePage_body_footer"]: {
	id?:string | null,
	created?:ValueTypes["DateTime"] | null,
	updated_at?:ValueTypes["DateTime"] | null,
	type?:string | null
};
	["CreateManyPage_body_footersInput"]: {
	/** Array of records to create */
	page_body_footers:ValueTypes["CreatePage_body_footer"][]
};
	["UpdateOnePage_body_footerInput"]: {
	/** The id of the record to update */
	id:string,
	/** The update to apply. */
	update:ValueTypes["UpdatePage_body_footer"]
};
	["UpdatePage_body_footer"]: {
	id?:string | null,
	created?:ValueTypes["DateTime"] | null,
	updated_at?:ValueTypes["DateTime"] | null,
	type?:string | null
};
	["UpdateManyPage_body_footersInput"]: {
	/** Filter used to find fields to update */
	filter:ValueTypes["page_body_footerUpdateFilter"],
	/** The update to apply to all records found using the filter */
	update:ValueTypes["UpdatePage_body_footer"]
};
	["page_body_footerUpdateFilter"]: {
	and?:ValueTypes["page_body_footerUpdateFilter"][],
	or?:ValueTypes["page_body_footerUpdateFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["DeleteOnePage_body_footerInput"]: {
	/** The id of the record to delete. */
	id:string
};
	["DeleteManyPage_body_footersInput"]: {
	/** Filter to find records to delete */
	filter:ValueTypes["page_body_footerDeleteFilter"]
};
	["page_body_footerDeleteFilter"]: {
	and?:ValueTypes["page_body_footerDeleteFilter"][],
	or?:ValueTypes["page_body_footerDeleteFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["CreateOneMainInput"]: {
	/** The record to create */
	main:ValueTypes["CreateMain"]
};
	["CreateMain"]: {
	id?:string | null,
	created?:ValueTypes["DateTime"] | null,
	updated_at?:ValueTypes["DateTime"] | null,
	title?:string | null
};
	["CreateManyMainsInput"]: {
	/** Array of records to create */
	mains:ValueTypes["CreateMain"][]
};
	["UpdateOneMainInput"]: {
	/** The id of the record to update */
	id:string,
	/** The update to apply. */
	update:ValueTypes["UpdateMain"]
};
	["UpdateMain"]: {
	id?:string | null,
	created?:ValueTypes["DateTime"] | null,
	updated_at?:ValueTypes["DateTime"] | null,
	title?:string | null
};
	["UpdateManyMainsInput"]: {
	/** Filter used to find fields to update */
	filter:ValueTypes["mainUpdateFilter"],
	/** The update to apply to all records found using the filter */
	update:ValueTypes["UpdateMain"]
};
	["mainUpdateFilter"]: {
	and?:ValueTypes["mainUpdateFilter"][],
	or?:ValueTypes["mainUpdateFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["DeleteOneMainInput"]: {
	/** The id of the record to delete. */
	id:string
};
	["DeleteManyMainsInput"]: {
	/** Filter to find records to delete */
	filter:ValueTypes["mainDeleteFilter"]
};
	["mainDeleteFilter"]: {
	and?:ValueTypes["mainDeleteFilter"][],
	or?:ValueTypes["mainDeleteFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["AddItemsToPageBodyNavigationInput"]: {
	/** The id of the record. */
	id:string,
	/** The ids of the relations. */
	relationIds:string[]
};
	["SetItemsOnPageBodyNavigationInput"]: {
	/** The id of the record. */
	id:string,
	/** The ids of the relations. */
	relationIds:string[]
};
	["CreateOnePageBodyNavigationInput"]: {
	/** The record to create */
	pageBodyNavigation:ValueTypes["CreatePageBodyNavigation"]
};
	["CreatePageBodyNavigation"]: {
	id?:string | null,
	created?:ValueTypes["DateTime"] | null,
	updated_at?:ValueTypes["DateTime"] | null,
	title?:string | null
};
	["CreateManyPageBodyNavigationsInput"]: {
	/** Array of records to create */
	pageBodyNavigations:ValueTypes["CreatePageBodyNavigation"][]
};
	["UpdateOnePageBodyNavigationInput"]: {
	/** The id of the record to update */
	id:string,
	/** The update to apply. */
	update:ValueTypes["UpdatePageBodyNavigation"]
};
	["UpdatePageBodyNavigation"]: {
	id?:string | null,
	created?:ValueTypes["DateTime"] | null,
	updated_at?:ValueTypes["DateTime"] | null,
	title?:string | null
};
	["UpdateManyPageBodyNavigationsInput"]: {
	/** Filter used to find fields to update */
	filter:ValueTypes["PageBodyNavigationUpdateFilter"],
	/** The update to apply to all records found using the filter */
	update:ValueTypes["UpdatePageBodyNavigation"]
};
	["PageBodyNavigationUpdateFilter"]: {
	and?:ValueTypes["PageBodyNavigationUpdateFilter"][],
	or?:ValueTypes["PageBodyNavigationUpdateFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["DeleteOnePageBodyNavigationInput"]: {
	/** The id of the record to delete. */
	id:string
};
	["DeleteManyPageBodyNavigationsInput"]: {
	/** Filter to find records to delete */
	filter:ValueTypes["PageBodyNavigationDeleteFilter"]
};
	["PageBodyNavigationDeleteFilter"]: {
	and?:ValueTypes["PageBodyNavigationDeleteFilter"][],
	or?:ValueTypes["PageBodyNavigationDeleteFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["CreateOneSidebarInput"]: {
	/** The record to create */
	sidebar:ValueTypes["CreateSidebar"]
};
	["CreateSidebar"]: {
	id?:string | null,
	created?:ValueTypes["DateTime"] | null,
	updated_at?:ValueTypes["DateTime"] | null,
	title?:string | null
};
	["CreateManySidebarsInput"]: {
	/** Array of records to create */
	sidebars:ValueTypes["CreateSidebar"][]
};
	["UpdateOneSidebarInput"]: {
	/** The id of the record to update */
	id:string,
	/** The update to apply. */
	update:ValueTypes["UpdateSidebar"]
};
	["UpdateSidebar"]: {
	id?:string | null,
	created?:ValueTypes["DateTime"] | null,
	updated_at?:ValueTypes["DateTime"] | null,
	title?:string | null
};
	["UpdateManySidebarsInput"]: {
	/** Filter used to find fields to update */
	filter:ValueTypes["sidebarUpdateFilter"],
	/** The update to apply to all records found using the filter */
	update:ValueTypes["UpdateSidebar"]
};
	["sidebarUpdateFilter"]: {
	and?:ValueTypes["sidebarUpdateFilter"][],
	or?:ValueTypes["sidebarUpdateFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["DeleteOneSidebarInput"]: {
	/** The id of the record to delete. */
	id:string
};
	["DeleteManySidebarsInput"]: {
	/** Filter to find records to delete */
	filter:ValueTypes["sidebarDeleteFilter"]
};
	["sidebarDeleteFilter"]: {
	and?:ValueTypes["sidebarDeleteFilter"][],
	or?:ValueTypes["sidebarDeleteFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["CreateOneCommonAInput"]: {
	/** The record to create */
	commonA:ValueTypes["CreateCommonA"]
};
	["CreateCommonA"]: {
	id?:string | null,
	created?:ValueTypes["DateTime"] | null,
	updated_at?:ValueTypes["DateTime"] | null,
	href?:string | null,
	rel?:ValueTypes["RelEnum"] | null,
	target?:ValueTypes["TargetEnum"] | null
};
	["CreateManyCommonASInput"]: {
	/** Array of records to create */
	commonAS:ValueTypes["CreateCommonA"][]
};
	["UpdateOneCommonAInput"]: {
	/** The id of the record to update */
	id:string,
	/** The update to apply. */
	update:ValueTypes["UpdateCommonA"]
};
	["UpdateCommonA"]: {
	id?:string | null,
	created?:ValueTypes["DateTime"] | null,
	updated_at?:ValueTypes["DateTime"] | null,
	href?:string | null,
	rel?:ValueTypes["RelEnum"] | null,
	target?:ValueTypes["TargetEnum"] | null
};
	["UpdateManyCommonASInput"]: {
	/** Filter used to find fields to update */
	filter:ValueTypes["CommonAUpdateFilter"],
	/** The update to apply to all records found using the filter */
	update:ValueTypes["UpdateCommonA"]
};
	["CommonAUpdateFilter"]: {
	and?:ValueTypes["CommonAUpdateFilter"][],
	or?:ValueTypes["CommonAUpdateFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
};
	["DeleteOneCommonAInput"]: {
	/** The id of the record to delete. */
	id:string
};
	["DeleteManyCommonASInput"]: {
	/** Filter to find records to delete */
	filter:ValueTypes["CommonADeleteFilter"]
};
	["CommonADeleteFilter"]: {
	and?:ValueTypes["CommonADeleteFilter"][],
	or?:ValueTypes["CommonADeleteFilter"][],
	id?:ValueTypes["IDFilterComparison"] | null
}
  }

export type ModelTypes = {
    ["User"]: {
		id:number,
	provider:string,
	providerId:string,
	username:string,
	name:string,
	created_at:ModelTypes["DateTime"],
	updated_at:ModelTypes["DateTime"]
};
	/** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
["DateTime"]:any;
	["meta"]: {
		id:string,
	created:ModelTypes["DateTime"],
	updated_at:ModelTypes["DateTime"],
	charset:string,
	description:string,
	noindex:boolean,
	nofollow:boolean,
	viewport:string
};
	["head"]: {
		id:string,
	created:ModelTypes["DateTime"],
	updated_at:ModelTypes["DateTime"],
	title:string,
	meta:ModelTypes["meta"]
};
	["page_body_header"]: {
		id:string,
	created:ModelTypes["DateTime"],
	updated_at:ModelTypes["DateTime"],
	type:string
};
	["CommonA"]: {
		id:string,
	created:ModelTypes["DateTime"],
	updated_at:ModelTypes["DateTime"],
	href:string,
	rel:ModelTypes["RelEnum"],
	target:ModelTypes["TargetEnum"]
};
	["RelEnum"]: GraphQLTypes["RelEnum"];
	["TargetEnum"]: GraphQLTypes["TargetEnum"];
	["PageBodyNavigation"]: {
		id:string,
	created:ModelTypes["DateTime"],
	updated_at:ModelTypes["DateTime"],
	title:string,
	items?:ModelTypes["CommonA"][]
};
	["CommonAFilter"]: GraphQLTypes["CommonAFilter"];
	["IDFilterComparison"]: GraphQLTypes["IDFilterComparison"];
	["CommonASort"]: GraphQLTypes["CommonASort"];
	["CommonASortFields"]: GraphQLTypes["CommonASortFields"];
	/** Sort Directions */
["SortDirection"]: GraphQLTypes["SortDirection"];
	/** Sort Nulls Options */
["SortNulls"]: GraphQLTypes["SortNulls"];
	["sidebar"]: {
		id:string,
	created:ModelTypes["DateTime"],
	updated_at:ModelTypes["DateTime"],
	title:string
};
	["page_body_footer"]: {
		id:string,
	created:ModelTypes["DateTime"],
	updated_at:ModelTypes["DateTime"],
	type:string
};
	["main"]: {
		id:string,
	created:ModelTypes["DateTime"],
	updated_at:ModelTypes["DateTime"],
	title:string
};
	["body"]: {
		id:string,
	created:ModelTypes["DateTime"],
	updated_at:ModelTypes["DateTime"],
	header:ModelTypes["HeaderUnion"],
	navigation:ModelTypes["PageBodyNavigation"],
	main:ModelTypes["main"],
	sidebar:ModelTypes["sidebar"],
	footer:ModelTypes["FooterUnion"]
};
	["HeaderUnion"]:ModelTypes["page_body_header_curved"] | ModelTypes["page_body_header_skewed"];
	["page_body_header_curved"]: {
		id:string,
	created:ModelTypes["DateTime"],
	updated_at:ModelTypes["DateTime"],
	title:string,
	subTitle:string
};
	["page_body_header_skewed"]: {
		id:string,
	created:ModelTypes["DateTime"],
	updated_at:ModelTypes["DateTime"],
	title:string,
	subTitle:string
};
	["FooterUnion"]:ModelTypes["page_body_footer_extended"] | ModelTypes["page_body_footer_simple"];
	["page_body_footer_extended"]: {
		id:string,
	created:ModelTypes["DateTime"],
	updated_at:ModelTypes["DateTime"],
	title:string,
	subTitle:string,
	copyright:string
};
	["page_body_footer_simple"]: {
		id:string,
	created:ModelTypes["DateTime"],
	updated_at:ModelTypes["DateTime"],
	title:string,
	subTitle:string,
	copyright:string
};
	["page"]: {
		id:string,
	created:ModelTypes["DateTime"],
	updated_at:ModelTypes["DateTime"],
	lang:string,
	head:ModelTypes["head"],
	body:ModelTypes["body"]
};
	["DeleteManyResponse"]: {
		/** The number of records deleted. */
	deletedCount:number
};
	["PageDeleteResponse"]: {
		id?:string,
	created?:ModelTypes["DateTime"],
	updated_at?:ModelTypes["DateTime"],
	lang?:string
};
	["UpdateManyResponse"]: {
		/** The number of records updated. */
	updatedCount:number
};
	["pageEdge"]: {
		/** The node containing the page */
	node:ModelTypes["page"],
	/** Cursor for this node. */
	cursor:ModelTypes["ConnectionCursor"]
};
	/** Cursor for paging through collections */
["ConnectionCursor"]:any;
	["PageInfo"]: {
		/** true if paging forward and there are more records. */
	hasNextPage?:boolean,
	/** true if paging backwards and there are more records. */
	hasPreviousPage?:boolean,
	/** The cursor of the first returned record. */
	startCursor?:ModelTypes["ConnectionCursor"],
	/** The cursor of the last returned record. */
	endCursor?:ModelTypes["ConnectionCursor"]
};
	["PageConnection"]: {
		/** Paging information */
	pageInfo:ModelTypes["PageInfo"],
	/** Array of edges. */
	edges:ModelTypes["pageEdge"][]
};
	["pageAggregateGroupBy"]: {
		id?:string
};
	["pageCountAggregate"]: {
		id?:number
};
	["pageSumAggregate"]: {
		id?:number
};
	["pageAvgAggregate"]: {
		id?:number
};
	["pageMinAggregate"]: {
		id?:string
};
	["pageMaxAggregate"]: {
		id?:string
};
	["HeadDeleteResponse"]: {
		id?:string,
	created?:ModelTypes["DateTime"],
	updated_at?:ModelTypes["DateTime"],
	title?:string
};
	["headEdge"]: {
		/** The node containing the head */
	node:ModelTypes["head"],
	/** Cursor for this node. */
	cursor:ModelTypes["ConnectionCursor"]
};
	["HeadConnection"]: {
		/** Paging information */
	pageInfo:ModelTypes["PageInfo"],
	/** Array of edges. */
	edges:ModelTypes["headEdge"][]
};
	["headAggregateGroupBy"]: {
		id?:string,
	title?:string
};
	["headCountAggregate"]: {
		id?:number,
	title?:number
};
	["headSumAggregate"]: {
		id?:number
};
	["headAvgAggregate"]: {
		id?:number
};
	["headMinAggregate"]: {
		id?:string,
	title?:string
};
	["headMaxAggregate"]: {
		id?:string,
	title?:string
};
	["MetaDeleteResponse"]: {
		id?:string,
	created?:ModelTypes["DateTime"],
	updated_at?:ModelTypes["DateTime"],
	charset?:string,
	description?:string,
	noindex?:boolean,
	nofollow?:boolean,
	viewport?:string
};
	["metaEdge"]: {
		/** The node containing the meta */
	node:ModelTypes["meta"],
	/** Cursor for this node. */
	cursor:ModelTypes["ConnectionCursor"]
};
	["MetaConnection"]: {
		/** Paging information */
	pageInfo:ModelTypes["PageInfo"],
	/** Array of edges. */
	edges:ModelTypes["metaEdge"][]
};
	["metaAggregateGroupBy"]: {
		id?:string
};
	["metaCountAggregate"]: {
		id?:number
};
	["metaSumAggregate"]: {
		id?:number
};
	["metaAvgAggregate"]: {
		id?:number
};
	["metaMinAggregate"]: {
		id?:string
};
	["metaMaxAggregate"]: {
		id?:string
};
	["BodyDeleteResponse"]: {
		id?:string,
	created?:ModelTypes["DateTime"],
	updated_at?:ModelTypes["DateTime"]
};
	["bodyEdge"]: {
		/** The node containing the body */
	node:ModelTypes["body"],
	/** Cursor for this node. */
	cursor:ModelTypes["ConnectionCursor"]
};
	["BodyConnection"]: {
		/** Paging information */
	pageInfo:ModelTypes["PageInfo"],
	/** Array of edges. */
	edges:ModelTypes["bodyEdge"][]
};
	["bodyAggregateGroupBy"]: {
		id?:string
};
	["bodyCountAggregate"]: {
		id?:number
};
	["bodySumAggregate"]: {
		id?:number
};
	["bodyAvgAggregate"]: {
		id?:number
};
	["bodyMinAggregate"]: {
		id?:string
};
	["bodyMaxAggregate"]: {
		id?:string
};
	["Page_body_headerDeleteResponse"]: {
		id?:string,
	created?:ModelTypes["DateTime"],
	updated_at?:ModelTypes["DateTime"],
	type?:string
};
	["page_body_headerEdge"]: {
		/** The node containing the page_body_header */
	node:ModelTypes["page_body_header"],
	/** Cursor for this node. */
	cursor:ModelTypes["ConnectionCursor"]
};
	["Page_body_headerConnection"]: {
		/** Paging information */
	pageInfo:ModelTypes["PageInfo"],
	/** Array of edges. */
	edges:ModelTypes["page_body_headerEdge"][]
};
	["page_body_headerAggregateGroupBy"]: {
		id?:string
};
	["page_body_headerCountAggregate"]: {
		id?:number
};
	["page_body_headerSumAggregate"]: {
		id?:number
};
	["page_body_headerAvgAggregate"]: {
		id?:number
};
	["page_body_headerMinAggregate"]: {
		id?:string
};
	["page_body_headerMaxAggregate"]: {
		id?:string
};
	["Page_body_footerDeleteResponse"]: {
		id?:string,
	created?:ModelTypes["DateTime"],
	updated_at?:ModelTypes["DateTime"],
	type?:string
};
	["page_body_footerEdge"]: {
		/** The node containing the page_body_footer */
	node:ModelTypes["page_body_footer"],
	/** Cursor for this node. */
	cursor:ModelTypes["ConnectionCursor"]
};
	["Page_body_footerConnection"]: {
		/** Paging information */
	pageInfo:ModelTypes["PageInfo"],
	/** Array of edges. */
	edges:ModelTypes["page_body_footerEdge"][]
};
	["page_body_footerAggregateGroupBy"]: {
		id?:string
};
	["page_body_footerCountAggregate"]: {
		id?:number
};
	["page_body_footerSumAggregate"]: {
		id?:number
};
	["page_body_footerAvgAggregate"]: {
		id?:number
};
	["page_body_footerMinAggregate"]: {
		id?:string
};
	["page_body_footerMaxAggregate"]: {
		id?:string
};
	["MainDeleteResponse"]: {
		id?:string,
	created?:ModelTypes["DateTime"],
	updated_at?:ModelTypes["DateTime"],
	title?:string
};
	["mainEdge"]: {
		/** The node containing the main */
	node:ModelTypes["main"],
	/** Cursor for this node. */
	cursor:ModelTypes["ConnectionCursor"]
};
	["MainConnection"]: {
		/** Paging information */
	pageInfo:ModelTypes["PageInfo"],
	/** Array of edges. */
	edges:ModelTypes["mainEdge"][]
};
	["mainAggregateGroupBy"]: {
		id?:string
};
	["mainCountAggregate"]: {
		id?:number
};
	["mainSumAggregate"]: {
		id?:number
};
	["mainAvgAggregate"]: {
		id?:number
};
	["mainMinAggregate"]: {
		id?:string
};
	["mainMaxAggregate"]: {
		id?:string
};
	["PageBodyNavigationDeleteResponse"]: {
		id?:string,
	created?:ModelTypes["DateTime"],
	updated_at?:ModelTypes["DateTime"],
	title?:string
};
	["PageBodyNavigationEdge"]: {
		/** The node containing the PageBodyNavigation */
	node:ModelTypes["PageBodyNavigation"],
	/** Cursor for this node. */
	cursor:ModelTypes["ConnectionCursor"]
};
	["PageBodyNavigationConnection"]: {
		/** Paging information */
	pageInfo:ModelTypes["PageInfo"],
	/** Array of edges. */
	edges:ModelTypes["PageBodyNavigationEdge"][]
};
	["PageBodyNavigationAggregateGroupBy"]: {
		id?:string
};
	["PageBodyNavigationCountAggregate"]: {
		id?:number
};
	["PageBodyNavigationSumAggregate"]: {
		id?:number
};
	["PageBodyNavigationAvgAggregate"]: {
		id?:number
};
	["PageBodyNavigationMinAggregate"]: {
		id?:string
};
	["PageBodyNavigationMaxAggregate"]: {
		id?:string
};
	["SidebarDeleteResponse"]: {
		id?:string,
	created?:ModelTypes["DateTime"],
	updated_at?:ModelTypes["DateTime"],
	title?:string
};
	["sidebarEdge"]: {
		/** The node containing the sidebar */
	node:ModelTypes["sidebar"],
	/** Cursor for this node. */
	cursor:ModelTypes["ConnectionCursor"]
};
	["SidebarConnection"]: {
		/** Paging information */
	pageInfo:ModelTypes["PageInfo"],
	/** Array of edges. */
	edges:ModelTypes["sidebarEdge"][]
};
	["sidebarAggregateGroupBy"]: {
		id?:string
};
	["sidebarCountAggregate"]: {
		id?:number
};
	["sidebarSumAggregate"]: {
		id?:number
};
	["sidebarAvgAggregate"]: {
		id?:number
};
	["sidebarMinAggregate"]: {
		id?:string
};
	["sidebarMaxAggregate"]: {
		id?:string
};
	["CommonADeleteResponse"]: {
		id?:string,
	created?:ModelTypes["DateTime"],
	updated_at?:ModelTypes["DateTime"],
	href?:string,
	rel?:ModelTypes["RelEnum"],
	target?:ModelTypes["TargetEnum"]
};
	["CommonAEdge"]: {
		/** The node containing the CommonA */
	node:ModelTypes["CommonA"],
	/** Cursor for this node. */
	cursor:ModelTypes["ConnectionCursor"]
};
	["CommonAConnection"]: {
		/** Paging information */
	pageInfo:ModelTypes["PageInfo"],
	/** Array of edges. */
	edges:ModelTypes["CommonAEdge"][]
};
	["CommonAAggregateGroupBy"]: {
		id?:string
};
	["CommonACountAggregate"]: {
		id?:number
};
	["CommonASumAggregate"]: {
		id?:number
};
	["CommonAAvgAggregate"]: {
		id?:number
};
	["CommonAMinAggregate"]: {
		id?:string
};
	["CommonAMaxAggregate"]: {
		id?:string
};
	["Query"]: {
		users:ModelTypes["User"][],
	whoAmI:ModelTypes["User"],
	page?:ModelTypes["page"],
	pages:ModelTypes["PageConnection"],
	head?:ModelTypes["head"],
	heads:ModelTypes["HeadConnection"],
	meta?:ModelTypes["meta"],
	metas:ModelTypes["MetaConnection"],
	body?:ModelTypes["body"],
	bodies:ModelTypes["BodyConnection"],
	page_body_header?:ModelTypes["page_body_header"],
	page_body_headers:ModelTypes["Page_body_headerConnection"],
	page_body_footer?:ModelTypes["page_body_footer"],
	page_body_footers:ModelTypes["Page_body_footerConnection"],
	main?:ModelTypes["main"],
	mains:ModelTypes["MainConnection"],
	pageBodyNavigation?:ModelTypes["PageBodyNavigation"],
	pageBodyNavigations:ModelTypes["PageBodyNavigationConnection"],
	sidebar?:ModelTypes["sidebar"],
	sidebars:ModelTypes["SidebarConnection"],
	commonA?:ModelTypes["CommonA"],
	commonAS:ModelTypes["CommonAConnection"]
};
	["CursorPaging"]: GraphQLTypes["CursorPaging"];
	["pageFilter"]: GraphQLTypes["pageFilter"];
	["pageSort"]: GraphQLTypes["pageSort"];
	["pageSortFields"]: GraphQLTypes["pageSortFields"];
	["headFilter"]: GraphQLTypes["headFilter"];
	["StringFieldComparison"]: GraphQLTypes["StringFieldComparison"];
	["headSort"]: GraphQLTypes["headSort"];
	["headSortFields"]: GraphQLTypes["headSortFields"];
	["metaFilter"]: GraphQLTypes["metaFilter"];
	["metaSort"]: GraphQLTypes["metaSort"];
	["metaSortFields"]: GraphQLTypes["metaSortFields"];
	["bodyFilter"]: GraphQLTypes["bodyFilter"];
	["bodySort"]: GraphQLTypes["bodySort"];
	["bodySortFields"]: GraphQLTypes["bodySortFields"];
	["page_body_headerFilter"]: GraphQLTypes["page_body_headerFilter"];
	["page_body_headerSort"]: GraphQLTypes["page_body_headerSort"];
	["page_body_headerSortFields"]: GraphQLTypes["page_body_headerSortFields"];
	["page_body_footerFilter"]: GraphQLTypes["page_body_footerFilter"];
	["page_body_footerSort"]: GraphQLTypes["page_body_footerSort"];
	["page_body_footerSortFields"]: GraphQLTypes["page_body_footerSortFields"];
	["mainFilter"]: GraphQLTypes["mainFilter"];
	["mainSort"]: GraphQLTypes["mainSort"];
	["mainSortFields"]: GraphQLTypes["mainSortFields"];
	["PageBodyNavigationFilter"]: GraphQLTypes["PageBodyNavigationFilter"];
	["PageBodyNavigationSort"]: GraphQLTypes["PageBodyNavigationSort"];
	["PageBodyNavigationSortFields"]: GraphQLTypes["PageBodyNavigationSortFields"];
	["sidebarFilter"]: GraphQLTypes["sidebarFilter"];
	["sidebarSort"]: GraphQLTypes["sidebarSort"];
	["sidebarSortFields"]: GraphQLTypes["sidebarSortFields"];
	["Mutation"]: {
		setHeadOnPage:ModelTypes["page"],
	setBodyOnPage:ModelTypes["page"],
	createOnePage:ModelTypes["page"],
	createManyPages:ModelTypes["page"][],
	updateOnePage:ModelTypes["page"],
	updateManyPages:ModelTypes["UpdateManyResponse"],
	deleteOnePage:ModelTypes["PageDeleteResponse"],
	deleteManyPages:ModelTypes["DeleteManyResponse"],
	setMetaOnHead:ModelTypes["head"],
	createOneHead:ModelTypes["head"],
	createManyHeads:ModelTypes["head"][],
	updateOneHead:ModelTypes["head"],
	updateManyHeads:ModelTypes["UpdateManyResponse"],
	deleteOneHead:ModelTypes["HeadDeleteResponse"],
	deleteManyHeads:ModelTypes["DeleteManyResponse"],
	createOneMeta:ModelTypes["meta"],
	createManyMetas:ModelTypes["meta"][],
	updateOneMeta:ModelTypes["meta"],
	updateManyMetas:ModelTypes["UpdateManyResponse"],
	deleteOneMeta:ModelTypes["MetaDeleteResponse"],
	deleteManyMetas:ModelTypes["DeleteManyResponse"],
	setHeaderOnBody:ModelTypes["body"],
	setNavigationOnBody:ModelTypes["body"],
	setMainOnBody:ModelTypes["body"],
	setSidebarOnBody:ModelTypes["body"],
	setFooterOnBody:ModelTypes["body"],
	createOneBody:ModelTypes["body"],
	createManyBodies:ModelTypes["body"][],
	updateOneBody:ModelTypes["body"],
	updateManyBodies:ModelTypes["UpdateManyResponse"],
	deleteOneBody:ModelTypes["BodyDeleteResponse"],
	deleteManyBodies:ModelTypes["DeleteManyResponse"],
	createOnePage_body_header:ModelTypes["page_body_header"],
	createManyPage_body_headers:ModelTypes["page_body_header"][],
	updateOnePage_body_header:ModelTypes["page_body_header"],
	updateManyPage_body_headers:ModelTypes["UpdateManyResponse"],
	deleteOnePage_body_header:ModelTypes["Page_body_headerDeleteResponse"],
	deleteManyPage_body_headers:ModelTypes["DeleteManyResponse"],
	createOnePage_body_footer:ModelTypes["page_body_footer"],
	createManyPage_body_footers:ModelTypes["page_body_footer"][],
	updateOnePage_body_footer:ModelTypes["page_body_footer"],
	updateManyPage_body_footers:ModelTypes["UpdateManyResponse"],
	deleteOnePage_body_footer:ModelTypes["Page_body_footerDeleteResponse"],
	deleteManyPage_body_footers:ModelTypes["DeleteManyResponse"],
	createOneMain:ModelTypes["main"],
	createManyMains:ModelTypes["main"][],
	updateOneMain:ModelTypes["main"],
	updateManyMains:ModelTypes["UpdateManyResponse"],
	deleteOneMain:ModelTypes["MainDeleteResponse"],
	deleteManyMains:ModelTypes["DeleteManyResponse"],
	addItemsToPageBodyNavigation:ModelTypes["PageBodyNavigation"],
	setItemsOnPageBodyNavigation:ModelTypes["PageBodyNavigation"],
	createOnePageBodyNavigation:ModelTypes["PageBodyNavigation"],
	createManyPageBodyNavigations:ModelTypes["PageBodyNavigation"][],
	updateOnePageBodyNavigation:ModelTypes["PageBodyNavigation"],
	updateManyPageBodyNavigations:ModelTypes["UpdateManyResponse"],
	deleteOnePageBodyNavigation:ModelTypes["PageBodyNavigationDeleteResponse"],
	deleteManyPageBodyNavigations:ModelTypes["DeleteManyResponse"],
	createOneSidebar:ModelTypes["sidebar"],
	createManySidebars:ModelTypes["sidebar"][],
	updateOneSidebar:ModelTypes["sidebar"],
	updateManySidebars:ModelTypes["UpdateManyResponse"],
	deleteOneSidebar:ModelTypes["SidebarDeleteResponse"],
	deleteManySidebars:ModelTypes["DeleteManyResponse"],
	createOneCommonA:ModelTypes["CommonA"],
	createManyCommonAS:ModelTypes["CommonA"][],
	updateOneCommonA:ModelTypes["CommonA"],
	updateManyCommonAS:ModelTypes["UpdateManyResponse"],
	deleteOneCommonA:ModelTypes["CommonADeleteResponse"],
	deleteManyCommonAS:ModelTypes["DeleteManyResponse"]
};
	["SetHeadOnPageInput"]: GraphQLTypes["SetHeadOnPageInput"];
	["SetBodyOnPageInput"]: GraphQLTypes["SetBodyOnPageInput"];
	["CreateOnePageInput"]: GraphQLTypes["CreateOnePageInput"];
	["CreatePage"]: GraphQLTypes["CreatePage"];
	["CreateManyPagesInput"]: GraphQLTypes["CreateManyPagesInput"];
	["UpdateOnePageInput"]: GraphQLTypes["UpdateOnePageInput"];
	["UpdatePage"]: GraphQLTypes["UpdatePage"];
	["UpdateManyPagesInput"]: GraphQLTypes["UpdateManyPagesInput"];
	["pageUpdateFilter"]: GraphQLTypes["pageUpdateFilter"];
	["DeleteOnePageInput"]: GraphQLTypes["DeleteOnePageInput"];
	["DeleteManyPagesInput"]: GraphQLTypes["DeleteManyPagesInput"];
	["pageDeleteFilter"]: GraphQLTypes["pageDeleteFilter"];
	["SetMetaOnHeadInput"]: GraphQLTypes["SetMetaOnHeadInput"];
	["CreateOneHeadInput"]: GraphQLTypes["CreateOneHeadInput"];
	["CreateHead"]: GraphQLTypes["CreateHead"];
	["CreateManyHeadsInput"]: GraphQLTypes["CreateManyHeadsInput"];
	["UpdateOneHeadInput"]: GraphQLTypes["UpdateOneHeadInput"];
	["UpdateHead"]: GraphQLTypes["UpdateHead"];
	["UpdateManyHeadsInput"]: GraphQLTypes["UpdateManyHeadsInput"];
	["headUpdateFilter"]: GraphQLTypes["headUpdateFilter"];
	["DeleteOneHeadInput"]: GraphQLTypes["DeleteOneHeadInput"];
	["DeleteManyHeadsInput"]: GraphQLTypes["DeleteManyHeadsInput"];
	["headDeleteFilter"]: GraphQLTypes["headDeleteFilter"];
	["CreateOneMetaInput"]: GraphQLTypes["CreateOneMetaInput"];
	["CreateMeta"]: GraphQLTypes["CreateMeta"];
	["CreateManyMetasInput"]: GraphQLTypes["CreateManyMetasInput"];
	["UpdateOneMetaInput"]: GraphQLTypes["UpdateOneMetaInput"];
	["UpdateMeta"]: GraphQLTypes["UpdateMeta"];
	["UpdateManyMetasInput"]: GraphQLTypes["UpdateManyMetasInput"];
	["metaUpdateFilter"]: GraphQLTypes["metaUpdateFilter"];
	["DeleteOneMetaInput"]: GraphQLTypes["DeleteOneMetaInput"];
	["DeleteManyMetasInput"]: GraphQLTypes["DeleteManyMetasInput"];
	["metaDeleteFilter"]: GraphQLTypes["metaDeleteFilter"];
	["SetHeaderOnBodyInput"]: GraphQLTypes["SetHeaderOnBodyInput"];
	["SetNavigationOnBodyInput"]: GraphQLTypes["SetNavigationOnBodyInput"];
	["SetMainOnBodyInput"]: GraphQLTypes["SetMainOnBodyInput"];
	["SetSidebarOnBodyInput"]: GraphQLTypes["SetSidebarOnBodyInput"];
	["SetFooterOnBodyInput"]: GraphQLTypes["SetFooterOnBodyInput"];
	["CreateOneBodyInput"]: GraphQLTypes["CreateOneBodyInput"];
	["CreateBody"]: GraphQLTypes["CreateBody"];
	["CreateManyBodiesInput"]: GraphQLTypes["CreateManyBodiesInput"];
	["UpdateOneBodyInput"]: GraphQLTypes["UpdateOneBodyInput"];
	["UpdateBody"]: GraphQLTypes["UpdateBody"];
	["UpdateManyBodiesInput"]: GraphQLTypes["UpdateManyBodiesInput"];
	["bodyUpdateFilter"]: GraphQLTypes["bodyUpdateFilter"];
	["DeleteOneBodyInput"]: GraphQLTypes["DeleteOneBodyInput"];
	["DeleteManyBodiesInput"]: GraphQLTypes["DeleteManyBodiesInput"];
	["bodyDeleteFilter"]: GraphQLTypes["bodyDeleteFilter"];
	["CreateOnePage_body_headerInput"]: GraphQLTypes["CreateOnePage_body_headerInput"];
	["CreatePage_body_header"]: GraphQLTypes["CreatePage_body_header"];
	["CreateManyPage_body_headersInput"]: GraphQLTypes["CreateManyPage_body_headersInput"];
	["UpdateOnePage_body_headerInput"]: GraphQLTypes["UpdateOnePage_body_headerInput"];
	["UpdatePage_body_header"]: GraphQLTypes["UpdatePage_body_header"];
	["UpdateManyPage_body_headersInput"]: GraphQLTypes["UpdateManyPage_body_headersInput"];
	["page_body_headerUpdateFilter"]: GraphQLTypes["page_body_headerUpdateFilter"];
	["DeleteOnePage_body_headerInput"]: GraphQLTypes["DeleteOnePage_body_headerInput"];
	["DeleteManyPage_body_headersInput"]: GraphQLTypes["DeleteManyPage_body_headersInput"];
	["page_body_headerDeleteFilter"]: GraphQLTypes["page_body_headerDeleteFilter"];
	["CreateOnePage_body_footerInput"]: GraphQLTypes["CreateOnePage_body_footerInput"];
	["CreatePage_body_footer"]: GraphQLTypes["CreatePage_body_footer"];
	["CreateManyPage_body_footersInput"]: GraphQLTypes["CreateManyPage_body_footersInput"];
	["UpdateOnePage_body_footerInput"]: GraphQLTypes["UpdateOnePage_body_footerInput"];
	["UpdatePage_body_footer"]: GraphQLTypes["UpdatePage_body_footer"];
	["UpdateManyPage_body_footersInput"]: GraphQLTypes["UpdateManyPage_body_footersInput"];
	["page_body_footerUpdateFilter"]: GraphQLTypes["page_body_footerUpdateFilter"];
	["DeleteOnePage_body_footerInput"]: GraphQLTypes["DeleteOnePage_body_footerInput"];
	["DeleteManyPage_body_footersInput"]: GraphQLTypes["DeleteManyPage_body_footersInput"];
	["page_body_footerDeleteFilter"]: GraphQLTypes["page_body_footerDeleteFilter"];
	["CreateOneMainInput"]: GraphQLTypes["CreateOneMainInput"];
	["CreateMain"]: GraphQLTypes["CreateMain"];
	["CreateManyMainsInput"]: GraphQLTypes["CreateManyMainsInput"];
	["UpdateOneMainInput"]: GraphQLTypes["UpdateOneMainInput"];
	["UpdateMain"]: GraphQLTypes["UpdateMain"];
	["UpdateManyMainsInput"]: GraphQLTypes["UpdateManyMainsInput"];
	["mainUpdateFilter"]: GraphQLTypes["mainUpdateFilter"];
	["DeleteOneMainInput"]: GraphQLTypes["DeleteOneMainInput"];
	["DeleteManyMainsInput"]: GraphQLTypes["DeleteManyMainsInput"];
	["mainDeleteFilter"]: GraphQLTypes["mainDeleteFilter"];
	["AddItemsToPageBodyNavigationInput"]: GraphQLTypes["AddItemsToPageBodyNavigationInput"];
	["SetItemsOnPageBodyNavigationInput"]: GraphQLTypes["SetItemsOnPageBodyNavigationInput"];
	["CreateOnePageBodyNavigationInput"]: GraphQLTypes["CreateOnePageBodyNavigationInput"];
	["CreatePageBodyNavigation"]: GraphQLTypes["CreatePageBodyNavigation"];
	["CreateManyPageBodyNavigationsInput"]: GraphQLTypes["CreateManyPageBodyNavigationsInput"];
	["UpdateOnePageBodyNavigationInput"]: GraphQLTypes["UpdateOnePageBodyNavigationInput"];
	["UpdatePageBodyNavigation"]: GraphQLTypes["UpdatePageBodyNavigation"];
	["UpdateManyPageBodyNavigationsInput"]: GraphQLTypes["UpdateManyPageBodyNavigationsInput"];
	["PageBodyNavigationUpdateFilter"]: GraphQLTypes["PageBodyNavigationUpdateFilter"];
	["DeleteOnePageBodyNavigationInput"]: GraphQLTypes["DeleteOnePageBodyNavigationInput"];
	["DeleteManyPageBodyNavigationsInput"]: GraphQLTypes["DeleteManyPageBodyNavigationsInput"];
	["PageBodyNavigationDeleteFilter"]: GraphQLTypes["PageBodyNavigationDeleteFilter"];
	["CreateOneSidebarInput"]: GraphQLTypes["CreateOneSidebarInput"];
	["CreateSidebar"]: GraphQLTypes["CreateSidebar"];
	["CreateManySidebarsInput"]: GraphQLTypes["CreateManySidebarsInput"];
	["UpdateOneSidebarInput"]: GraphQLTypes["UpdateOneSidebarInput"];
	["UpdateSidebar"]: GraphQLTypes["UpdateSidebar"];
	["UpdateManySidebarsInput"]: GraphQLTypes["UpdateManySidebarsInput"];
	["sidebarUpdateFilter"]: GraphQLTypes["sidebarUpdateFilter"];
	["DeleteOneSidebarInput"]: GraphQLTypes["DeleteOneSidebarInput"];
	["DeleteManySidebarsInput"]: GraphQLTypes["DeleteManySidebarsInput"];
	["sidebarDeleteFilter"]: GraphQLTypes["sidebarDeleteFilter"];
	["CreateOneCommonAInput"]: GraphQLTypes["CreateOneCommonAInput"];
	["CreateCommonA"]: GraphQLTypes["CreateCommonA"];
	["CreateManyCommonASInput"]: GraphQLTypes["CreateManyCommonASInput"];
	["UpdateOneCommonAInput"]: GraphQLTypes["UpdateOneCommonAInput"];
	["UpdateCommonA"]: GraphQLTypes["UpdateCommonA"];
	["UpdateManyCommonASInput"]: GraphQLTypes["UpdateManyCommonASInput"];
	["CommonAUpdateFilter"]: GraphQLTypes["CommonAUpdateFilter"];
	["DeleteOneCommonAInput"]: GraphQLTypes["DeleteOneCommonAInput"];
	["DeleteManyCommonASInput"]: GraphQLTypes["DeleteManyCommonASInput"];
	["CommonADeleteFilter"]: GraphQLTypes["CommonADeleteFilter"]
    }

export type GraphQLTypes = {
    // ------------------------------------------------------;
	// THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY);
	// ------------------------------------------------------;
	["User"]: {
	__typename: "User",
	id: number,
	provider: string,
	providerId: string,
	username: string,
	name: string,
	created_at: GraphQLTypes["DateTime"],
	updated_at: GraphQLTypes["DateTime"]
};
	/** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
["DateTime"]:any;
	["meta"]: {
	__typename: "meta",
	id: string,
	created: GraphQLTypes["DateTime"],
	updated_at: GraphQLTypes["DateTime"],
	charset: string,
	description: string,
	noindex: boolean,
	nofollow: boolean,
	viewport: string
};
	["head"]: {
	__typename: "head",
	id: string,
	created: GraphQLTypes["DateTime"],
	updated_at: GraphQLTypes["DateTime"],
	title: string,
	meta: GraphQLTypes["meta"]
};
	["page_body_header"]: {
	__typename: "page_body_header",
	id: string,
	created: GraphQLTypes["DateTime"],
	updated_at: GraphQLTypes["DateTime"],
	type: string
};
	["CommonA"]: {
	__typename: "CommonA",
	id: string,
	created: GraphQLTypes["DateTime"],
	updated_at: GraphQLTypes["DateTime"],
	href: string,
	rel: GraphQLTypes["RelEnum"],
	target: GraphQLTypes["TargetEnum"]
};
	["RelEnum"]: RelEnum;
	["TargetEnum"]: TargetEnum;
	["PageBodyNavigation"]: {
	__typename: "PageBodyNavigation",
	id: string,
	created: GraphQLTypes["DateTime"],
	updated_at: GraphQLTypes["DateTime"],
	title: string,
	items?: Array<GraphQLTypes["CommonA"]>
};
	["CommonAFilter"]: {
		and?: Array<GraphQLTypes["CommonAFilter"]>,
	or?: Array<GraphQLTypes["CommonAFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["IDFilterComparison"]: {
		is?: boolean,
	isNot?: boolean,
	eq?: string,
	neq?: string,
	gt?: string,
	gte?: string,
	lt?: string,
	lte?: string,
	like?: string,
	notLike?: string,
	iLike?: string,
	notILike?: string,
	in?: Array<string>,
	notIn?: Array<string>
};
	["CommonASort"]: {
		field: GraphQLTypes["CommonASortFields"],
	direction: GraphQLTypes["SortDirection"],
	nulls?: GraphQLTypes["SortNulls"]
};
	["CommonASortFields"]: CommonASortFields;
	/** Sort Directions */
["SortDirection"]: SortDirection;
	/** Sort Nulls Options */
["SortNulls"]: SortNulls;
	["sidebar"]: {
	__typename: "sidebar",
	id: string,
	created: GraphQLTypes["DateTime"],
	updated_at: GraphQLTypes["DateTime"],
	title: string
};
	["page_body_footer"]: {
	__typename: "page_body_footer",
	id: string,
	created: GraphQLTypes["DateTime"],
	updated_at: GraphQLTypes["DateTime"],
	type: string
};
	["main"]: {
	__typename: "main",
	id: string,
	created: GraphQLTypes["DateTime"],
	updated_at: GraphQLTypes["DateTime"],
	title: string
};
	["body"]: {
	__typename: "body",
	id: string,
	created: GraphQLTypes["DateTime"],
	updated_at: GraphQLTypes["DateTime"],
	header: GraphQLTypes["HeaderUnion"],
	navigation: GraphQLTypes["PageBodyNavigation"],
	main: GraphQLTypes["main"],
	sidebar: GraphQLTypes["sidebar"],
	footer: GraphQLTypes["FooterUnion"]
};
	["HeaderUnion"]:{
	__typename:"page_body_header_curved" | "page_body_header_skewed"
	['...on page_body_header_curved']: '__union' & GraphQLTypes["page_body_header_curved"];
	['...on page_body_header_skewed']: '__union' & GraphQLTypes["page_body_header_skewed"];
};
	["page_body_header_curved"]: {
	__typename: "page_body_header_curved",
	id: string,
	created: GraphQLTypes["DateTime"],
	updated_at: GraphQLTypes["DateTime"],
	title: string,
	subTitle: string
};
	["page_body_header_skewed"]: {
	__typename: "page_body_header_skewed",
	id: string,
	created: GraphQLTypes["DateTime"],
	updated_at: GraphQLTypes["DateTime"],
	title: string,
	subTitle: string
};
	["FooterUnion"]:{
	__typename:"page_body_footer_extended" | "page_body_footer_simple"
	['...on page_body_footer_extended']: '__union' & GraphQLTypes["page_body_footer_extended"];
	['...on page_body_footer_simple']: '__union' & GraphQLTypes["page_body_footer_simple"];
};
	["page_body_footer_extended"]: {
	__typename: "page_body_footer_extended",
	id: string,
	created: GraphQLTypes["DateTime"],
	updated_at: GraphQLTypes["DateTime"],
	title: string,
	subTitle: string,
	copyright: string
};
	["page_body_footer_simple"]: {
	__typename: "page_body_footer_simple",
	id: string,
	created: GraphQLTypes["DateTime"],
	updated_at: GraphQLTypes["DateTime"],
	title: string,
	subTitle: string,
	copyright: string
};
	["page"]: {
	__typename: "page",
	id: string,
	created: GraphQLTypes["DateTime"],
	updated_at: GraphQLTypes["DateTime"],
	lang: string,
	head: GraphQLTypes["head"],
	body: GraphQLTypes["body"]
};
	["DeleteManyResponse"]: {
	__typename: "DeleteManyResponse",
	/** The number of records deleted. */
	deletedCount: number
};
	["PageDeleteResponse"]: {
	__typename: "PageDeleteResponse",
	id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	lang?: string
};
	["UpdateManyResponse"]: {
	__typename: "UpdateManyResponse",
	/** The number of records updated. */
	updatedCount: number
};
	["pageEdge"]: {
	__typename: "pageEdge",
	/** The node containing the page */
	node: GraphQLTypes["page"],
	/** Cursor for this node. */
	cursor: GraphQLTypes["ConnectionCursor"]
};
	/** Cursor for paging through collections */
["ConnectionCursor"]:any;
	["PageInfo"]: {
	__typename: "PageInfo",
	/** true if paging forward and there are more records. */
	hasNextPage?: boolean,
	/** true if paging backwards and there are more records. */
	hasPreviousPage?: boolean,
	/** The cursor of the first returned record. */
	startCursor?: GraphQLTypes["ConnectionCursor"],
	/** The cursor of the last returned record. */
	endCursor?: GraphQLTypes["ConnectionCursor"]
};
	["PageConnection"]: {
	__typename: "PageConnection",
	/** Paging information */
	pageInfo: GraphQLTypes["PageInfo"],
	/** Array of edges. */
	edges: Array<GraphQLTypes["pageEdge"]>
};
	["pageAggregateGroupBy"]: {
	__typename: "pageAggregateGroupBy",
	id?: string
};
	["pageCountAggregate"]: {
	__typename: "pageCountAggregate",
	id?: number
};
	["pageSumAggregate"]: {
	__typename: "pageSumAggregate",
	id?: number
};
	["pageAvgAggregate"]: {
	__typename: "pageAvgAggregate",
	id?: number
};
	["pageMinAggregate"]: {
	__typename: "pageMinAggregate",
	id?: string
};
	["pageMaxAggregate"]: {
	__typename: "pageMaxAggregate",
	id?: string
};
	["HeadDeleteResponse"]: {
	__typename: "HeadDeleteResponse",
	id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	title?: string
};
	["headEdge"]: {
	__typename: "headEdge",
	/** The node containing the head */
	node: GraphQLTypes["head"],
	/** Cursor for this node. */
	cursor: GraphQLTypes["ConnectionCursor"]
};
	["HeadConnection"]: {
	__typename: "HeadConnection",
	/** Paging information */
	pageInfo: GraphQLTypes["PageInfo"],
	/** Array of edges. */
	edges: Array<GraphQLTypes["headEdge"]>
};
	["headAggregateGroupBy"]: {
	__typename: "headAggregateGroupBy",
	id?: string,
	title?: string
};
	["headCountAggregate"]: {
	__typename: "headCountAggregate",
	id?: number,
	title?: number
};
	["headSumAggregate"]: {
	__typename: "headSumAggregate",
	id?: number
};
	["headAvgAggregate"]: {
	__typename: "headAvgAggregate",
	id?: number
};
	["headMinAggregate"]: {
	__typename: "headMinAggregate",
	id?: string,
	title?: string
};
	["headMaxAggregate"]: {
	__typename: "headMaxAggregate",
	id?: string,
	title?: string
};
	["MetaDeleteResponse"]: {
	__typename: "MetaDeleteResponse",
	id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	charset?: string,
	description?: string,
	noindex?: boolean,
	nofollow?: boolean,
	viewport?: string
};
	["metaEdge"]: {
	__typename: "metaEdge",
	/** The node containing the meta */
	node: GraphQLTypes["meta"],
	/** Cursor for this node. */
	cursor: GraphQLTypes["ConnectionCursor"]
};
	["MetaConnection"]: {
	__typename: "MetaConnection",
	/** Paging information */
	pageInfo: GraphQLTypes["PageInfo"],
	/** Array of edges. */
	edges: Array<GraphQLTypes["metaEdge"]>
};
	["metaAggregateGroupBy"]: {
	__typename: "metaAggregateGroupBy",
	id?: string
};
	["metaCountAggregate"]: {
	__typename: "metaCountAggregate",
	id?: number
};
	["metaSumAggregate"]: {
	__typename: "metaSumAggregate",
	id?: number
};
	["metaAvgAggregate"]: {
	__typename: "metaAvgAggregate",
	id?: number
};
	["metaMinAggregate"]: {
	__typename: "metaMinAggregate",
	id?: string
};
	["metaMaxAggregate"]: {
	__typename: "metaMaxAggregate",
	id?: string
};
	["BodyDeleteResponse"]: {
	__typename: "BodyDeleteResponse",
	id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"]
};
	["bodyEdge"]: {
	__typename: "bodyEdge",
	/** The node containing the body */
	node: GraphQLTypes["body"],
	/** Cursor for this node. */
	cursor: GraphQLTypes["ConnectionCursor"]
};
	["BodyConnection"]: {
	__typename: "BodyConnection",
	/** Paging information */
	pageInfo: GraphQLTypes["PageInfo"],
	/** Array of edges. */
	edges: Array<GraphQLTypes["bodyEdge"]>
};
	["bodyAggregateGroupBy"]: {
	__typename: "bodyAggregateGroupBy",
	id?: string
};
	["bodyCountAggregate"]: {
	__typename: "bodyCountAggregate",
	id?: number
};
	["bodySumAggregate"]: {
	__typename: "bodySumAggregate",
	id?: number
};
	["bodyAvgAggregate"]: {
	__typename: "bodyAvgAggregate",
	id?: number
};
	["bodyMinAggregate"]: {
	__typename: "bodyMinAggregate",
	id?: string
};
	["bodyMaxAggregate"]: {
	__typename: "bodyMaxAggregate",
	id?: string
};
	["Page_body_headerDeleteResponse"]: {
	__typename: "Page_body_headerDeleteResponse",
	id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	type?: string
};
	["page_body_headerEdge"]: {
	__typename: "page_body_headerEdge",
	/** The node containing the page_body_header */
	node: GraphQLTypes["page_body_header"],
	/** Cursor for this node. */
	cursor: GraphQLTypes["ConnectionCursor"]
};
	["Page_body_headerConnection"]: {
	__typename: "Page_body_headerConnection",
	/** Paging information */
	pageInfo: GraphQLTypes["PageInfo"],
	/** Array of edges. */
	edges: Array<GraphQLTypes["page_body_headerEdge"]>
};
	["page_body_headerAggregateGroupBy"]: {
	__typename: "page_body_headerAggregateGroupBy",
	id?: string
};
	["page_body_headerCountAggregate"]: {
	__typename: "page_body_headerCountAggregate",
	id?: number
};
	["page_body_headerSumAggregate"]: {
	__typename: "page_body_headerSumAggregate",
	id?: number
};
	["page_body_headerAvgAggregate"]: {
	__typename: "page_body_headerAvgAggregate",
	id?: number
};
	["page_body_headerMinAggregate"]: {
	__typename: "page_body_headerMinAggregate",
	id?: string
};
	["page_body_headerMaxAggregate"]: {
	__typename: "page_body_headerMaxAggregate",
	id?: string
};
	["Page_body_footerDeleteResponse"]: {
	__typename: "Page_body_footerDeleteResponse",
	id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	type?: string
};
	["page_body_footerEdge"]: {
	__typename: "page_body_footerEdge",
	/** The node containing the page_body_footer */
	node: GraphQLTypes["page_body_footer"],
	/** Cursor for this node. */
	cursor: GraphQLTypes["ConnectionCursor"]
};
	["Page_body_footerConnection"]: {
	__typename: "Page_body_footerConnection",
	/** Paging information */
	pageInfo: GraphQLTypes["PageInfo"],
	/** Array of edges. */
	edges: Array<GraphQLTypes["page_body_footerEdge"]>
};
	["page_body_footerAggregateGroupBy"]: {
	__typename: "page_body_footerAggregateGroupBy",
	id?: string
};
	["page_body_footerCountAggregate"]: {
	__typename: "page_body_footerCountAggregate",
	id?: number
};
	["page_body_footerSumAggregate"]: {
	__typename: "page_body_footerSumAggregate",
	id?: number
};
	["page_body_footerAvgAggregate"]: {
	__typename: "page_body_footerAvgAggregate",
	id?: number
};
	["page_body_footerMinAggregate"]: {
	__typename: "page_body_footerMinAggregate",
	id?: string
};
	["page_body_footerMaxAggregate"]: {
	__typename: "page_body_footerMaxAggregate",
	id?: string
};
	["MainDeleteResponse"]: {
	__typename: "MainDeleteResponse",
	id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	title?: string
};
	["mainEdge"]: {
	__typename: "mainEdge",
	/** The node containing the main */
	node: GraphQLTypes["main"],
	/** Cursor for this node. */
	cursor: GraphQLTypes["ConnectionCursor"]
};
	["MainConnection"]: {
	__typename: "MainConnection",
	/** Paging information */
	pageInfo: GraphQLTypes["PageInfo"],
	/** Array of edges. */
	edges: Array<GraphQLTypes["mainEdge"]>
};
	["mainAggregateGroupBy"]: {
	__typename: "mainAggregateGroupBy",
	id?: string
};
	["mainCountAggregate"]: {
	__typename: "mainCountAggregate",
	id?: number
};
	["mainSumAggregate"]: {
	__typename: "mainSumAggregate",
	id?: number
};
	["mainAvgAggregate"]: {
	__typename: "mainAvgAggregate",
	id?: number
};
	["mainMinAggregate"]: {
	__typename: "mainMinAggregate",
	id?: string
};
	["mainMaxAggregate"]: {
	__typename: "mainMaxAggregate",
	id?: string
};
	["PageBodyNavigationDeleteResponse"]: {
	__typename: "PageBodyNavigationDeleteResponse",
	id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	title?: string
};
	["PageBodyNavigationEdge"]: {
	__typename: "PageBodyNavigationEdge",
	/** The node containing the PageBodyNavigation */
	node: GraphQLTypes["PageBodyNavigation"],
	/** Cursor for this node. */
	cursor: GraphQLTypes["ConnectionCursor"]
};
	["PageBodyNavigationConnection"]: {
	__typename: "PageBodyNavigationConnection",
	/** Paging information */
	pageInfo: GraphQLTypes["PageInfo"],
	/** Array of edges. */
	edges: Array<GraphQLTypes["PageBodyNavigationEdge"]>
};
	["PageBodyNavigationAggregateGroupBy"]: {
	__typename: "PageBodyNavigationAggregateGroupBy",
	id?: string
};
	["PageBodyNavigationCountAggregate"]: {
	__typename: "PageBodyNavigationCountAggregate",
	id?: number
};
	["PageBodyNavigationSumAggregate"]: {
	__typename: "PageBodyNavigationSumAggregate",
	id?: number
};
	["PageBodyNavigationAvgAggregate"]: {
	__typename: "PageBodyNavigationAvgAggregate",
	id?: number
};
	["PageBodyNavigationMinAggregate"]: {
	__typename: "PageBodyNavigationMinAggregate",
	id?: string
};
	["PageBodyNavigationMaxAggregate"]: {
	__typename: "PageBodyNavigationMaxAggregate",
	id?: string
};
	["SidebarDeleteResponse"]: {
	__typename: "SidebarDeleteResponse",
	id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	title?: string
};
	["sidebarEdge"]: {
	__typename: "sidebarEdge",
	/** The node containing the sidebar */
	node: GraphQLTypes["sidebar"],
	/** Cursor for this node. */
	cursor: GraphQLTypes["ConnectionCursor"]
};
	["SidebarConnection"]: {
	__typename: "SidebarConnection",
	/** Paging information */
	pageInfo: GraphQLTypes["PageInfo"],
	/** Array of edges. */
	edges: Array<GraphQLTypes["sidebarEdge"]>
};
	["sidebarAggregateGroupBy"]: {
	__typename: "sidebarAggregateGroupBy",
	id?: string
};
	["sidebarCountAggregate"]: {
	__typename: "sidebarCountAggregate",
	id?: number
};
	["sidebarSumAggregate"]: {
	__typename: "sidebarSumAggregate",
	id?: number
};
	["sidebarAvgAggregate"]: {
	__typename: "sidebarAvgAggregate",
	id?: number
};
	["sidebarMinAggregate"]: {
	__typename: "sidebarMinAggregate",
	id?: string
};
	["sidebarMaxAggregate"]: {
	__typename: "sidebarMaxAggregate",
	id?: string
};
	["CommonADeleteResponse"]: {
	__typename: "CommonADeleteResponse",
	id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	href?: string,
	rel?: GraphQLTypes["RelEnum"],
	target?: GraphQLTypes["TargetEnum"]
};
	["CommonAEdge"]: {
	__typename: "CommonAEdge",
	/** The node containing the CommonA */
	node: GraphQLTypes["CommonA"],
	/** Cursor for this node. */
	cursor: GraphQLTypes["ConnectionCursor"]
};
	["CommonAConnection"]: {
	__typename: "CommonAConnection",
	/** Paging information */
	pageInfo: GraphQLTypes["PageInfo"],
	/** Array of edges. */
	edges: Array<GraphQLTypes["CommonAEdge"]>
};
	["CommonAAggregateGroupBy"]: {
	__typename: "CommonAAggregateGroupBy",
	id?: string
};
	["CommonACountAggregate"]: {
	__typename: "CommonACountAggregate",
	id?: number
};
	["CommonASumAggregate"]: {
	__typename: "CommonASumAggregate",
	id?: number
};
	["CommonAAvgAggregate"]: {
	__typename: "CommonAAvgAggregate",
	id?: number
};
	["CommonAMinAggregate"]: {
	__typename: "CommonAMinAggregate",
	id?: string
};
	["CommonAMaxAggregate"]: {
	__typename: "CommonAMaxAggregate",
	id?: string
};
	["Query"]: {
	__typename: "Query",
	users: Array<GraphQLTypes["User"]>,
	whoAmI: GraphQLTypes["User"],
	page?: GraphQLTypes["page"],
	pages: GraphQLTypes["PageConnection"],
	head?: GraphQLTypes["head"],
	heads: GraphQLTypes["HeadConnection"],
	meta?: GraphQLTypes["meta"],
	metas: GraphQLTypes["MetaConnection"],
	body?: GraphQLTypes["body"],
	bodies: GraphQLTypes["BodyConnection"],
	page_body_header?: GraphQLTypes["page_body_header"],
	page_body_headers: GraphQLTypes["Page_body_headerConnection"],
	page_body_footer?: GraphQLTypes["page_body_footer"],
	page_body_footers: GraphQLTypes["Page_body_footerConnection"],
	main?: GraphQLTypes["main"],
	mains: GraphQLTypes["MainConnection"],
	pageBodyNavigation?: GraphQLTypes["PageBodyNavigation"],
	pageBodyNavigations: GraphQLTypes["PageBodyNavigationConnection"],
	sidebar?: GraphQLTypes["sidebar"],
	sidebars: GraphQLTypes["SidebarConnection"],
	commonA?: GraphQLTypes["CommonA"],
	commonAS: GraphQLTypes["CommonAConnection"]
};
	["CursorPaging"]: {
		/** Paginate before opaque cursor */
	before?: GraphQLTypes["ConnectionCursor"],
	/** Paginate after opaque cursor */
	after?: GraphQLTypes["ConnectionCursor"],
	/** Paginate first */
	first?: number,
	/** Paginate last */
	last?: number
};
	["pageFilter"]: {
		and?: Array<GraphQLTypes["pageFilter"]>,
	or?: Array<GraphQLTypes["pageFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["pageSort"]: {
		field: GraphQLTypes["pageSortFields"],
	direction: GraphQLTypes["SortDirection"],
	nulls?: GraphQLTypes["SortNulls"]
};
	["pageSortFields"]: pageSortFields;
	["headFilter"]: {
		and?: Array<GraphQLTypes["headFilter"]>,
	or?: Array<GraphQLTypes["headFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"],
	title?: GraphQLTypes["StringFieldComparison"]
};
	["StringFieldComparison"]: {
		is?: boolean,
	isNot?: boolean,
	eq?: string,
	neq?: string,
	gt?: string,
	gte?: string,
	lt?: string,
	lte?: string,
	like?: string,
	notLike?: string,
	iLike?: string,
	notILike?: string,
	in?: Array<string>,
	notIn?: Array<string>
};
	["headSort"]: {
		field: GraphQLTypes["headSortFields"],
	direction: GraphQLTypes["SortDirection"],
	nulls?: GraphQLTypes["SortNulls"]
};
	["headSortFields"]: headSortFields;
	["metaFilter"]: {
		and?: Array<GraphQLTypes["metaFilter"]>,
	or?: Array<GraphQLTypes["metaFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["metaSort"]: {
		field: GraphQLTypes["metaSortFields"],
	direction: GraphQLTypes["SortDirection"],
	nulls?: GraphQLTypes["SortNulls"]
};
	["metaSortFields"]: metaSortFields;
	["bodyFilter"]: {
		and?: Array<GraphQLTypes["bodyFilter"]>,
	or?: Array<GraphQLTypes["bodyFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["bodySort"]: {
		field: GraphQLTypes["bodySortFields"],
	direction: GraphQLTypes["SortDirection"],
	nulls?: GraphQLTypes["SortNulls"]
};
	["bodySortFields"]: bodySortFields;
	["page_body_headerFilter"]: {
		and?: Array<GraphQLTypes["page_body_headerFilter"]>,
	or?: Array<GraphQLTypes["page_body_headerFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["page_body_headerSort"]: {
		field: GraphQLTypes["page_body_headerSortFields"],
	direction: GraphQLTypes["SortDirection"],
	nulls?: GraphQLTypes["SortNulls"]
};
	["page_body_headerSortFields"]: page_body_headerSortFields;
	["page_body_footerFilter"]: {
		and?: Array<GraphQLTypes["page_body_footerFilter"]>,
	or?: Array<GraphQLTypes["page_body_footerFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["page_body_footerSort"]: {
		field: GraphQLTypes["page_body_footerSortFields"],
	direction: GraphQLTypes["SortDirection"],
	nulls?: GraphQLTypes["SortNulls"]
};
	["page_body_footerSortFields"]: page_body_footerSortFields;
	["mainFilter"]: {
		and?: Array<GraphQLTypes["mainFilter"]>,
	or?: Array<GraphQLTypes["mainFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["mainSort"]: {
		field: GraphQLTypes["mainSortFields"],
	direction: GraphQLTypes["SortDirection"],
	nulls?: GraphQLTypes["SortNulls"]
};
	["mainSortFields"]: mainSortFields;
	["PageBodyNavigationFilter"]: {
		and?: Array<GraphQLTypes["PageBodyNavigationFilter"]>,
	or?: Array<GraphQLTypes["PageBodyNavigationFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["PageBodyNavigationSort"]: {
		field: GraphQLTypes["PageBodyNavigationSortFields"],
	direction: GraphQLTypes["SortDirection"],
	nulls?: GraphQLTypes["SortNulls"]
};
	["PageBodyNavigationSortFields"]: PageBodyNavigationSortFields;
	["sidebarFilter"]: {
		and?: Array<GraphQLTypes["sidebarFilter"]>,
	or?: Array<GraphQLTypes["sidebarFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["sidebarSort"]: {
		field: GraphQLTypes["sidebarSortFields"],
	direction: GraphQLTypes["SortDirection"],
	nulls?: GraphQLTypes["SortNulls"]
};
	["sidebarSortFields"]: sidebarSortFields;
	["Mutation"]: {
	__typename: "Mutation",
	setHeadOnPage: GraphQLTypes["page"],
	setBodyOnPage: GraphQLTypes["page"],
	createOnePage: GraphQLTypes["page"],
	createManyPages: Array<GraphQLTypes["page"]>,
	updateOnePage: GraphQLTypes["page"],
	updateManyPages: GraphQLTypes["UpdateManyResponse"],
	deleteOnePage: GraphQLTypes["PageDeleteResponse"],
	deleteManyPages: GraphQLTypes["DeleteManyResponse"],
	setMetaOnHead: GraphQLTypes["head"],
	createOneHead: GraphQLTypes["head"],
	createManyHeads: Array<GraphQLTypes["head"]>,
	updateOneHead: GraphQLTypes["head"],
	updateManyHeads: GraphQLTypes["UpdateManyResponse"],
	deleteOneHead: GraphQLTypes["HeadDeleteResponse"],
	deleteManyHeads: GraphQLTypes["DeleteManyResponse"],
	createOneMeta: GraphQLTypes["meta"],
	createManyMetas: Array<GraphQLTypes["meta"]>,
	updateOneMeta: GraphQLTypes["meta"],
	updateManyMetas: GraphQLTypes["UpdateManyResponse"],
	deleteOneMeta: GraphQLTypes["MetaDeleteResponse"],
	deleteManyMetas: GraphQLTypes["DeleteManyResponse"],
	setHeaderOnBody: GraphQLTypes["body"],
	setNavigationOnBody: GraphQLTypes["body"],
	setMainOnBody: GraphQLTypes["body"],
	setSidebarOnBody: GraphQLTypes["body"],
	setFooterOnBody: GraphQLTypes["body"],
	createOneBody: GraphQLTypes["body"],
	createManyBodies: Array<GraphQLTypes["body"]>,
	updateOneBody: GraphQLTypes["body"],
	updateManyBodies: GraphQLTypes["UpdateManyResponse"],
	deleteOneBody: GraphQLTypes["BodyDeleteResponse"],
	deleteManyBodies: GraphQLTypes["DeleteManyResponse"],
	createOnePage_body_header: GraphQLTypes["page_body_header"],
	createManyPage_body_headers: Array<GraphQLTypes["page_body_header"]>,
	updateOnePage_body_header: GraphQLTypes["page_body_header"],
	updateManyPage_body_headers: GraphQLTypes["UpdateManyResponse"],
	deleteOnePage_body_header: GraphQLTypes["Page_body_headerDeleteResponse"],
	deleteManyPage_body_headers: GraphQLTypes["DeleteManyResponse"],
	createOnePage_body_footer: GraphQLTypes["page_body_footer"],
	createManyPage_body_footers: Array<GraphQLTypes["page_body_footer"]>,
	updateOnePage_body_footer: GraphQLTypes["page_body_footer"],
	updateManyPage_body_footers: GraphQLTypes["UpdateManyResponse"],
	deleteOnePage_body_footer: GraphQLTypes["Page_body_footerDeleteResponse"],
	deleteManyPage_body_footers: GraphQLTypes["DeleteManyResponse"],
	createOneMain: GraphQLTypes["main"],
	createManyMains: Array<GraphQLTypes["main"]>,
	updateOneMain: GraphQLTypes["main"],
	updateManyMains: GraphQLTypes["UpdateManyResponse"],
	deleteOneMain: GraphQLTypes["MainDeleteResponse"],
	deleteManyMains: GraphQLTypes["DeleteManyResponse"],
	addItemsToPageBodyNavigation: GraphQLTypes["PageBodyNavigation"],
	setItemsOnPageBodyNavigation: GraphQLTypes["PageBodyNavigation"],
	createOnePageBodyNavigation: GraphQLTypes["PageBodyNavigation"],
	createManyPageBodyNavigations: Array<GraphQLTypes["PageBodyNavigation"]>,
	updateOnePageBodyNavigation: GraphQLTypes["PageBodyNavigation"],
	updateManyPageBodyNavigations: GraphQLTypes["UpdateManyResponse"],
	deleteOnePageBodyNavigation: GraphQLTypes["PageBodyNavigationDeleteResponse"],
	deleteManyPageBodyNavigations: GraphQLTypes["DeleteManyResponse"],
	createOneSidebar: GraphQLTypes["sidebar"],
	createManySidebars: Array<GraphQLTypes["sidebar"]>,
	updateOneSidebar: GraphQLTypes["sidebar"],
	updateManySidebars: GraphQLTypes["UpdateManyResponse"],
	deleteOneSidebar: GraphQLTypes["SidebarDeleteResponse"],
	deleteManySidebars: GraphQLTypes["DeleteManyResponse"],
	createOneCommonA: GraphQLTypes["CommonA"],
	createManyCommonAS: Array<GraphQLTypes["CommonA"]>,
	updateOneCommonA: GraphQLTypes["CommonA"],
	updateManyCommonAS: GraphQLTypes["UpdateManyResponse"],
	deleteOneCommonA: GraphQLTypes["CommonADeleteResponse"],
	deleteManyCommonAS: GraphQLTypes["DeleteManyResponse"]
};
	["SetHeadOnPageInput"]: {
		/** The id of the record. */
	id: string,
	/** The id of relation. */
	relationId: string
};
	["SetBodyOnPageInput"]: {
		/** The id of the record. */
	id: string,
	/** The id of relation. */
	relationId: string
};
	["CreateOnePageInput"]: {
		/** The record to create */
	page: GraphQLTypes["CreatePage"]
};
	["CreatePage"]: {
		id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	lang?: string
};
	["CreateManyPagesInput"]: {
		/** Array of records to create */
	pages: Array<GraphQLTypes["CreatePage"]>
};
	["UpdateOnePageInput"]: {
		/** The id of the record to update */
	id: string,
	/** The update to apply. */
	update: GraphQLTypes["UpdatePage"]
};
	["UpdatePage"]: {
		id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	lang?: string
};
	["UpdateManyPagesInput"]: {
		/** Filter used to find fields to update */
	filter: GraphQLTypes["pageUpdateFilter"],
	/** The update to apply to all records found using the filter */
	update: GraphQLTypes["UpdatePage"]
};
	["pageUpdateFilter"]: {
		and?: Array<GraphQLTypes["pageUpdateFilter"]>,
	or?: Array<GraphQLTypes["pageUpdateFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["DeleteOnePageInput"]: {
		/** The id of the record to delete. */
	id: string
};
	["DeleteManyPagesInput"]: {
		/** Filter to find records to delete */
	filter: GraphQLTypes["pageDeleteFilter"]
};
	["pageDeleteFilter"]: {
		and?: Array<GraphQLTypes["pageDeleteFilter"]>,
	or?: Array<GraphQLTypes["pageDeleteFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["SetMetaOnHeadInput"]: {
		/** The id of the record. */
	id: string,
	/** The id of relation. */
	relationId: string
};
	["CreateOneHeadInput"]: {
		/** The record to create */
	head: GraphQLTypes["CreateHead"]
};
	["CreateHead"]: {
		id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	title?: string
};
	["CreateManyHeadsInput"]: {
		/** Array of records to create */
	heads: Array<GraphQLTypes["CreateHead"]>
};
	["UpdateOneHeadInput"]: {
		/** The id of the record to update */
	id: string,
	/** The update to apply. */
	update: GraphQLTypes["UpdateHead"]
};
	["UpdateHead"]: {
		id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	title?: string
};
	["UpdateManyHeadsInput"]: {
		/** Filter used to find fields to update */
	filter: GraphQLTypes["headUpdateFilter"],
	/** The update to apply to all records found using the filter */
	update: GraphQLTypes["UpdateHead"]
};
	["headUpdateFilter"]: {
		and?: Array<GraphQLTypes["headUpdateFilter"]>,
	or?: Array<GraphQLTypes["headUpdateFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"],
	title?: GraphQLTypes["StringFieldComparison"]
};
	["DeleteOneHeadInput"]: {
		/** The id of the record to delete. */
	id: string
};
	["DeleteManyHeadsInput"]: {
		/** Filter to find records to delete */
	filter: GraphQLTypes["headDeleteFilter"]
};
	["headDeleteFilter"]: {
		and?: Array<GraphQLTypes["headDeleteFilter"]>,
	or?: Array<GraphQLTypes["headDeleteFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"],
	title?: GraphQLTypes["StringFieldComparison"]
};
	["CreateOneMetaInput"]: {
		/** The record to create */
	meta: GraphQLTypes["CreateMeta"]
};
	["CreateMeta"]: {
		id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	charset?: string,
	description?: string,
	noindex?: boolean,
	nofollow?: boolean,
	viewport?: string
};
	["CreateManyMetasInput"]: {
		/** Array of records to create */
	metas: Array<GraphQLTypes["CreateMeta"]>
};
	["UpdateOneMetaInput"]: {
		/** The id of the record to update */
	id: string,
	/** The update to apply. */
	update: GraphQLTypes["UpdateMeta"]
};
	["UpdateMeta"]: {
		id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	charset?: string,
	description?: string,
	noindex?: boolean,
	nofollow?: boolean,
	viewport?: string
};
	["UpdateManyMetasInput"]: {
		/** Filter used to find fields to update */
	filter: GraphQLTypes["metaUpdateFilter"],
	/** The update to apply to all records found using the filter */
	update: GraphQLTypes["UpdateMeta"]
};
	["metaUpdateFilter"]: {
		and?: Array<GraphQLTypes["metaUpdateFilter"]>,
	or?: Array<GraphQLTypes["metaUpdateFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["DeleteOneMetaInput"]: {
		/** The id of the record to delete. */
	id: string
};
	["DeleteManyMetasInput"]: {
		/** Filter to find records to delete */
	filter: GraphQLTypes["metaDeleteFilter"]
};
	["metaDeleteFilter"]: {
		and?: Array<GraphQLTypes["metaDeleteFilter"]>,
	or?: Array<GraphQLTypes["metaDeleteFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["SetHeaderOnBodyInput"]: {
		/** The id of the record. */
	id: string,
	/** The id of relation. */
	relationId: string
};
	["SetNavigationOnBodyInput"]: {
		/** The id of the record. */
	id: string,
	/** The id of relation. */
	relationId: string
};
	["SetMainOnBodyInput"]: {
		/** The id of the record. */
	id: string,
	/** The id of relation. */
	relationId: string
};
	["SetSidebarOnBodyInput"]: {
		/** The id of the record. */
	id: string,
	/** The id of relation. */
	relationId: string
};
	["SetFooterOnBodyInput"]: {
		/** The id of the record. */
	id: string,
	/** The id of relation. */
	relationId: string
};
	["CreateOneBodyInput"]: {
		/** The record to create */
	body: GraphQLTypes["CreateBody"]
};
	["CreateBody"]: {
		id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"]
};
	["CreateManyBodiesInput"]: {
		/** Array of records to create */
	bodies: Array<GraphQLTypes["CreateBody"]>
};
	["UpdateOneBodyInput"]: {
		/** The id of the record to update */
	id: string,
	/** The update to apply. */
	update: GraphQLTypes["UpdateBody"]
};
	["UpdateBody"]: {
		id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"]
};
	["UpdateManyBodiesInput"]: {
		/** Filter used to find fields to update */
	filter: GraphQLTypes["bodyUpdateFilter"],
	/** The update to apply to all records found using the filter */
	update: GraphQLTypes["UpdateBody"]
};
	["bodyUpdateFilter"]: {
		and?: Array<GraphQLTypes["bodyUpdateFilter"]>,
	or?: Array<GraphQLTypes["bodyUpdateFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["DeleteOneBodyInput"]: {
		/** The id of the record to delete. */
	id: string
};
	["DeleteManyBodiesInput"]: {
		/** Filter to find records to delete */
	filter: GraphQLTypes["bodyDeleteFilter"]
};
	["bodyDeleteFilter"]: {
		and?: Array<GraphQLTypes["bodyDeleteFilter"]>,
	or?: Array<GraphQLTypes["bodyDeleteFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["CreateOnePage_body_headerInput"]: {
		/** The record to create */
	page_body_header: GraphQLTypes["CreatePage_body_header"]
};
	["CreatePage_body_header"]: {
		id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	type?: string
};
	["CreateManyPage_body_headersInput"]: {
		/** Array of records to create */
	page_body_headers: Array<GraphQLTypes["CreatePage_body_header"]>
};
	["UpdateOnePage_body_headerInput"]: {
		/** The id of the record to update */
	id: string,
	/** The update to apply. */
	update: GraphQLTypes["UpdatePage_body_header"]
};
	["UpdatePage_body_header"]: {
		id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	type?: string
};
	["UpdateManyPage_body_headersInput"]: {
		/** Filter used to find fields to update */
	filter: GraphQLTypes["page_body_headerUpdateFilter"],
	/** The update to apply to all records found using the filter */
	update: GraphQLTypes["UpdatePage_body_header"]
};
	["page_body_headerUpdateFilter"]: {
		and?: Array<GraphQLTypes["page_body_headerUpdateFilter"]>,
	or?: Array<GraphQLTypes["page_body_headerUpdateFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["DeleteOnePage_body_headerInput"]: {
		/** The id of the record to delete. */
	id: string
};
	["DeleteManyPage_body_headersInput"]: {
		/** Filter to find records to delete */
	filter: GraphQLTypes["page_body_headerDeleteFilter"]
};
	["page_body_headerDeleteFilter"]: {
		and?: Array<GraphQLTypes["page_body_headerDeleteFilter"]>,
	or?: Array<GraphQLTypes["page_body_headerDeleteFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["CreateOnePage_body_footerInput"]: {
		/** The record to create */
	page_body_footer: GraphQLTypes["CreatePage_body_footer"]
};
	["CreatePage_body_footer"]: {
		id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	type?: string
};
	["CreateManyPage_body_footersInput"]: {
		/** Array of records to create */
	page_body_footers: Array<GraphQLTypes["CreatePage_body_footer"]>
};
	["UpdateOnePage_body_footerInput"]: {
		/** The id of the record to update */
	id: string,
	/** The update to apply. */
	update: GraphQLTypes["UpdatePage_body_footer"]
};
	["UpdatePage_body_footer"]: {
		id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	type?: string
};
	["UpdateManyPage_body_footersInput"]: {
		/** Filter used to find fields to update */
	filter: GraphQLTypes["page_body_footerUpdateFilter"],
	/** The update to apply to all records found using the filter */
	update: GraphQLTypes["UpdatePage_body_footer"]
};
	["page_body_footerUpdateFilter"]: {
		and?: Array<GraphQLTypes["page_body_footerUpdateFilter"]>,
	or?: Array<GraphQLTypes["page_body_footerUpdateFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["DeleteOnePage_body_footerInput"]: {
		/** The id of the record to delete. */
	id: string
};
	["DeleteManyPage_body_footersInput"]: {
		/** Filter to find records to delete */
	filter: GraphQLTypes["page_body_footerDeleteFilter"]
};
	["page_body_footerDeleteFilter"]: {
		and?: Array<GraphQLTypes["page_body_footerDeleteFilter"]>,
	or?: Array<GraphQLTypes["page_body_footerDeleteFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["CreateOneMainInput"]: {
		/** The record to create */
	main: GraphQLTypes["CreateMain"]
};
	["CreateMain"]: {
		id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	title?: string
};
	["CreateManyMainsInput"]: {
		/** Array of records to create */
	mains: Array<GraphQLTypes["CreateMain"]>
};
	["UpdateOneMainInput"]: {
		/** The id of the record to update */
	id: string,
	/** The update to apply. */
	update: GraphQLTypes["UpdateMain"]
};
	["UpdateMain"]: {
		id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	title?: string
};
	["UpdateManyMainsInput"]: {
		/** Filter used to find fields to update */
	filter: GraphQLTypes["mainUpdateFilter"],
	/** The update to apply to all records found using the filter */
	update: GraphQLTypes["UpdateMain"]
};
	["mainUpdateFilter"]: {
		and?: Array<GraphQLTypes["mainUpdateFilter"]>,
	or?: Array<GraphQLTypes["mainUpdateFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["DeleteOneMainInput"]: {
		/** The id of the record to delete. */
	id: string
};
	["DeleteManyMainsInput"]: {
		/** Filter to find records to delete */
	filter: GraphQLTypes["mainDeleteFilter"]
};
	["mainDeleteFilter"]: {
		and?: Array<GraphQLTypes["mainDeleteFilter"]>,
	or?: Array<GraphQLTypes["mainDeleteFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["AddItemsToPageBodyNavigationInput"]: {
		/** The id of the record. */
	id: string,
	/** The ids of the relations. */
	relationIds: Array<string>
};
	["SetItemsOnPageBodyNavigationInput"]: {
		/** The id of the record. */
	id: string,
	/** The ids of the relations. */
	relationIds: Array<string>
};
	["CreateOnePageBodyNavigationInput"]: {
		/** The record to create */
	pageBodyNavigation: GraphQLTypes["CreatePageBodyNavigation"]
};
	["CreatePageBodyNavigation"]: {
		id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	title?: string
};
	["CreateManyPageBodyNavigationsInput"]: {
		/** Array of records to create */
	pageBodyNavigations: Array<GraphQLTypes["CreatePageBodyNavigation"]>
};
	["UpdateOnePageBodyNavigationInput"]: {
		/** The id of the record to update */
	id: string,
	/** The update to apply. */
	update: GraphQLTypes["UpdatePageBodyNavigation"]
};
	["UpdatePageBodyNavigation"]: {
		id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	title?: string
};
	["UpdateManyPageBodyNavigationsInput"]: {
		/** Filter used to find fields to update */
	filter: GraphQLTypes["PageBodyNavigationUpdateFilter"],
	/** The update to apply to all records found using the filter */
	update: GraphQLTypes["UpdatePageBodyNavigation"]
};
	["PageBodyNavigationUpdateFilter"]: {
		and?: Array<GraphQLTypes["PageBodyNavigationUpdateFilter"]>,
	or?: Array<GraphQLTypes["PageBodyNavigationUpdateFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["DeleteOnePageBodyNavigationInput"]: {
		/** The id of the record to delete. */
	id: string
};
	["DeleteManyPageBodyNavigationsInput"]: {
		/** Filter to find records to delete */
	filter: GraphQLTypes["PageBodyNavigationDeleteFilter"]
};
	["PageBodyNavigationDeleteFilter"]: {
		and?: Array<GraphQLTypes["PageBodyNavigationDeleteFilter"]>,
	or?: Array<GraphQLTypes["PageBodyNavigationDeleteFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["CreateOneSidebarInput"]: {
		/** The record to create */
	sidebar: GraphQLTypes["CreateSidebar"]
};
	["CreateSidebar"]: {
		id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	title?: string
};
	["CreateManySidebarsInput"]: {
		/** Array of records to create */
	sidebars: Array<GraphQLTypes["CreateSidebar"]>
};
	["UpdateOneSidebarInput"]: {
		/** The id of the record to update */
	id: string,
	/** The update to apply. */
	update: GraphQLTypes["UpdateSidebar"]
};
	["UpdateSidebar"]: {
		id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	title?: string
};
	["UpdateManySidebarsInput"]: {
		/** Filter used to find fields to update */
	filter: GraphQLTypes["sidebarUpdateFilter"],
	/** The update to apply to all records found using the filter */
	update: GraphQLTypes["UpdateSidebar"]
};
	["sidebarUpdateFilter"]: {
		and?: Array<GraphQLTypes["sidebarUpdateFilter"]>,
	or?: Array<GraphQLTypes["sidebarUpdateFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["DeleteOneSidebarInput"]: {
		/** The id of the record to delete. */
	id: string
};
	["DeleteManySidebarsInput"]: {
		/** Filter to find records to delete */
	filter: GraphQLTypes["sidebarDeleteFilter"]
};
	["sidebarDeleteFilter"]: {
		and?: Array<GraphQLTypes["sidebarDeleteFilter"]>,
	or?: Array<GraphQLTypes["sidebarDeleteFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["CreateOneCommonAInput"]: {
		/** The record to create */
	commonA: GraphQLTypes["CreateCommonA"]
};
	["CreateCommonA"]: {
		id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	href?: string,
	rel?: GraphQLTypes["RelEnum"],
	target?: GraphQLTypes["TargetEnum"]
};
	["CreateManyCommonASInput"]: {
		/** Array of records to create */
	commonAS: Array<GraphQLTypes["CreateCommonA"]>
};
	["UpdateOneCommonAInput"]: {
		/** The id of the record to update */
	id: string,
	/** The update to apply. */
	update: GraphQLTypes["UpdateCommonA"]
};
	["UpdateCommonA"]: {
		id?: string,
	created?: GraphQLTypes["DateTime"],
	updated_at?: GraphQLTypes["DateTime"],
	href?: string,
	rel?: GraphQLTypes["RelEnum"],
	target?: GraphQLTypes["TargetEnum"]
};
	["UpdateManyCommonASInput"]: {
		/** Filter used to find fields to update */
	filter: GraphQLTypes["CommonAUpdateFilter"],
	/** The update to apply to all records found using the filter */
	update: GraphQLTypes["UpdateCommonA"]
};
	["CommonAUpdateFilter"]: {
		and?: Array<GraphQLTypes["CommonAUpdateFilter"]>,
	or?: Array<GraphQLTypes["CommonAUpdateFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
};
	["DeleteOneCommonAInput"]: {
		/** The id of the record to delete. */
	id: string
};
	["DeleteManyCommonASInput"]: {
		/** Filter to find records to delete */
	filter: GraphQLTypes["CommonADeleteFilter"]
};
	["CommonADeleteFilter"]: {
		and?: Array<GraphQLTypes["CommonADeleteFilter"]>,
	or?: Array<GraphQLTypes["CommonADeleteFilter"]>,
	id?: GraphQLTypes["IDFilterComparison"]
}
    }
export const enum RelEnum {
	ALTERNATE = "ALTERNATE",
	AUTHOR = "AUTHOR",
	BOOKMARK = "BOOKMARK",
	EXTERNAL = "EXTERNAL",
	HELP = "HELP",
	LICENSE = "LICENSE",
	NEXT = "NEXT",
	NOFOLLOW = "NOFOLLOW",
	NOREFERRER = "NOREFERRER",
	NOOPENER = "NOOPENER",
	PREV = "PREV",
	SEARCH = "SEARCH",
	TAG = "TAG"
}
export const enum TargetEnum {
	BLANK = "BLANK",
	PARENT = "PARENT",
	SELF = "SELF",
	TOP = "TOP"
}
export const enum CommonASortFields {
	id = "id"
}
/** Sort Directions */
export const enum SortDirection {
	ASC = "ASC",
	DESC = "DESC"
}
/** Sort Nulls Options */
export const enum SortNulls {
	NULLS_FIRST = "NULLS_FIRST",
	NULLS_LAST = "NULLS_LAST"
}
export const enum pageSortFields {
	id = "id"
}
export const enum headSortFields {
	id = "id",
	title = "title"
}
export const enum metaSortFields {
	id = "id"
}
export const enum bodySortFields {
	id = "id"
}
export const enum page_body_headerSortFields {
	id = "id"
}
export const enum page_body_footerSortFields {
	id = "id"
}
export const enum mainSortFields {
	id = "id"
}
export const enum PageBodyNavigationSortFields {
	id = "id"
}
export const enum sidebarSortFields {
	id = "id"
}
export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }


export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<
  UnwrapPromise<ReturnType<T>>
>;
export type ZeusHook<
  T extends (
    ...args: any[]
  ) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>
> = ZeusState<ReturnType<T>[N]>;

type WithTypeNameValue<T> = T & {
  __typename?: boolean;
};
type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};
export interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
type DeepAnify<T> = {
  [P in keyof T]?: any;
};
type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
type IsArray<T, U> = T extends Array<infer R> ? InputType<R, U>[] : InputType<T, U>;
type FlattenArray<T> = T extends Array<infer R> ? R : T;

type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS
  ? {
      [P in keyof SRC]: SRC[P] extends '__union' & infer R
        ? P extends keyof DST
          ? IsArray<R, '__typename' extends keyof DST ? DST[P] & { __typename: true } : DST[P]>
          : {}
        : never;
    }[keyof DST] &
      {
        [P in keyof Omit<
          Pick<
            SRC,
            {
              [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
            }[keyof DST]
          >,
          '__typename'
        >]: IsPayLoad<DST[P]> extends boolean ? SRC[P] : IsArray<SRC[P], DST[P]>;
      }
  : {
      [P in keyof Pick<SRC, keyof DST>]: IsPayLoad<DST[P]> extends boolean ? SRC[P] : IsArray<SRC[P], DST[P]>;
    };

export type MapType<SRC, DST> = SRC extends DeepAnify<DST> ? IsInterfaced<SRC, DST> : never;
export type InputType<SRC, DST> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P]>;
    } &
      MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>>
  : MapType<SRC, IsPayLoad<DST>>;
type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;
export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
export type OperationOptions = {
  variables?: Record<string, any>;
  operationName?: string;
};
export type SubscriptionToGraphQL<Z, T> = {
  ws: WebSocket;
  on: (fn: (args: InputType<T, Z>) => void) => void;
  off: (fn: (e: { data?: InputType<T, Z>; code?: number; reason?: string; message?: string }) => void) => void;
  error: (fn: (e: { data?: InputType<T, Z>; errors?: string[] }) => void) => void;
  open: () => void;
};
export type SelectionFunction<V> = <T>(t: T | V) => T;
export type fetchOptions = ArgsType<typeof fetch>;
type websocketOptions = typeof WebSocket extends new (
  ...args: infer R
) => WebSocket
  ? R
  : never;
export type chainOptions =
  | [fetchOptions[0], fetchOptions[1] & {websocket?: websocketOptions}]
  | [fetchOptions[0]];
export type FetchFunction = (
  query: string,
  variables?: Record<string, any>,
) => Promise<any>;
export type SubscriptionFunction = (query: string) => any;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `${JSON.stringify(value)}`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};


export const TypesPropsResolver = ({
    value,
    type,
    name,
    key,
    blockArrays
}: {
    value: any;
    type: string;
    name: string;
    key?: string;
    blockArrays?: boolean;
}): string => {
    if (value === null) {
        return `null`;
    }
    let resolvedValue = AllTypesProps[type][name];
    if (key) {
        resolvedValue = resolvedValue[key];
    }
    if (!resolvedValue) {
        throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
    }
    const typeResolved = resolvedValue.type;
    const isArray = resolvedValue.array;
    const isArrayRequired = resolvedValue.arrayRequired;
    if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
        const isRequired = resolvedValue.required ? '!' : '';
        let t = `${typeResolved}`;
        if (isArray) {
          if (isRequired) {
              t = `${t}!`;
          }
          t = `[${t}]`;
          if(isArrayRequired){
            t = `${t}!`;
          }
        }else{
          if (isRequired) {
                t = `${t}!`;
          }
        }
        return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${t}`;
    }
    if (isArray && !blockArrays) {
        return `[${value
        .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
        .join(',')}]`;
    }
    const reslovedScalar = ScalarResolver(typeResolved, value);
    if (!reslovedScalar) {
        const resolvedType = AllTypesProps[typeResolved];
        if (typeof resolvedType === 'object') {
        const argsKeys = Object.keys(resolvedType);
        return `{${argsKeys
            .filter((ak) => value[ak] !== undefined)
            .map(
            (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
            )}}`;
        }
        return ScalarResolver(AllTypesProps[typeResolved], value) as string;
    }
    return reslovedScalar;
};


const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values).filter((k) => typeof values[k] !== 'undefined');

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};


const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;


const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;


const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a)
        .filter((k) => typeof a[k] !== 'undefined')
        .forEach((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).forEach((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};  


const buildQuery = (type: string, a?: Record<any, any>) => 
  traverseToSeekArrays([type], a);


const inspectVariables = (query: string) => {
  const regex = /\$\b\w*__ZEUS_VAR__\[?[^!^\]^\s^,^\)^\}]*[!]?[\]]?[!]?/g;
  let result;
  const AllVariables: string[] = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
    }
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};


export const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string, operationName?: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${operationName ? ' ' + operationName : ''}${inspectVariables(buildQuery(tName, o))}`;
  

export const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  options?: OperationOptions,
) => fn(queryConstruct(t, tName, options?.operationName)(o), options?.variables).then((r:any) => { 
  seekForAliases(r)
  return r
});


export const fullSubscriptionConstruct = (fn: SubscriptionFunction) => (
  t: 'query' | 'mutation' | 'subscription',
  tName: string,
) => (o: Record<any, any>, options?: OperationOptions) =>
  fn(queryConstruct(t, tName, options?.operationName)(o));


const seekForAliases = (response: any) => {
  const traverseAlias = (value: any) => {
    if (Array.isArray(value)) {
      value.forEach(seekForAliases);
    } else {
      if (typeof value === 'object') {
        seekForAliases(value);
      }
    }
  };
  if (typeof response === 'object' && response) {
    const keys = Object.keys(response);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = response[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        response[alias] = {
          [operation]: value,
        };
        delete response[k];
      }
      traverseAlias(value);
    });
  }
};


export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


export const resolverFor = <
  X,
  T extends keyof ValueTypes,
  Z extends keyof ValueTypes[T],
>(
  type: T,
  field: Z,
  fn: (
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> | X : any,
) => fn as (args?: any,source?: any) => any;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

export const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  };
  

export const apiSubscription = (options: chainOptions) => (
    query: string,
  ) => {
    try {
      const queryString = options[0] + '?query=' + encodeURIComponent(query);
      const wsString = queryString.replace('http', 'ws');
      const host = (options.length > 1 && options[1]?.websocket?.[0]) || wsString;
      const webSocketOptions = options[1]?.websocket || [host];
      const ws = new WebSocket(...webSocketOptions);
      return {
        ws,
        on: (e: (args: any) => void) => {
          ws.onmessage = (event:any) => {
            if(event.data){
              const parsed = JSON.parse(event.data)
              const data = parsed.data
              if (data) {
                seekForAliases(data);
              }
              return e(data);
            }
          };
        },
        off: (e: (args: any) => void) => {
          ws.onclose = e;
        },
        error: (e: (args: any) => void) => {
          ws.onerror = e;
        },
        open: (e: () => void) => {
          ws.onopen = e;
        },
      };
    } catch {
      throw new Error('No websockets implemented');
    }
  };



const allOperations = {
    "query": "Query",
    "mutation": "Mutation"
}

export type GenericOperation<O> = O extends 'query'
  ? "Query"
  : O extends 'mutation'
  ? "Mutation"
  : never

export const Thunder = (fn: FetchFunction) => <
  O extends 'query' | 'mutation',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
) => <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions) =>
  fullChainConstruct(fn)(operation, allOperations[operation])(o as any, ops) as Promise<InputType<GraphQLTypes[R], Z>>;

export const Chain = (...options: chainOptions) => Thunder(apiFetch(options));  
  
export const SubscriptionThunder = (fn: SubscriptionFunction) => <
  O extends 'query' | 'mutation',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
) => <Z extends ValueTypes[R]>(
  o: Z | ValueTypes[R],
  ops?: OperationOptions
)=>
  fullSubscriptionConstruct(fn)(operation, allOperations[operation])(
    o as any,
    ops,
  ) as SubscriptionToGraphQL<Z, GraphQLTypes[R]>;

export const Subscription = (...options: chainOptions) => SubscriptionThunder(apiSubscription(options));
export const Zeus = <
  Z extends ValueTypes[R],
  O extends 'query' | 'mutation',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
  o: Z | ValueTypes[R],
  operationName?: string,
) => queryConstruct(operation, allOperations[operation], operationName)(o as any);
export const Selector = <T extends keyof ValueTypes>(key: T) => ZeusSelect<ValueTypes[T]>();
  