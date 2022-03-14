import dynamic from 'next/dynamic';
import { ArticleFragment } from '../../../../../graphql/sdk';

const Components = {
  Markdown: dynamic(() => import('./Markdown')),
};

export const Article = (props: ArticleFragment['articles']) => {
  const articles = Object.values(props).map((article, index) => {
    switch (article.__typename) {
      case 'PageBodyMainArticleMarkdown':
        return <Components.Markdown {...article} key={index} />;
    }
  });

  return <>{articles}</>;
};

export default Article;
