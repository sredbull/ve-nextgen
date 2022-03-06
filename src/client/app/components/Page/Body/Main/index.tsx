import { MainFragment } from "../../../../graphql/sdk";

export const Main = (props: MainFragment['main']) => {
  return (
    <>
      <pre>{JSON.stringify(props, null, 4)}</pre>
    </>
  );
}

export default Main;
