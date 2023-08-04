exports.funcionPredeterminada = function () {
  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    let horasDeSueno = document.getElementById("horasDeSueno").value;

    let resultado = (parseFloat(horasDeSueno) * 60) / 90;

    document.getElementById("ciclos").value = parseInt(resultado);
  });
};

// funcionPredeterminada();
