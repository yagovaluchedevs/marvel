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
import Loading from "../Loading";

export default function CharacterDetails() {
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    try {
      const character = async () => {
        setLoading(true);

        const response = await getCharacterById(id);

        setLoading(false);
        setResult(response);

        return response;
      };
      character();
    } catch (error) {
      return error;
    }
  }, [id]);

  if (loading === true) {
    return <Loading />;
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
