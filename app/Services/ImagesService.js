import { appState } from "../AppState.js";
import { Image } from "../Models/Image.js";
import { BcwServer } from "./AxiosService.js";

class ImagesService {
  async getImage() {
    const res = await BcwServer.get("/images/");
    console.log("getImage", res.data);
    appState.image = new Image(res.data);
  }
  //
}
export const imagesService = new ImagesService();
