import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
// Chart.register(...registerables);



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
    var myChart = new Chart("main-chart-area", {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {

          }
      }
  });
  }
}