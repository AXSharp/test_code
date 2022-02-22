import { Given, When, Then } from "@wdio/cucumber-framework";
import { tests } from "../support/tests.js";

When("User inputs wrong email", async function () {
  await tests.logintest.fillEmailField("asdaf@gmail.com");
});

When("User inputs wrong password", async function () {
  await tests.logintest.fillPasswordField("sdbsdkjablsadkjv");
});

Then("User sees invalid credentials message", async function () {
  await tests.logintest.assertInvalidCredentialsMessage();
});
