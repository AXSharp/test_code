import UserData from "./data/userData.js";
class Data {
  constructor() {
    this.userData = new UserData();
  }
}
export const data = new Data();
