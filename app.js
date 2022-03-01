const { User, accessLevel } = require("./user");
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
      new User(
        name,
        surname,
        birthDay,
        password,
        gender,
        email,
        accessLevel.user
      )
    );
  }

  createAdmin(name, surname, birthDay, password, gender, email) {
    this.users.push(
      new User(
        name,
        surname,
        birthDay,
        password,
        gender,
        email,
        accessLevel.admin
      )
    );
  }

  changeUserData(admin, user, propertyToChange, valueOfNewData) {
    Validator.throwIfNotProperInstance(admin, User);
    Validator.throwIfNotProperInstance(user, User);
    this.throwIfNotAdmin(admin);
    user.checkIfHaveProperty(propertyToChange);
    user[propertyToChange] = valueOfNewData;
  }

  throwIfNotAdmin(value) {
    if (value.accessLevel !== accessLevel.admin) {
      throw new Error("You don't have admin permissions");
    }
  }

  //wszystkie metody w których admin ingeruje we właściwości innych użytkowników
}

module.exports = App;
