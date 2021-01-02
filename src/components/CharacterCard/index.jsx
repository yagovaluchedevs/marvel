import { useEffect, useState } from "react";
import ApiRequisition from "../../services/ApiRequisition";
import CardComponent from "../CardComponent";

export default function CharacterCard() {
  const [result, setResult] = useState(false);

  useEffect(() => {
    async function awaitRequest() {
      const awaitRequestData = await ApiRequisition();
      setResult(awaitRequestData);
    }
    awaitRequest();
  }, []);
  console.log(result);

  if (result == false) {
    return (
      <>
        <h1>Carregando..</h1>
      </>
    )
  }else {
      return (
        <>
            <div>
              {result.map(({name}) => {
                <li>{name.name}</li>
              })}
            </div>
        </>
  }

}
