import React from 'react';
import { NextPage } from 'next';
import { withUrqlClient } from 'next-urql';
import { useQuery, gql } from 'urql';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

const PAGE_QUERY = gql`
  query Page($id: ID!) {
	page(id: $id) {
    lang
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
    body {
      header {
        ... on page_body_header_curved {
          title
          subTitle
        }
        ... on page_body_header_skewed {
          title
          subTitle
        }
      }
      navigation {
        items {
          href
          rel
          target
        }
      }
      footer {
        ... on page_body_footer_extended {
          title
          subTitle
          copyright
        }
        ... on page_body_footer_simple {
          title
          subTitle
          copyright
        }
      }
    }
  }
}
`;

const Index: NextPage<{ data: string }> = (props) => {
  const { data } = props;
  const [res] = useQuery({ query: PAGE_QUERY, variables: { id: 1 } });

  return (
    <>
      <NextSeo
        title={res.data.page.head.title}
        description={res.data.page.head.meta.description}
        nofollow={res.data.page.head.meta.nofollow}
        noindex={res.data.page.head.meta.noindex}
        additionalMetaTags={[{
          name: 'viewport',
          content: res.data.page.head.meta.viewport
        }]}
      />
      <Head>
        <meta charSet={res.data.page.head.meta.charset} />
        <html lang={res.data.page.lang} />
      </Head>

      <header>{res.data.page.body.header.type}</header>
      <h1>Hello from NextJS! - Home</h1>
      {data}
      <pre>{JSON.stringify(res.data.page.body, null, 4)}</pre>
    </>
  );
};

Index.getInitialProps = ({ query }) => {
  return {
    data: `some initial props including query params and controller data: ${JSON.stringify(
      query,
    )}`,
  };
};

export default withUrqlClient(
  () => ({
    url: typeof window === 'undefined' ? 'http://web:3000/graphql' : 'http://localhost:3000',
  }),
  { ssr: true },
)(Index);
