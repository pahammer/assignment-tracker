import styled from "styled-components/macro";

export const Container = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 10px;
  height: auto;

  img {
    width: 20%;
  }
`;

export const Heading = styled.h1`
  font-size: 20px;
  font-weight: 300;
  color: #5a5c69;
`;
