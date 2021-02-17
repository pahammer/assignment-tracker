import styled from "styled-components/macro";

export const Container = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 70%;
  height: auto;
  padding: 30px;
`;

export const Box = styled.div`
  min-width: 500px;
  min-height: 100px;
  margin: 10px;
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #fff;
  border-radius: 5px;
  color: #5a5c69;
  ${({ Colour }) => Colour && `border-left: 5px solid ${Colour}`};

  @media (max-width: 700px) {
    min-width: 350px;
  }
  @media (max-width: 500px) {
    min-width: 300px;
  }
  @media (max-width: 350px) {
    min-width: 250px;
  }
`;

export const Date = styled.h1`
  font-size: 18px;
  font-weight: 300;
  padding-top: 5px;
  color: #5a5c69;

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;

export const AssignmentName = styled.h1`
  font-size: 30px;
  color: #5a5c69;

  @media (max-width: 700px) {
    font-size: 25px;
  }
  @media (max-width: 500px) {
    font-size: 22px;
  }
`;
