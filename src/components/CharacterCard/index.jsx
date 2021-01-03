import { useEffect, useState } from "react";
import ApiRequisition from "../../services/ApiRequisition";
import CardComponent from "../CardComponent";

export default function CharacterCard() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function awaitRequest() {
      const awaitRequestData = await ApiRequisition();
      setResult(awaitRequestData);
    }
    awaitRequest();
  }, []);
  console.log(result);

  return (
    <>
      {result.map(({ id, name, thumbnail }) => {
        const srcImage = thumbnail.path + "." + thumbnail.extension;
        return (
          <CardComponent
            key={id}
            characterImage={srcImage}
            characterName={name}
          />
        );
      })}
    </>
  );
}
