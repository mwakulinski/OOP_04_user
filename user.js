const Validator = require("./validator");

class User {
  constructor(name, surname, birthDay, password, gender, email, accessLevel) {
    this.name = name;
    this.surname = surname;
    this.birthDay = birthDay;
    this.password = password;
    this.gender = gender;
    this.email = email;
    this.accessLevel = accessLevel;
  }

  set name(value) {
    Validator.checkIfString(value);
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set surname(value) {
    Validator.checkIfString(value);
    this._surname = value;
  }

  get surname() {
    return this._surname;
  }

  set birthDay(value) {
    Validator.checkIfString(value);
    this._birthDay = value;
  }

  get birthDay() {
    return this._birthDay;
  }

  set password(value) {
    Validator.checkIfString(value);
    this.checkIfProperPassword(value);
    this._password = value;
  }

  get password() {
    return this._password;
  }

  set gender(value) {
    Validator.checkIfString(value);
    this.checkIfProperGender(value.toLowerCase());
    this._gender = value.toLowerCase();
  }

  get gender() {
    return this._gender;
  }

  set email(value) {
    Validator.checkIfString(value);
    this.checkIfProperEmail(value);
    this._email = value;
  }

  get email() {
    return this._email;
  }

  set accessLevel(value) {
    Validator.checkIfString(value);
    this.checkIfProperAccessLevel(value.toLowerCase());
    this._accessLevel = value.toLowerCase();
  }

  get accessLevel() {
    return this._accessLevel;
  }

  checkIfProperAccessLevel(value) {
    const accessLevel = ["user", "admin"];
    if (!accessLevel.find((item) => item === value))
      throw new Error("entry level should be specified as: user or admin");
  }

  checkIfProperPassword(value) {
    const regExpToCheck = new RegExp(
      "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z0-9]).{8,}$"
    );
    if (!regExpToCheck.test(value)) {
      throw new Error(
        "Password must be at least 8 char long and have at least one small letter, one big letter, one digit and  one special character"
      );
    }
  }

  checkIfProperGender(value) {
    const genders = ["male", "female"];
    if (!genders.find((item) => item === value))
      throw new Error("We live in Poland so gender must be male or female");
  }

  checkIfProperEmail(value) {
    const regExpToCheck = new RegExp(
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$"
    );
    if (!regExpToCheck.test(value))
      throw new Error("Please provide a valid email");
  }
}

module.exports = User;
