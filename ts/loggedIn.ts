import { getUsers } from "./users";

export default function loggedIn() {
  if (localStorage.username) {
    document.getElementById(
      "loginModalButtonContainer"
    )!.innerHTML = `<span>Hola ${getUsers()[0].username}</span>`;

    document.getElementById(
      "addGalleryItemContainer"
    )!.innerHTML = `<button class="btn btn-primary btn-block">Agregar Foto</button>
                    <button class="btn btn-danger btn-block" id="closeSessionButton">Cerrar Sesion</button>`;

    $("#closeSessionButton").on("click", function (e) {
      e.preventDefault();
      localStorage.clear();
      window.location.reload();
    });
  }
}
