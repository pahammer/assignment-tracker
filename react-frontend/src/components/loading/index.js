import React from "react";

import { Container, Heading } from "./styles/loading";

export default function Loading({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <img
        src="https://media.giphy.com/media/5AtXMjjrTMwvK/giphy.gif"
        alt="loading"
      ></img>
      {children}
    </Container>
  );
}

Loading.Heading = function LoadingHeading({ heading, ...restProps }) {
  return <Heading {...restProps}>{heading}</Heading>;
};
