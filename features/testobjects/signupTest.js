import { pages } from "../support/pages.js";
import { data } from "../support/data.js";

export class SignUpTest {
  async fillOutCreateAccForm() {
    if (await pages.AccPage.getCookieFrame().isDisplayed({ timeout: 5000 })) {
      await browser.switchToFrame(await pages.AccPage.getCookieFrame());
      await pages.AccPage.getAcceptCookiesBtn().click();
      // await browser.switchToFrame(null);
    }

    await pages.AccPage.getInputField("email").setValue(
      await data.userData.oracleUser.email
    );
    await pages.AccPage.getInputField("password").setValue(
      await data.userData.oracleUser.password
    );
    await pages.AccPage.setDropdownValue(
      "country",
      await data.userData.oracleUser.country
    );
    await pages.AccPage.setDropdownValue(
      "state",
      await data.userData.oracleUser.state
    );
    await pages.AccPage.getInputField("firstName").setValue(
      await data.userData.oracleUser.firstName
    );
    await pages.AccPage.getInputField("lastName").setValue(
      await data.userData.oracleUser.lastName
    );
    await pages.AccPage.getInputField("lastName").setValue(
      await data.userData.oracleUser.lastName
    );
    await pages.AccPage.getInputField("jobTitle").setValue(
      await data.userData.oracleUser.jobTitle
    );
    await pages.AccPage.getInputField("workPhone").setValue(
      await data.userData.oracleUser.phone
    );
    await pages.AccPage.getInputField("retypePassword").setValue(
      await data.userData.oracleUser.password
    );
    await pages.AccPage.getInputField("companyName").setValue(
      await data.userData.oracleUser.company
    );
    await pages.AccPage.getInputField("address1").setValue(
      await data.userData.oracleUser.address
    );
    await pages.AccPage.getInputField("city").setValue(
      await data.userData.oracleUser.city
    );
    await pages.AccPage.getInputField("postalCode").setValue(
      await data.userData.oracleUser.postCode
    );
    await browser.pause(4000);
  }

  async assertCheckEmailPage(){
    await pages.checkEmailPage.getCheckEmailHeader().waitForDisplayed({timeout: 3000});
    expect(await pages.checkEmailPage.getEmailText()).toHaveText(`We sent an email to ${await data.userData.oracleUser.email} with a button to verify your email address.`)
  }

}
