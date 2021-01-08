import styled from "styled-components";

export const LoadButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: white;
  transform: skew(-15deg);
  border: 1px solid red;
  font-size: 15px;
  color: red;
  background-color: #1b1e20;
  position: fixed;
  &:hover {
    cursor: pointer;
    color: #1b1e20;
    border-color: #1b1e20;
    background-color: red;
    font-weight: bold;
    transition: 0.5s ease-in-out;
  }
`;