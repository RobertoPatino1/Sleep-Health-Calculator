import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sleep-calculator';
  imagenUrl: string = "";
  imagenData: Blob | undefined;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.setImage()
    this.handleChallengesList()
    this.plotLineChart()
  }

  setImage(): void {
    const url = "https://zenquotes.io/api/image";
    this.http.get(url, { responseType: 'blob' }).subscribe(
      (data: Blob) => {
        this.imagenData = data;
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

  plotLineChart(): void {
    
    const DATA_COUNT = 7;
    const MONTHS = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    const labels = MONTHS.slice(0, 7);
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Unfilled',
          fill: false,
          backgroundColor: 'rgb(54, 162, 235)',
          borderColor: 'rgb(54, 162, 235)'
          // data: Utils.numbers(NUMBER_CFG),
        }, {
          label: 'Dashed',
          fill: false,
          backgroundColor: 'rgb(75, 192, 192)',
          borderColor: 'rgb(75, 192, 192)',
          borderDash: [5, 5]
          // data: Utils.numbers(NUMBER_CFG),
        }, {
          label: 'Filled',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          // data: Utils.numbers(NUMBER_CFG),
          fill: true,
        }
      ]
    };
    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Line Chart'
          },
        },
        interaction: {
          mode: 'index',
          intersect: false
        },

      },
    };
    const ctx = document.getElementById("main-chart-area") as HTMLCanvasElement | null;

    if (ctx !== null) {
      const chart = new Chart(ctx, config);
    } else {
      console.error("Canvas element not found!");
    }
  }
}