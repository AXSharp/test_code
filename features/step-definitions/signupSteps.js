import { Given, When, Then } from "@wdio/cucumber-framework";
import { tests } from "../support/tests.js";

When("User fills out create account form", async function () {
  await tests.SignUpTest.fillOutCreateAccForm();
});
