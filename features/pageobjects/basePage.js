export class BasePage {
  getEmailImputField() {
    return $("#sso_username");
  }

  getPasswordImputField() {
    return $("#ssopassword");
  }

  getsigninButton() {
    return $("#signin_button");
  }
  getCreateButton(){
    return $(".cb41create-btn");
}
getInvalidCredentialMessage() {
  return $('//span[@class="error-show"]/div[@class="cb41error"]')
}

}

