import { BasePage } from "../pageobjects/basePage.js";

class Pages {
  constructor() {
    this.BasePage = new BasePage();
  }
}

export const pages = new Pages();
