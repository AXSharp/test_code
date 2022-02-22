import { NavigationTest } from "../testobjects/NavigationTest.js";
import { LoginTest } from'../testobjects/loginTest.js';
class Tests {
  constructor() {
    this.navigationTest = new NavigationTest();
    this.logintest = new LoginTest();
  }
}

export const tests = new Tests();
