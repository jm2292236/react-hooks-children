import React from "react";
import Container from "./Container";
import NewContainer from "./NewContainer";

function App() {
  return (
    <div className="App">
      <Container header="Example header!" direction="horizontal" textPosition="right">
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
      </Container>

      <Container header="Example header" textPosition="left" contentPosition="left" direction="vertical">
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
      </Container>

      <Container header="Header with one children...">
          <h3>This a an h3 Element as a children of this container</h3>
      </Container>

      <Container header="Only a header! - No children..."/>

      <NewContainer>
          <p>Is this a children?</p>
      </NewContainer>
    </div>

  );
}

export default App;
