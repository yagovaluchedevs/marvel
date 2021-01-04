import styled from "styled-components";

export const ContainerHeaderDetails = styled.header`
  background-color: black;
  height: 50px;
  @media (max-width: 320px) {
    width: 105%;
  }
`;

export const ContainerPositionImage = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageHeader = styled.img`
  width: 100px;
  height: 35px;
  &:hover {
    cursor: pointer;
  }
`;
