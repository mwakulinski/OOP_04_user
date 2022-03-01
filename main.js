const App = require("./app");
const { User } = require("./user");

const user1 = new User(
  "Michal",
  "Waku",
  "2002/12/02",
  "Jaksiemasz1@",
  "male",
  "mich@wak.pl",
  "admin"
);

const app = new App();
app.createAdmin(
  "Michal",
  "Waku",
  "2002/12/02",
  "Jaksiemasz1@",
  "male",
  "mich@wak.pl"
);

app.createAdmin(
  "Bartek",
  "Waku",
  "2002/12/02",
  "Jaksiemasz1@",
  "male",
  "mich@wak.pl"
);
app.createUser(
  "Anna",
  "Lis",
  "2012/12/02",
  "BAraktmasz1@",
  "female",
  "Ann.lis@ok.pl"
);

app.changeUserData(app.users[0], app.users[2], "password", "Kasia1234!");
app.changeUserData(app.users[0], app.users[2], "name", "Arkadiusz");
app.changeUserData(app.users[0], app.users[2], "gender", "male");
console.log("app", app);
