const User = require("./user");
const Validator = require("./validator");

class App {
  constructor() {
    if (App.exist) {
      return App.instance;
    }
    this.users = [];
    App.exist = true;
    App.instance = this;
    return this;
  }

  createUser(name, surname, birthDay, password, gender, email) {
    this.users.push(
      new User(name, surname, birthDay, password, gender, email, "user")
    );
  }

  createAdmin(name, surname, birthDay, password, gender, email) {
    this.users.push(
      new User(name, surname, birthDay, password, gender, email, "admin")
    );
  }

  changeUserData(admin, user, dataToChange, valueOfNewData) {
    Validator.throwIfNotProperInstance(admin, User);
    Validator.throwIfNotProperInstance(user, User);
    this.throwIfNotAdmin(admin);
    //ta logika powinna trafić do user
    this.checkIfCanChangeProperty(user, dataToChange);
    user[dataToChange] = valueOfNewData;
  }

  throwIfNotAdmin(value) {
    if (value.accessLevel !== "admin") {
      throw new Error("You don't have admin permissions");
    }
  }

  checkIfCanChangeProperty(obj, property) {
    if (!Object.keys(obj).find((item) => item === `_${property}`)) {
      throw new Error("You may change only existing properies");
    }
  }

  //wszystkie metody w których admin ingeruje we właściwości innych użytkowników
}

module.exports = App;
