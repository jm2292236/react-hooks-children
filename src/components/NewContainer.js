function NewContainer(props) {
  return (
    <div>
        <h1>Is this header a children of this div?</h1>
        {props.children}
        <p>How many children? [{props.children.length}]</p>
    </div>
  );
}

export default NewContainer;
