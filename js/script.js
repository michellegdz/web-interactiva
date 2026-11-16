/* Link Activo Indicador */

const enlaces = document.querySelectorAll(".navegacion .enlace");
const secciones = document.querySelectorAll("body > section[id]");

function actualizarNavbar() {
  const posicion = window.scrollY + window.innerHeight / 2;

  let seccionActual = "inicio";

  secciones.forEach((seccion) => {
    const inicio = seccion.offsetTop;
    const final = inicio + seccion.offsetHeight;

    if (posicion >= inicio && posicion < final) {
      seccionActual = seccion.id;
    }
  });

  enlaces.forEach((enlace) => {
    enlace.classList.toggle(
      "activo",
      enlace.getAttribute("href") === "#" + seccionActual,
    );
  });
}

window.addEventListener("scroll", actualizarNavbar);
window.addEventListener("load", actualizarNavbar);

actualizarNavbar();
