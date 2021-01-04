import CharacterDetails from "../../components/CharacterDetails";
import { ContainerPage } from "./styles";
import "../../components/ResetStyles/styles.css";
import HeaderDetailsCharacter from "../../components/HeaderDetailsCharacter";
export default function AboutTheCharacter() {
  return (
    <>
      <ContainerPage>
        <HeaderDetailsCharacter />
        <CharacterDetails />
        {/* não esquecer que o name e description está branco e por isso não exibirá */}
      </ContainerPage>
    </>
  );
}
