import { pages } from "../support/pages.js";
export class LoginTest {
  async fillEmailField(email) {
    await pages.BasePage.getEmailImputField().setValue(email);
  }

  async fillPasswordField(password) {
    await pages.BasePage.getPasswordImputField().setValue(password);
  }
  async assertInvalidCredentialsMessage() {
    await pages.BasePage.getInvalidCredentialMessage().waitForDisplayed({
      timeout: 1000,
    });
    expect(
      await pages.BasePage.getInvalidCredentialMessage().getText())
      .toEqual("Invalid username and/or password.");
  }
}
