import CharacterDetails from "../../components/CharacterDetails";
import HeaderDetailsCharacter from "../../components/HeaderDetailsCharacter";
import { useHistory } from "react-router-dom";
import "../../components/ResetStyles/styles.css";
export default function AboutTheCharacter() {
  const history = useHistory("");
  function redirectHome() {
    return history.push("/");
  }
  return (
    <>
      <section>
        <HeaderDetailsCharacter onClick={() => redirectHome()} />
        <CharacterDetails />
      </section>
    </>
  );
}
