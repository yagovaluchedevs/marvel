import { ContainerLoading, ImageLoading } from "./styles";
import "../ResetStyles/styles";
import ironMan from "../../assets/homem-de-ferro.png";
import Header from "../Header";

export default function Loading() {
  return (
    <>
      <Header />
      <ContainerLoading>
        <ImageLoading src={ironMan} />
      </ContainerLoading>
    </>
  );
}
