"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loggedIn_1 = __importDefault(require("./loggedIn"));
function login(dbUser, formUser) {
    console.log("1", dbUser);
    console.log("2", formUser);
    if (formUser.username === dbUser.username) {
        if (formUser.password === dbUser.password) {
            localStorage.setItem("username", formUser.username);
            (0, loggedIn_1.default)();
        }
        else
            return;
    }
    else
        return;
}
exports.default = login;
