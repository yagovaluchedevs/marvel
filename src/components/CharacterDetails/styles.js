import styled from "styled-components";

export const ContainerDetailsCharacters = styled.section`
  display: flex;
  justify-content: center;
`;

export const CharacterStorageContainer = styled.div`
  width: 600px;
  height: 350px;
  display: flex;
`;
export const ContainerImageCharacter = styled.div`
  display: flex;
  align-items: center;
`;

export const CharactersImage = styled.img`
  width: 300px;
  height: 250px;
  object-fit: fill;
`;

export const CharacterDescriptionContainer = styled.div`
  margin-left: 10px;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.label`
  color: red;
  font-size: 15px;
  padding-bottom: 2px;
`;

export const DescriptionLabel = styled.label`
  font-size: 14px;
  color: black;
  padding-bottom: 4px;
`;
