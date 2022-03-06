import dynamic from 'next/dynamic';
import { BodyFragment } from '../../../graphql/sdk'

const ComponetList = {
  HeaderCurved: dynamic(() => import('./Header/Curved')),
  Navigation: dynamic(() => import('./Navigation')),
  Main: dynamic(() => import('./Main')),
  FooterExtended: dynamic(() => import('./Footer/Extended')),
}

export const Body = (props: BodyFragment['body']) => {
  return (
    <>
      {Object.keys(props).map((key) => (
        <>
          {props[key].__typename === 'PageBodyHeaderCurved' && <ComponetList.HeaderCurved { ...props[key] } key={key} />}
          {props[key].__typename === 'PageBodyNavigation' && <ComponetList.Navigation { ...props[key] } key={key} />}
          {props[key].__typename === 'PageBodyMain' && <ComponetList.Main { ...props[key] } key={key} />}
          {props[key].__typename === 'PageBodyFooterExtended' && <ComponetList.FooterExtended { ...props[key] } key={key} />}
        </>
      ))}
    </>
  );
};
