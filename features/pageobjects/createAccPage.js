import {BasePage} from "./basePage.js"

export class AccPage extends BasePage {
    getInputField(name) {
        return $(`input[id='sView1:r1:0:${name}::content']`)
    }
    getDropownField(name) {
        return $(`select[id="sView1:r1:0:${name}::content"]`)
    }

    getCookieFrame(){
        return $('iframe[title*=Cookie]')
    }

    getAcceptCookiesBtn(){
        return $('//a[text()="Accept all"]')
    }

    getProceedBtn(){
        return $('div[id="sView1:r1:0:b1"')
    }

    async setDropdownValue(name, value){
        await this.getDropownField(name).click();
        await this.getDropownField(name).selectByAttribute('title',value);
    }
};