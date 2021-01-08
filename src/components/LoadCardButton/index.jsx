import { ContainerLoadButton, LoadButton } from "./styles";
export default function LoadCardButton({ onClick }) {
  return (
    <>
      <ContainerLoadButton>
        <LoadButton onClick={onClick}>Carregar</LoadButton>
      </ContainerLoadButton>
    </>
  );
}
