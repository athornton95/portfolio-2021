const Container = (props) => (
  <div className="container mx-auto px-6 lg:px-40 relative flex flex-col">
    {props.children}
  </div>
);

export default Container;
