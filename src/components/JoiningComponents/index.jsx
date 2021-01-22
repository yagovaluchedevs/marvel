import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import getCharacters from "../../services/ApiRequisition";
import CardComponent from "../CardComponent";
import Header from "../Header";
import LoadCardButton from "../LoadCardButton";
import { CointainerCards } from "./styles";

export default function JoiningComponents() {
  const history = useHistory("");
  const [result, setResult] = useState([]);
  const [characterByCall, setCharacterByCall] = useState(6);
  const [limitCharacter, setLimitCharacter] = useState(0);
  const currentCharacter = 1;
  useEffect(() => {
    let mounted = true;

    async function awaitRequest() {
      const awaitRequestData = await getCharacters(characterByCall);

      if (mounted) {
        setResult([...result, ...awaitRequestData.results]);
        setLimitCharacter(awaitRequestData.limit);
      }
    }

    awaitRequest();
    return () => {
      mounted = false;
    };
  }, [characterByCall]); //eslint-disable-line

  function filteringByName(character) {
    const filterCardByName = result.filter(({ name }) => {
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
    setCharacterByCall(characterByCall + 6);
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
