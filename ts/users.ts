export class User {
  constructor(private _username: string, private _password: string) {}

  //setters y getters
  get username(): string {
    return this._username;
  }

  set username(username: string) {
    this._username = username;
  }

  get password(): string {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }
}

let users: User[] = [];

let user1 = new User("aaa1", "pass1");
users.push(user1);

export function getUsers() {
  return users;
}
