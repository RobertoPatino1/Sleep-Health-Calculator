import { Component } from '@angular/core';

@Component({
  selector: 'app-chart-component',
  templateUrl: './chart-component.component.html',
  styleUrls: ['./chart-component.component.css']
})
export class ChartComponentComponent {
  chart_type:string = "";
  dataset:{}={} //Optional dataset to use in the graph
}
