import styled from "styled-components";

export const ContainerCard = styled.div`
  position: relative;
  width: 50%;
  height: 400px;
  border: 1.5px solid black;
  @media (max-width: 600px) {
    width: 100%;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const ContainerPosition = styled.div`
  position: relative;
  width: 50%;
  height: 90%;
  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const EncompassingTheContainer = styled.div`
  height: 100%;
  width: 150%;
  display: flex;
  align-items: flex-end;
  @media (max-width: 750px) {
    width: 75%;
  }
`;

export const ImageCard = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContainerCharacterName = styled.div`
  position: relative;
  background-color: #f2edf2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  border: 1px solid #3331;
  width: 100%;
  height: 30px;
  transform: skew(-15deg);
`;

export const TextCharacterName = styled.label`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: bold;
`;
