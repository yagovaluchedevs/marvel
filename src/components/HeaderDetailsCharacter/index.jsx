import {
  ContainerHeaderDetails,
  ContainerPositionImage,
  ImageHeader,
} from "./styles";
import marvel from "../../assets/marvel.png";

export default function HeaderDetailsCharacter() {
  return (
    <>
      <ContainerHeaderDetails>
        <ContainerPositionImage>
          <ImageHeader src={marvel} alt="imagem da logo marvel" />
        </ContainerPositionImage>
      </ContainerHeaderDetails>
    </>
  );
}
