import {
  ContainerCard,
  ImageCard,
  ContainerPosition,
  EncompassingTheContainer,
  ContainerCharacterName,
  TextCharacterName,
} from "./styles";

export default function CardComponent({
  characterImage,
  characterName,
  onClick,
}) {
  return (
    <>
      <ContainerCard onClick={onClick}>
        <ImageCard src={characterImage} alt="character Image" />

        <ContainerPosition>
          <EncompassingTheContainer>
            <ContainerCharacterName>
              <TextCharacterName>{characterName}</TextCharacterName>
            </ContainerCharacterName>
          </EncompassingTheContainer>
        </ContainerPosition>
      </ContainerCard>
    </>
  );
}
