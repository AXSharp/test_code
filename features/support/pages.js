import { BasePage } from "../pageobjects/basePage.js";
import {AccPage} from "../pageobjects/createAccPage.js"
import {CheckEmailPage} from "../pageobjects/checkEmailPage.js"

class Pages {
  constructor() {
    this.BasePage = new BasePage();
    this.AccPage = new AccPage();
    this.checkEmailPage = new CheckEmailPage();
  }
}

export const pages = new Pages();
