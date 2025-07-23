//Para abrir el menú cuando la pantalla sea menor a
const menuOpenButton = document.querySelector(".btn-nav-btn-open");
//Para cerrar el menú
const menuCloseButton = document.querySelector(".btn-close");

menuOpenButton.addEventListener("click", () => {
  //Para activar o desactivar la visibilidad del menú movil
  document.body.classList.toggle("show-mobile-menu");

});

//Cerrar el menú al hacer click en el boton
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Filtro de galería
function filtrarPorCategoria(categoria) {
  const imagenes = document.querySelectorAll('.imagen-item');
  imagenes.forEach(img => {
    const categoriaImagen = img.dataset.categoria.toLowerCase();
    const categoriaSeleccionada = categoria.toLowerCase();

    img.style.display =
      categoriaSeleccionada === 'todas' || categoriaImagen === categoriaSeleccionada
        ? 'block'
        : 'none';
  });
}

// Mostrar detalle

function mostrarDetalle(id) {
  const detalles = {
    1: { src: 'assets/r1.jpg', descripcion: 'El proyecto contempla una distribución abierta en el primer nivel, con fuerte conexión visual entre interior y exterior. La fachada se orienta hacia el norte, maximizando la iluminación indirecta y generando un ambiente fresco y luminoso.', autor: 'Kevin Grajales' },
    2: { src: 'assets/r2.jpg', descripcion: 'Se utilizaron materiales como concreto expuesto, madera sintética y vidrio para equilibrar calidez y modernidad. Las dobles alturas permiten ventilación cruzada y sensación de amplitud, reforzando la conexión entre los niveles.', autor: 'Kevin Grajales' },
    3: { src: 'assets/r3.jpg', descripcion: 'Proyecto residencial de alta gama diseñado para una familia con enfoque en sostenibilidad. Se enfatiza el uso de volúmenes horizontales y techos inclinados, integrando la arquitectura con el paisaje exterior mediante plataformas escalonadas.', autor: 'Kevin Grajales' },
    4: { src: 'assets/r4.jpg', descripcion: 'Ubicada en un barrio exclusivo, esta vivienda de un solo nivel se articula en torno a jardines interiores y corredores ajardinados. La fachada principal se protege con elementos verticales que regulan la privacidad sin bloquear la vista.', autor: 'Kevin Grajales' },
    5: { src: 'assets/c1.jpg', descripcion: 'Desarrollado como sede de una empresa tecnológica, este edificio de tres niveles integra lenguaje contemporáneo con funcionalidad urbana. Se destacan los voladizos en vidrio y acero, que actúan como parasoles y brindan dinamismo a la fachada.', autor: 'Kevin Grajales' },
    6: { src: 'assets/c2.jpg', descripcion: 'Edificio multifuncional de tres niveles con locales comerciales en planta baja y oficinas en los niveles superiores. Se ubica en una zona en transformación urbana, donde la arquitectura debía dialogar con su entorno moderno.', autor: 'Kevin Grajales' },
  };

  const detalle = detalles[id];
  if (detalle) {
    document.getElementById('detalle-img').src = detalle.src;
    document.getElementById('detalle-descripcion').textContent = detalle.descripcion;
    document.getElementById('detalle-autor').textContent = `Autor: ${detalle.autor}`;

    const modal = new bootstrap.Modal(document.getElementById('modalDetalle'));
    modal.show();
  }
}



//Validación del fórmulario

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-contacto");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Detener el envío

    const nombre = form.querySelector('input[placeholder="Nombre"]');
    const correo = form.querySelector('input[placeholder="Correo"]');
    const mensaje = form.querySelector('textarea');

    let errores = [];

    // Validar nombre
    if (nombre.value.trim() === "") {
      errores.push("El nombre es obligatorio.");
    }

    // Validar correo (formato)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correo.value.trim() === "") {
      errores.push("El correo es obligatorio.");
    } else if (!emailRegex.test(correo.value)) {
      errores.push("El correo no tiene un formato válido.");
    }

    // Validar mensaje
    if (mensaje.value.trim() === "") {
      errores.push("El mensaje no puede estar vacío.");
    }

    if (errores.length > 0) {
      alert(errores.join("\n")); // Mostrar errores
      return;
    }

    // Si todo está bien
    alert("Formulario enviado correctamente.");
    form.reset();
  });
});
