import styled from "styled-components";

export const ContainerCard = styled.div`
  position: relative;
  width: 450px;
  height: 220px;
  border: 1.5px solid black;
`;

export const ContainerPosition = styled.div`
  position: relative;
  width: 50%;
  height: 90%;
`;

export const EncompassingTheContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
`;
export const ContainerCharacterName = styled.div`
  background-color: #f2edf2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  border: 1px solid #3331;
  width: 95%;
  height: 30px;
`;

export const ImageCard = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const TextCharacterName = styled.label`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: bold;
`;