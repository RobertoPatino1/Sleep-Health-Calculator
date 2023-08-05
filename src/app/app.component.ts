import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { Plantillas } from '../app/interfaces/plantillas';
import { ServiciosService } from '../app/providers/servicios.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sleep-calculator';
  imagenUrl: string = "";
  imageData: Blob | undefined;

  public chartData: Plantillas[] = [];

  constructor(private http: HttpClient, 
    private serviciosService: ServiciosService
) { }
  ngOnInit(): void {
    this.setImage()
    this.handleChallengesList()
    this.getDataFromService()
    this.getALLDataFromService()
    this.plotBarsChart()
this.plotLinesChart() 
this.plotScatterChart()


  }

  setImage(): void {
    const url = "https://zenquotes.io/api/image";
    this.http.get(url, { responseType: 'blob' }).subscribe(
      (data: Blob) => {
        this.imageData = data;
        this.imagenUrl = URL.createObjectURL(data);
      },
      (error) => {
        console.error('Error al obtener la imagen:', error);
      }
    );
  }


  handleChallengesList(): void {
    // Add a "checked" symbol when clicking on a list item
    let list = document.querySelector('#challengesUL');

    if (list != null) {
      list.addEventListener('click', function (ev) {
        if (ev.target != null)
          (ev.target as HTMLElement).classList.toggle('checked');
      }, false);
    }
  }

  // plotLineChart(): void {
  //   var myChart = new Chart("main-chart-area", {
  //     type: 'bar',
  //     data: {
  //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //         datasets: [{
  //             label: '# of Votes',
  //             data: [12, 19, 3, 5, 2, 3],
  //             backgroundColor: [
  //                 'rgba(255, 99, 132, 0.2)',
  //                 'rgba(54, 162, 235, 0.2)',
  //                 'rgba(255, 206, 86, 0.2)',
  //                 'rgba(75, 192, 192, 0.2)',
  //                 'rgba(153, 102, 255, 0.2)',
  //                 'rgba(255, 159, 64, 0.2)'
  //             ],
  //             borderColor: [
  //                 'rgba(255, 99, 132, 1)',
  //                 'rgba(54, 162, 235, 1)',
  //                 'rgba(255, 206, 86, 1)',
  //                 'rgba(75, 192, 192, 1)',
  //                 'rgba(153, 102, 255, 1)',
  //                 'rgba(255, 159, 64, 1)'
  //             ],
  //             borderWidth: 1
  //         }]
  //     },
  //     options: {
  //         scales: {

  //         }
  //     }
  // });
  // }


  getDataFromService(): void {
    // Obtener los datos del servicio
    this.serviciosService.getResponse().subscribe(
      (data: Object) => {
        this.chartData = (data as Plantillas[]).slice(0,20); // Cast the data to the Plantillas[] type
      
        this.plotBarsChart();

        this.plotLinesChart();
      },
      (error) => {
        console.error('Error al obtener los datos del servicio:', error);
      }
    );
  }
  getALLDataFromService(): void {
    // Obtener los datos del servicio
    this.serviciosService.getResponse().subscribe(
      (data: Object) => {
        this.chartData = (data as Plantillas[]); // Cast the data to the Plantillas[] type
        this.plotScatterChart();
      },
      (error) => {
        console.error('Error al obtener los datos del servicio:', error);
      }
    );
  }
  plotBarsChart(): void {
    // Verificar que haya datos para el gráfico
    if (this.chartData.length === 0) {
      console.warn('No hay datos para el gráfico.');
      return;
    }

    // Procesar los datos para el gráfico
    const labels = this.chartData.map((item) => "ID:"+item['Person ID']+"- Edad"+item.Age);
    const data = this.chartData.map((item) => parseInt(item["Stress Level"])); // Cambiar "Daily Steps" por la propiedad que quieras representar en el gráfico

    // Crear el gráfico con los datos procesados
    var myChart = new Chart("main-chart-bars", {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Stress Level', // Cambiar la etiqueta según la propiedad que estés representando
          data: data,
          backgroundColor: 'rgba(250,254,241) ',
          borderColor: 'rgba(196,192,203)',
          borderWidth: 1
        }]
      },

    });
  }

plotLinesChart(): void {
  // Verificar que haya datos para el gráfico
  if (this.chartData.length === 0) {
    console.warn('No hay datos para el gráfico.');
    return;
  }

  // Procesar los datos para el gráfico
  const labels = this.chartData.map((item) => "ID: "+item['Person ID']);
  const data = this.chartData.map((item) => parseInt(item['Quality of Sleep'])); // Cambiar "Daily Steps" por la propiedad que quieras representar en el gráfico

  // Crear el gráfico con los datos procesados
  var myChart = new Chart("main-chart-line", {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label:'Quality of Sleep', // Cambiar la etiqueta según la propiedad que estés representando
        data: data,
        backgroundColor: 'rgba(241,250,254)',
        borderColor: 'rgba(196,192,203)',
        borderWidth: 1
      }]
    },

  });
}
plotScatterChart(): void {
  // Verificar que haya datos para el gráfico
  if (this.chartData.length === 0) {
    console.warn('No hay datos para el gráfico.');
    return;
  }

  // Filtrar los datos para obtener solo los registros con género "Male" y "Female"
  const maleData = this.chartData
    .filter((item) => item['Gender'] === 'Male')
    .map((item) => ({
      x: parseFloat(item['Sleep Duration']),
      y: parseInt(item['Daily Steps']),
    }));

  const femaleData = this.chartData
    .filter((item) => item['Gender'] === 'Female')
    .map((item) => ({
      x: parseFloat(item['Sleep Duration']),
      y: parseInt(item['Daily Steps']),
    }));

  // Crear el gráfico con los datos procesados
  var myChart = new Chart('main-chart-scatter', {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Male',
          data: maleData,
          backgroundColor: 'rgba(54, 162, 235, 0.7)',
          borderColor: 'rgba(54, 162, 235, 1)',
          pointRadius: 8,
          pointHoverRadius: 10,
        },
        {
          label: 'Female',
          data: femaleData,
          backgroundColor: 'rgba(255, 99, 132, 0.7)',
          borderColor: 'rgba(255, 99, 132, 1)',
          pointRadius: 8,
          pointHoverRadius: 10,
        },
      ],
    },
    options: {
      scales: {
        xAxes: [{
          type: 'linear',
          position: 'bottom',
          scaleLabel: {
            display: true,
            labelString: 'Sleep Duration',
          },
        }],
        yAxes: [{
          type: "linear",
          position: 'left',
          scaleLabel: {
            display: true,
            labelString: 'Daily Steps',
          },
        }],
      },
    },
  });
}



}