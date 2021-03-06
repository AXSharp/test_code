import { Given, When, Then } from "@wdio/cucumber-framework";
import { tests } from "../support/tests.js";

Given("User has opened Oracle login page", async function () {
  await tests.navigationTest.openOraclePage();
});

When("User presses sign in button", async function () {
  await tests.navigationTest.pressSignInButton();
});

When("User presses the create account button", async function () {
  await tests.navigationTest.pressCreatteAccBtn();
});

When("User presses sign up button", async function () {
  await tests.navigationTest.pressProceedBtn();
});

Then("User is redirected to Check your email page", async function () {
  console.log("User is redirected to Check your email page");
});
