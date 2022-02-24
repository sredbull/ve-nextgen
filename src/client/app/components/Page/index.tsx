import { Head } from './Head';
import { Body } from './Body';
import { usePageQuery } from '../../graphql/sdk'

export const Page = () => {
  const [res] = usePageQuery({ variables: { id: '1' } });

  return (
    <>
      <Head { ...res.data.page } />
      <Body { ...res.data.page.body } />
    </>
  );
}
