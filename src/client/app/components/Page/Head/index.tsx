import { NextSeo } from 'next-seo';
import { default as NextHead } from 'next/head';

export const Head = (props) => {
  return (
    <>
      <NextSeo
      title={props.head.title}
      description={props.head.meta.description}
      nofollow={props.head.meta.nofollow}
      noindex={props.head.meta.noindex}
      additionalMetaTags={[{
        name: 'viewport',
        content: props.head.meta.viewport
      }]}
      />
      <NextHead>
        <meta charSet={props.head.meta.charset} />
      </NextHead>
    </>
  );
}
