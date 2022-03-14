import MarkdownToJsx from 'markdown-to-jsx';
import { MarkdownFragment } from '../../../../../../graphql/sdk';

export const Markdown = (props: MarkdownFragment) => {
  return (
    <article>
      <header>
        <h2>{props.title}</h2>
        <p>{props.subTitle}</p>
      </header>
      <MarkdownToJsx>{props.markdown}</MarkdownToJsx>
    </article>
  );
};

export default Markdown;
