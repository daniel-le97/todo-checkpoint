import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TimesController } from "./Controllers/TimesController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { WeathersController } from "./Controllers/WeathersController.js";

class App {
  todosController = new TodosController();
  imagesController = new ImagesController();
  quotesController = new QuotesController();
  timesController = new TimesController();
  weathersController = new WeathersController()
}

window["app"] = new App();
