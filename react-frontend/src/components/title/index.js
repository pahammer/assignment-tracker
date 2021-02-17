import React from "react";

import { Container, MainHeading, SubHeading } from "./styles/title";

export default function Title({ title, subtitle, ...restProps }) {
  return (
    <Container {...restProps}>
      <MainHeading>{title}</MainHeading>
      <SubHeading>{subtitle}</SubHeading>
    </Container>
  );
}
