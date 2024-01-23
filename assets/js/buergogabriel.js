/*!
=========================================================
* BUERGO GABRIEL Page
=========================================================
*/

// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on('click', function (event) {
      if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 700, function () {
              window.location.hash = hash;
          });
      }
  });
});

// protfolio filters
$(window).on("load", function () {
  var t = $(".portfolio-container");
  t.isotope({
      filter: ".advertising",
      animationOptions: {
          duration: 750,
          easing: "linear",
          queue: !1
      }
  }), $(".filters a").click(function () {
      $(".filters .active").removeClass("active"), $(this).addClass("active");
      var i = $(this).attr("data-filter");
      return t.isotope({
          filter: i,
          animationOptions: {
              duration: 750,
              easing: "linear",
              queue: !1
          }
      }), !1
  });

  // Calcular la edad y mostrarla
  calcularYMostrarEdad();
});

// Función para calcular y mostrar la edad
function calcularYMostrarEdad() {
  var fechaNacimiento = new Date("09/25/1996");
  var fechaActual = new Date();

  var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

  // Comprobar si ya ha pasado el cumpleaños de este año
  if (
      fechaNacimiento.getMonth() > fechaActual.getMonth() ||
      (fechaNacimiento.getMonth() === fechaActual.getMonth() &&
          fechaNacimiento.getDate() > fechaActual.getDate())
  ) {
      edad--;
  }

  // Mostrar la edad en el elemento correspondiente
  document.getElementById("edad").innerText = ` ${edad} años`;
}

// Redireccionar a enlace de WhatsApp al hacer clic en el botón
$(document).ready(function () {
  $("#contactarBtn").on('click', function () {
      window.location.href = "https://api.whatsapp.com/send?phone=59175399936";
  });
});

