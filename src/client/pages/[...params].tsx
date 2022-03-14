import React from 'react';
import { NextPage } from 'next';
import { withUrqlClient } from 'next-urql';
import { Page } from '../app/components/Page';

const Index: NextPage = () => {
  return <Page />;
};

export default withUrqlClient(
  () => ({
    url:
      typeof window === 'undefined'
        ? process.env.INTERNAL_URL + '/graphql'
        : process.env.EXTERNAL_URL + '/graphql',
  }),
  { ssr: true },
)(Index);
