import { Component } from '@angular/core';
import {plotUserChart} from '../graphs/graphs.js'
@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent {
	ngOnInit(): void {
		plotUserChart();
	}
}



