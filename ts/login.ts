import loggedIn from "./loggedIn";
import { User } from "./users";

export default function login(
  dbUser: User,
  formUser: { username: string; password: string }
) {
  console.log("1", dbUser);
  console.log("2", formUser);

  if (formUser.username === dbUser.username) {
    if (formUser.password === dbUser.password) {
      localStorage.setItem("username", formUser.username);
      loggedIn();
    } else return;
  } else return;
}
