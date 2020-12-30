import { ContainerCard, ImageCard } from "./styles";
import marvel from "../../assets/marvel.png";

export default function CardComponent({ characterImage, characterName }) {
  return (
    <>
      <ContainerCard>
        <ImageCard src={marvel} alt="character Image" />

        <div>
          <label>{characterName}</label>
        </div>
      </ContainerCard>
    </>
  );
}
