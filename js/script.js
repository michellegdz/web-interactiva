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

// FILTROS DE LA CARTA

$(document).ready(function () {
  // Cuando hacemos clic en un botón
  $(".filtro").on("click", function () {
    // Guardamos la categoría seleccionada
    let categoria = $(this).attr("data-filter");

    // Quitamos la clase activo de todos los botones
    $(".filtro").removeClass("activo");

    // Activamos el botón que hemos pulsado
    $(this).addClass("activo");

    // Volvemos al principio del carrusel
    $(".platos-carrusel").scrollLeft(0);

    // Comprobamos todas las tarjetas
    $(".tarjeta-plato").each(function () {
      let categoriaPlato = $(this).attr("data-category");

      // Si seleccionamos Todo, mostramos todos los platos
      if (categoria === "todos") {
        $(this).fadeIn(300);
      }

      // Si coincide la categoría, mostramos el plato
      else if (categoria === categoriaPlato) {
        $(this).fadeIn(300);
      }

      // Si no coincide, ocultamos el plato
      else {
        $(this).hide();
      }
    });
  });
});
