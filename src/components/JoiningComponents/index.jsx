import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ApiRequisition from "../../services/ApiRequisition";
import CardComponent from "../CardComponent";
import Header from "../Header";
import LoadCardButton from "../LoadCardButton";
import { CointainerCards } from "./styles";

export default function JoiningComponents() {
  const history = useHistory("");
  const [result, setResult] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState(1);
  const [characterByCall, setCharacterByCall] = useState(2);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    async function awaitRequest() {
      const awaitRequestData = await ApiRequisition();
      setResult(awaitRequestData.results);
      setLimit(awaitRequestData.limit);
    }
    awaitRequest();
  }, []);

  function filteringByName(character) {
    const filterCardByName = result.filter(({ name }) => {
      for (let typing = "", i = 0; i < character.length; i++) {
        typing += name[i];

        if (typing === character) {
          return name;
        }
      }
    });

    setResult(filterCardByName);
  }

  function redirectById(id) {
    history.push(`/detalhe-do-personagem/${id}`);
  }

  const lastCharacterIndex = currentCharacter * characterByCall;
  const firstCharacterIndex = lastCharacterIndex - characterByCall;
  const characterBeingDisplayed = result.slice(
    firstCharacterIndex,
    lastCharacterIndex
  );

  function addNewCharacters() {
    return setCharacterByCall(characterByCall + 2);
  }

  return (
    <>
      <Header onChange={(event) => filteringByName(event)} />

      <CointainerCards>
        {characterBeingDisplayed.map(({ id, name, thumbnail }, index) => {
          const srcImage = thumbnail.path + "." + thumbnail.extension;
          return (
            <CardComponent
              key={index}
              characterImage={srcImage}
              characterName={name}
              onClick={() => redirectById(id)}
            />
          );
        })}
        {characterByCall < limit ? (
          <LoadCardButton onClick={() => addNewCharacters()} />
        ) : (
          false
        )}
      </CointainerCards>
    </>
  );
}
