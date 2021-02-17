import styled from "styled-components/macro";

export const Container = styled.div`
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 50%;
  height: auto;
  padding: 10px;
`;

export const Button = styled.button`
  margin: 5px;
  min-width: 100px;
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: ${({ isSelected, colour }) =>
    isSelected === false ? "#fff" : colour};
  color: ${({ isSelected }) => (isSelected === false ? "#5a5c69" : "white")};
  border-width: 0;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.5s ease;
`;
