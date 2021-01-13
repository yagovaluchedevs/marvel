import { MD5 } from "../../md5";
import axios from "axios";

async function getCharacters(offset) {
  try {
    const date = new Date();
    const timeStamp = date.getTime();
    const privateKey = process.env.REACT_APP_PRIVATE_KEY_API;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY_API;
    const md5 = MD5(timeStamp + privateKey + publicKey);

    const api = axios.create({
      baseURL: "https://gateway.marvel.com:443",
    });

    const response = await api.get(
      `/v1/public/characters?offset=${offset}&limit=100&ts=${timeStamp}&apikey=${publicKey}&hash=${md5}`
    );
    return response.data.data;
  } catch (err) {
    return "error";
  }
}
export default getCharacters;

export async function getCharacterById(identifier) {
  const character = await getCharacters();
  const getCharactersById = character.results.find(
    ({ id }) => id.toString() === identifier
  );
  return getCharactersById;
}

export async function ApiRequisitionComics(id) {
  try {
    const date = new Date();
    const timeStamp = date.getTime();
    const privateKey = process.env.REACT_APP_PRIVATE_KEY_API;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY_API;
    const md5 = MD5(timeStamp + privateKey + publicKey);

    const api = axios.create({
      baseURL: "https://gateway.marvel.com:443",
    });
    const response = await api.get(
      `/v1/public/characters/${id}/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${md5}`
    );
    return response.data.data.results;
  } catch (error) {
    return error;
  }
}
