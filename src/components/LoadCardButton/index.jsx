import { LoadButton } from "./styles";
export default function LoadCardButton({ disabled, onClick }) {
  return (
    <>
      <LoadButton disabled={disabled} onClick={onClick}>
        Carregar
      </LoadButton>
    </>
  );
}
