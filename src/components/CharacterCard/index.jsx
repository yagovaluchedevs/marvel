import { useEffect, useState } from "react";
import ApiRequisition from "../../services/ApiRequisition";

export default function CharacterCard() {
  const [result, setResult] = useState();

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
      <div className="cardPerson">
        {/* <img src="" alt="character image" /> */}
        {/* <div className="labelName">

        </div> */}
      </div>
    </>
  );
}
