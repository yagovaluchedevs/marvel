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
  const [characterByCall, setCharacterByCall] = useState(2);
  const [limitCharacter, setLimitCharacter] = useState(0);
  const currentCharacter = 1;

  useEffect(() => {
    async function awaitRequest() {
      const awaitRequestData = await ApiRequisition();
      setResult(awaitRequestData.results);
      setLimitCharacter(awaitRequestData.limit);
    }
    awaitRequest();
  }, []);

  function filteringByName(character) {
    const filterCardByName = characterBeingDisplayed.filter(({ name }) => {
      for (let typing = "", i = 0; i < character.length; i++) {
        typing += name[i];

        if (typing === character) {
          return true;
        }
      }
      return false;
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

  function loadNewCharacters() {
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
        {characterByCall < limitCharacter ? (
          <LoadCardButton onClick={() => loadNewCharacters()} />
        ) : (
          false
        )}
      </CointainerCards>
    </>
  );
}
