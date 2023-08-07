exports.funcionPredeterminada = function () {
  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    let horasDeSueno = document.getElementById("horasDeSueno").value;

    let resultado = parseInt((parseFloat(horasDeSueno) * 60) / 90);

    if (resultado == 5) {
      document.getElementById("ciclos").value =
        resultado + " cycles. Excellent, you're doing great!";
    } else if (resultado == 4) {
      document.getElementById("ciclos").value =
        resultado + " cycles. You should sleep a little more";
    } else if (resultado < 4) {
      document.getElementById("ciclos").value =
        resultado + " cycles. You should sleep more";
    } else if (resultado == 6) {
      document.getElementById("ciclos").value =
        resultado + " cycles. You're oversleeping a little";
    } else if (resultado > 6) {
      document.getElementById("ciclos").value =
        resultado + " cycles. You're sleeping too much";
    }
  });
};
