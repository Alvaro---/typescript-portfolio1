"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
function loggedIn() {
    if (localStorage.username) {
        document.getElementById("loginModalButtonContainer").innerHTML = `<span>Hola ${(0, users_1.getUsers)()[0].username}</span>`;
        document.getElementById("addGalleryItemContainer").innerHTML = `<button class="btn btn-primary btn-block">Agregar Foto</button>
                    <button class="btn btn-danger btn-block" id="closeSessionButton">Cerrar Sesion</button>`;
        $("#closeSessionButton").on("click", function (e) {
            e.preventDefault();
            localStorage.clear();
            window.location.reload();
        });
    }
}
exports.default = loggedIn;
