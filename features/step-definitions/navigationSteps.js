import { Given, When, Then } from '@wdio/cucumber-framework';
import{ tests } from '../support/tests.js';

Given("User has opened Oracle login page", async function() {
    await tests.navigationTest.openOraclePage();
});

When("User presses sign in button", async function() {
    await tests.navigationTest.pressSignInButton();
});
