import dynamic from 'next/dynamic';
import { BodyFragment } from '../../../graphql/sdk';

const Components = {
  HeaderCurved: dynamic(() => import('./Header/Curved')),
  Navigation: dynamic(() => import('./Navigation')),
  Main: dynamic(() => import('./Main')),
  FooterExtended: dynamic(() => import('./Footer/Extended')),
};

export const Body = (props: BodyFragment['body']) => {
  const components = Object.keys(props).map((key, index) => {
    switch (props[key].__typename) {
      case 'PageBodyHeaderCurved':
        return <Components.HeaderCurved {...props[key]} key={index} />;
      case 'PageBodyNavigation':
        return <Components.Navigation {...props[key]} key={index} />;
      case 'PageBodyMain':
        return <Components.Main {...props[key]} key={index} />;
      case 'PageBodyFooterExtended':
        return <Components.FooterExtended {...props[key]} key={index} />;
    }
  });

  return <>{components}</>;
};
