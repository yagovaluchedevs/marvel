import { MD5 } from "../../md5";
import axios from "axios";

async function ApiRequisition() {
  try {
    const date = new Date();
    const timeStamp = date.getTime();
    const privateKey = "58099b87ab90d571e077c6776aeb543299bc9153";
    const publicKey = "a84c44c7b0d90ee4de0b3b73fd36c1c8";
    const md5 = MD5(timeStamp + privateKey + publicKey);
    const api = axios.create({
      baseURL: "https://gateway.marvel.com:443",
    });
    const response = await api.get(
      `/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${md5}`
    );
    return response.data.data.results;
  } catch (err) {
    return "error";
  }
}
export default ApiRequisition;
