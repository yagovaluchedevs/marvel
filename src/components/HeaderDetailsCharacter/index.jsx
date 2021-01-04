import {
  ContainerHeaderDetails,
  ContainerPositionImage,
  ImageHeader,
} from "./styles";

import marvel from "../../assets/marvel.png";

export default function HeaderDetailsCharacter({ onClick }) {
  return (
    <>
      <ContainerHeaderDetails>
        <ContainerPositionImage>
          <ImageHeader
            onClick={onClick}
            src={marvel}
            alt="imagem da logo marvel"
          />
        </ContainerPositionImage>
      </ContainerHeaderDetails>
    </>
  );
}
