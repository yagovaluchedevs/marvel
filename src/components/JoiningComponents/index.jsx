import { useEffect, useState } from "react";
import { CointainerCards } from "./styles";
import ApiRequisition from "../../services/ApiRequisition";
import CardComponent from "../CardComponent";
import Header from "../Header";
import { useHistory } from "react-router-dom";

export default function JoiningComponents() {
  const history = useHistory("");
  const [result, setResult] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(0);

  useEffect(() => {
    async function awaitRequest() {
      setLoading(true);
      const awaitRequestData = await ApiRequisition();
      setResult(awaitRequestData.results);
      setLoading(false);
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
  return (
    <>
      <Header onChange={(event) => filteringByName(event)} />

      <CointainerCards>
        {result.map(({ id, name, thumbnail }, index) => {
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
      </CointainerCards>
    </>
  );
}
