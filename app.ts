"use strict";
import express, { Application } from "express";
import ProcessErrorHandler from "./startup/process-error-handler";
import error from "./middleware/error";
import Production from "./startup/production";

class App {
  public app: Application;
  constructor() {
    this.app = express();
    this.start();
  }
  private start(): void {
    new ProcessErrorHandler(this.app);
    //logs
    //db ? optional

    //controller
    require("./controllers")(this.app);

    //config configurables
    require("./startup/config")(this.app);
    this.app.use(error);
    if (this.app.get("env") === "production") new Production(this.app);
  }
}
export default new App().app;
