import { ContainerLoading, ImageLoading } from "./styles";
import "../ResetStyles/styles";
import ironMan from "../../assets/spiderman.png";

export default function Loading() {
  return (
    <>
      <ContainerLoading>
        <ImageLoading src={ironMan} />
      </ContainerLoading>
    </>
  );
}
