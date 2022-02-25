import { pages } from "../support/pages.js";
export class NavigationTest {
  async openOraclePage() {
    await browser.url("/");
    await pages.BasePage.getCreateButton().waitForDisplayed({ timeout: 3000 });
  }

  async pressSignInButton() {
    await pages.BasePage.getsigninButton().click();
  }

  async pressCreatteAccBtn() {
    await pages.BasePage.getCreateButton().click();
    await browser.pause(2000);
    await browser.switchWindow("Oracle | Create Account");
  }
  async pressProceedBtn() {
    await pages.AccPage.getProceedBtn().click();
    await browser.pause(4000);
  }
}
