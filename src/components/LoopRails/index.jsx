import { useEffect, useState } from "react";
import { ImageRails, ContainerCarousel } from "./styles";
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
        <ContainerCarousel
          showArrows={false}
          focusOnSelect={true}
          enableAutoPlay={true}
          autoPlaySpeed={10000}
        >
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
        </ContainerCarousel>
      </div>
    </>
  );
}
