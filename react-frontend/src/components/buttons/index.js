import React from "react";

import { Container, Button } from "./styles/buttons";

export default function Buttons({ classes, handleSelect }) {
  return (
    <Container>
      {classes.map((classObj, i) => (
        <Button
          key={i}
          id={i}
          onClick={handleSelect}
          isSelected={classObj.isSelected}
          colour={classObj.colour}
        >
          {classObj.name}
        </Button>
      ))}
    </Container>
  );
}
