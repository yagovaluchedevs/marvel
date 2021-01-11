import styled from "styled-components";
export const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  height: 50px;
  background-color: black;
`;

export const ContainerImageHeader = styled.div`
  width: 55%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 750px) {
    width: 45%;
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
  }
`;

export const ImageHeader = styled.img`
  width: 100px;
  height: 35px;
`;

export const SearchContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const InputSearch = styled.input`
  background: url("https://raw.githubusercontent.com/teddiur/marvel-characters/493aecb675ad86a1accb7591c4de7b3ac2e499ce/src/assets/logo/search.svg")
    no-repeat center right;
  background-size: 18px;
  transform: skew(-15deg);
  border: none;
  width: 20px;
  height: 30px;
  transition: all 0.5s linear;
  &:focus {
    width: 200px;
    border-bottom: 1px solid #1b1e20;
    outline: none;
    &::placeholder {
      font-family: Arial, Helvetica, sans-serif;
      color: red;
    }
  }
  &::placeholder {
    color: transparent;
  }
`;
