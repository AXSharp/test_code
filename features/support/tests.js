import { NavigationTest } from "../testobjects/NavigationTest.js";
import { LoginTest } from'../testobjects/loginTest.js';
import {SignUpTest} from "../testobjects/signupTest.js"
class Tests {
  constructor() {
    this.navigationTest = new NavigationTest();
    this.logintest = new LoginTest();
    this.SignUpTest = new SignUpTest();
  }
}

export const tests = new Tests();
