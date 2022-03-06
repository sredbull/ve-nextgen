import { ExtendedFragment } from "../../../../../graphql/sdk";

export const Extended = (props: ExtendedFragment) => {
  return (
    <footer>
      <hr />
      <p>{props.title}</p>
      <small>{props.subTitle}</small>
      <p>{props.copyright}</p>
    </footer>
  );
}

export default Extended;
