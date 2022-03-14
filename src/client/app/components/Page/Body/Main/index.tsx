import { MainFragment } from '../../../../graphql/sdk';
import Article from './Article';

export const Main = (props: MainFragment['main']) => {
  return (
    <main className="container max-w-7xl">
      <Article {...props.articles} />
    </main>
  );
};

export default Main;
