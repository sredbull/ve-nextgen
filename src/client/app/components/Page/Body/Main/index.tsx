import { MainFragment } from "../../../../graphql/sdk";
import Article from './Article'

export const Main = (props: MainFragment['main']) => {
  return (
    <>
      <Article { ...props.articles } />
    </>
  );
}

export default Main;
