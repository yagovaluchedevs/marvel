import { ContainerLoading, ImageLoading } from "./styles";
import "../ResetStyles/styles";
import ironMan from "../../assets/homem-de-ferro.png";

export default function Loading() {
  return (
    <>
      <ContainerLoading>
        <ImageLoading src={ironMan} />
      </ContainerLoading>
    </>
  );
}
