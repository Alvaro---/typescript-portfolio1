import { getUsers } from "./users";
import login from "./login";
import "jquery";
import loggedIn from "./loggedIn";

// chek if loggedin
loggedIn();

(<HTMLElement>document.getElementById("loginButton")).addEventListener(
  "click",
  function (e) {
    e.preventDefault();

    let username: string = (<HTMLInputElement>(
      document.getElementById("username")
    )).value;
    let password: string = (<HTMLInputElement>(
      document.getElementById("password")
    )).value;

    login(getUsers()[0], { username, password });
  }
);
// document.getElementById("loginButton")! //Este operador dice que no es null. Es copmo usar el htmlElement;

console.log($("#loginButton"));
