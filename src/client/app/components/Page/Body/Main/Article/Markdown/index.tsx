import { MarkdownFragment } from "../../../../../../graphql/sdk";

export const Markdown = (props: MarkdownFragment) => {
  return (
    <>
      <pre>{JSON.stringify(props, null, 4)}</pre>
    </>
  );
}

export default Markdown;
