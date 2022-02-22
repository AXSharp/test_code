import {pages} from '../support/pages.js'
export class NavigationTest {
  async openOraclePage() {
    await browser.url('/');
    await pages.BasePage.getCreateButton().waitForDisplayed({timeout: 5000});
  }

  async pressSignInButton(){
      await pages.BasePage.getsigninButton().click()
      await browser.pause(5000)
  }
}

