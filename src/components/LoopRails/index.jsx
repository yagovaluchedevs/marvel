import { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import { ImageRails } from "./styles";
import { ApiRequisitionComics } from "../../services/ApiRequisition";

export default function LopRails({ id }) {
  const [outcome, setOutcome] = useState([]);
  useEffect(() => {
    try {
      async function responseDataComics() {
        const response = await ApiRequisitionComics(id);
        setOutcome(response);
      }
      responseDataComics();
    } catch (error) {
      return error;
    }
  }, [id]);

  return (
    <>
      <div>
        <Carousel>
          {outcome.map((res, index) => {
            if (!res.images[0]) {
              return false;
            }
            return (
              <ImageRails
                key={index}
                src={res.images[0].path + "." + res.images[0].extension}
                alt="#"
              />
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
