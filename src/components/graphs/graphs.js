exports.plotUserChart = function () {
  Chart.defaults.global.legend.display = false;

  let marksCanvas = document.getElementById("graph-canvas");

  let marksData = {
    labels: [
      "Duration",
      "Quality",
      "Latency",
      "Disturbances",
      "Consistency",
      "REM Sleep",
    ],
    datasets: [
      {
        backgroundColor: "rgba(196,169,249,0.2)",
        data: [85, 75, 70, 60, 75, 75],
      },
    ],
  };

  let radarChart = new Chart(marksCanvas, {
    type: "radar",
    data: marksData,
  });
  Chart.defaults.global.legend.display = true;
};
