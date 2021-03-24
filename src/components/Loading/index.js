import { ContainerLoading, ImageLoading } from "./styles";
import ironMan from "../../assets/homem-de-ferro.png";
import "../ResetStyles/styles";

export default function Loading() {
  return (
    <>
      <ContainerLoading>
        <ImageLoading src={ironMan} />
      </ContainerLoading>
    </>
  );
}
