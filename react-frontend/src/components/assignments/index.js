import React from "react";

import { Container, Box, Date, AssignmentName } from "./styles/assignments";

export default function Assignments({ assignments }) {
  return (
    <Container>
      {assignments.map((assign, i) => (
        <Box key={i} Colour={assign.colour}>
          <Date>
            Due {assign.countdown} | {assign.time}
          </Date>
          <AssignmentName>{assign.name}</AssignmentName>
          <Date>{assign.course}</Date>
        </Box>
      ))}
    </Container>
  );
}
