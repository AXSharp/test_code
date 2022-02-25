import { Given, When, Then } from "@wdio/cucumber-framework";
import { tests } from "../support/tests.js";

When("User inputs {word} as the email", async function (email) {
  await tests.logintest.fillEmailField(email);
});

When("User inputs {word} as the password", async function (password) {
  await tests.logintest.fillPasswordField(password);
});

Then("User sees invalid credentials message", async function () {
  await tests.logintest.assertInvalidCredentialsMessage();
  //await tests.logintest.lightHousePerformanceCheck();
});
