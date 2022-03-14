import { ExtendedFragment } from '../../../../../graphql/sdk';

export const Extended = (props: ExtendedFragment) => {
  return (
    <footer className="footer footer-center p-4 bg-primary">
      <div>
        <p className="text-secondary">
          {props.title}
          <small className="text-secondary">&nbsp;{props.subTitle}</small>
        </p>
        <p className="text-secondary">{props.copyright}</p>
      </div>
    </footer>
  );
};

export default Extended;
