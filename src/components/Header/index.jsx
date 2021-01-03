import "./styles";
import marvel from "../../assets/marvel.png";
import {
  ContainerHeader,
  ContainerImageHeader,
  ImageHeader,
  SearchContainer,
  InputSearch,
} from "./styles";

export default function Header({ onChange }) {
  return (
    <>
      <ContainerHeader>
        <ContainerImageHeader>
          <ImageHeader src={marvel} alt="Logo Marvel" />
        </ContainerImageHeader>
        <SearchContainer>
          <div>
            <InputSearch
              type="search"
              name="search"
              placeholder="Digite o personagem.."
              onChange={(event) => onChange(event.target.value)}
            />
          </div>
        </SearchContainer>
      </ContainerHeader>
    </>
  );
}
