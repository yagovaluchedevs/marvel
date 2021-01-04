import { getCharacterById } from "../../services/ApiRequisition";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ContainerDetailsCharacters,
  CharacterStorageContainer,
  CharactersImage,
  ContainerImageCharacter,
  CharacterDescriptionContainer,
  Label,
  DescriptionLabel,
} from "./styles";

export default function CharacterDetails({ i }) {
  const [result, setResult] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const character = async () => {
      const response = await getCharacterById(id);
      setResult(response);
      return response;
    };
    character();
  }, []);

  const { name, description, thumbnail } = result;
  console.log(result);
  // const srcImage = thumbnail.path + "." + thumbnail.extension;

  return (
    <>
      <ContainerDetailsCharacters>
        <CharacterStorageContainer>
          <ContainerImageCharacter>
            <CharactersImage src={i} alt="Imagem do personagem" />
          </ContainerImageCharacter>
          <CharacterDescriptionContainer>
            <Label>NAME</Label>
            <DescriptionLabel>{name}</DescriptionLabel>
            <Label>DESCRIPTION</Label>
            <DescriptionLabel>{description}</DescriptionLabel>
          </CharacterDescriptionContainer>
        </CharacterStorageContainer>
      </ContainerDetailsCharacters>
    </>
  );
}
