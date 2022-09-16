import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TodosController } from "./Controllers/TodosController.js";

class App {
  todosController = new TodosController();
  imagesController = new ImagesController();
  quotesController = new QuotesController();
}

window["app"] = new App();
