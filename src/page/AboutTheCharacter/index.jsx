import CharacterDetails from "../../components/CharacterDetails";
import "../../components/ResetStyles/styles.css";
export default function AboutTheCharacter() {
  return (
    <>
      <div>
        <CharacterDetails />
        {/* não esquecer que o name e description está branco e por isso não exibirá */}
      </div>
    </>
  );
}
