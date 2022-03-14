import { CurvedFragment } from '../../../../../graphql/sdk';

export const Curved = (props: CurvedFragment) => {
  return (
    <header className="container h-36 mb-4">
      <div className="px-6 bg-primary h-full w-full rounded-bl-3xl rounded-br-3xl">
        <h1 className="text-secondary">{props.title}</h1>
        <p className="text-secondary">{props.subTitle}</p>
      </div>
    </header>
  );
};

export default Curved;
