import { NavigationFragment } from '../../../../graphql/sdk';

export const Navigation = (props: NavigationFragment['navigation']) => {
  return (
    <>
      <pre>{JSON.stringify(props, null, 4)}</pre>
    </>
  );
};

export default Navigation;
