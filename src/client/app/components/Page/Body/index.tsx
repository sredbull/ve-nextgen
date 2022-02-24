export const Body = (props) => {
  return (
    <>
      <pre>{JSON.stringify(props, null, 4)}</pre>
    </>
  );
}
