import React from 'react';
import { NextPage } from 'next';
import { withUrqlClient } from 'next-urql';
import { Page } from '../app/components/Page';

const Index: NextPage<{ data: string }> = (props) => {
  const { data } = props;

  return (
    <Page />
  );
};

Index.getInitialProps = ({ query }) => {
  return { data: JSON.stringify(query) };
};

export default withUrqlClient(
  () => ({
    url: typeof window === 'undefined' ? 'http://web:3000/graphql' : 'http://localhost:3000',
  }),
  { ssr: true },
)(Index);
