import styled from "styled-components";

export const ContainerDetailsCharacters = styled.section`
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  div {
    @media (max-width: 600px) {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
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
  object-fit: cover;
`;

export const CharacterDescriptionContainer = styled.div`
  margin-left: 10px;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 600px) {
    margin-top: 15px;
  }
`;

export const Label = styled.label`
  color: red;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 2px;
  @media (max-width: 750px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const DescriptionLabel = styled.label`
  font-size: 18px;
  color: white;
  padding-bottom: 4px;
  @media (max-width: 750px) {
    font-size: 17px;
    margin-top: 5px;
  }
`;
export const DescriptionName = styled(DescriptionLabel)`
  @media (max-width: 750px) {
    text-align: center;
  }
`;

export const ContainerLoop = styled.footer`
  @media (max-width: 750px) {
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    div {
      width: 358px;
      display: flex;
      justify-content: space-between;
    }
  }
`;
