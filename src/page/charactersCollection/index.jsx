import Header from "../../components/Header";
import CharacterCard from "../../components/CharacterCard";
import { GaleryCard } from "./styles";
import { useState } from "react";

export default function CharactersColletion() {
  const [CharacterName, setCharacterName] = useState([]);
  return (
    <>
      <Header onChange={(event) => setCharacterName(event)} />
      <GaleryCard>
        <CharacterCard />
      </GaleryCard>
    </>
  );
  //   Filtrar os cards conforme valor digitado
}
