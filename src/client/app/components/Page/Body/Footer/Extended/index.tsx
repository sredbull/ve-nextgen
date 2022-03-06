import { ExtendedFragment } from "../../../../../graphql/sdk";

export const Extended = (props: ExtendedFragment) => {
  return (
    <>
      <pre>{JSON.stringify(props, null, 4)}</pre>
    </>
  );
}

export default Extended;
