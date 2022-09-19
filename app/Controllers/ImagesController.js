import { appState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";
import { Pop } from "../Utils/Pop.js";
import { setText } from "../Utils/Writer.js";

function _drawImage() {
  let picture = appState.image;
  document.querySelector("main").style.backgroundImage = `url(${picture.url})`;
  setText('image-author', picture.author + ',' + picture.tags)
}

export class ImagesController {
  constructor() {
    this.getImage();
    appState.on("image", _drawImage);
  }
  async getImage() {
    try {
      await imagesService.getImage();
    } catch (error) {
      console.error("[]", error);
      Pop.error(error);
    }
  }
}
