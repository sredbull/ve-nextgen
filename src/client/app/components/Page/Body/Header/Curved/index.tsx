import { CurvedFragment } from '../../../../../graphql/sdk'

export const Curved = (props: CurvedFragment) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <p>{ props.subTitle }</p>
    </header>
  );
}

export default Curved
