import { getCharacterById } from "../../services/ApiRequisition";
import LoopRails from "../../components/LoopRails";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ContainerDetailsCharacters,
  CharacterStorageContainer,
  CharactersImage,
  ContainerImageCharacter,
  CharacterDescriptionContainer,
  Label,
  DescriptionName,
  DescriptionLabel,
  ContainerLoop,
} from "./styles";

export default function CharacterDetails() {
  const [result, setResult] = useState({});
  const { id } = useParams();
  try {
    useEffect(() => {
      const character = async () => {
        const response = await getCharacterById(id);
        setResult(response);
        return response;
      };
      character();
    }, [id]);
  } catch (error) {
    return error;
  }

  const { name, description, thumbnail } = result;
  if (!thumbnail) {
    return false;
  }
  const srcImage = thumbnail.path + "." + thumbnail.extension;

  return (
    <>
      <ContainerDetailsCharacters>
        <div>
          <CharacterStorageContainer>
            <ContainerImageCharacter>
              <CharactersImage src={srcImage} alt="Imagem do personagem" />
            </ContainerImageCharacter>
            <CharacterDescriptionContainer>
              <Label>NAME</Label>
              <DescriptionName>{name}</DescriptionName>
              <Label>DESCRIPTION</Label>
              <DescriptionLabel>{description}</DescriptionLabel>
            </CharacterDescriptionContainer>
          </CharacterStorageContainer>
        </div>
      </ContainerDetailsCharacters>
      <ContainerLoop>
        <div>
          <LoopRails id={id} />
        </div>
      </ContainerLoop>
    </>
  );
}
