import CharacterDetails from "../../components/CharacterDetails";
import HeaderDetailsCharacter from "../../components/HeaderDetailsCharacter";
import { useHistory } from "react-router-dom";
import { CreateGlobal } from "../../components/ResetStyles/styles";
export default function AboutTheCharacter() {
  const history = useHistory("");
  function redirectHome() {
    return history.push("/");
  }
  return (
    <>
      <CreateGlobal />
      <HeaderDetailsCharacter onClick={() => redirectHome()} />
      <CharacterDetails />
    </>
  );
}
