"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.User = void 0;
class User {
    constructor(_username, _password) {
        this._username = _username;
        this._password = _password;
    }
    //setters y getters
    get username() {
        return this._username;
    }
    set username(username) {
        this._username = username;
    }
    get password() {
        return this._password;
    }
    set password(password) {
        this._password = password;
    }
}
exports.User = User;
let users = [];
let user1 = new User("aaa1", "pass1");
users.push(user1);
function getUsers() {
    return users;
}
exports.getUsers = getUsers;
