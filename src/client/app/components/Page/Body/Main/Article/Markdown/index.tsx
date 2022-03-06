import MarkdownToJsx from 'markdown-to-jsx';
import { MarkdownFragment } from "../../../../../../graphql/sdk";

export const Markdown = (props: MarkdownFragment) => {
  return (
    <article>
      <header>
        <h1>{props.title}</h1>
      </header>
      <h2>{props.subTitle}</h2>
      <MarkdownToJsx>{props.markdown}</MarkdownToJsx>
    </article>
  );
}

export default Markdown;
