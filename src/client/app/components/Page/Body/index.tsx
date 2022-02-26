import dynamic from 'next/dynamic';

const ComponetList = {
  PageBodyHeaderCurved: dynamic(() => import('./Header/Curved').then((mod) => mod.Curved)),
  PageBodyNavigation: dynamic(() => import('./Navigation').then((mod) => mod.Navigation)),
  PageBodyMain: dynamic(() => import('./Main').then((mod) => mod.Main)),
  PageBodyFooterExtended: dynamic(() => import('./Footer/Extended').then((mod) => mod.Extended)),
}

export const Body = (props) => {
  return (
    <>
      {Object.keys(props).map((key: string) => (
        <div key={key}>
          {props[key].__typename === 'PageBodyHeaderCurved' && <ComponetList.PageBodyHeaderCurved { ...props[key] } />}
          {props[key].__typename === 'PageBodyNavigation' && <ComponetList.PageBodyNavigation { ...props[key] } />}
          {props[key].__typename === 'PageBodyMain' && <ComponetList.PageBodyMain { ...props[key] } />}
          {props[key].__typename === 'PageBodyFooterExtended' && <ComponetList.PageBodyFooterExtended { ...props[key] } />}
        </div>
      ))}
    </>
  );
};
