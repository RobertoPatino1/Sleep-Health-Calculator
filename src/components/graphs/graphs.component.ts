import { Component } from '@angular/core';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent {

	chartOptions = {
		title: {
		  text: "Basic Column Chart in Angular"
		},
		data: [{
		  type: "column",
		  dataPoints: [
			{ label: "Apple",  y: 10  },
			{ label: "Orange", y: 15  },
			{ label: "Banana", y: 25  },
			{ label: "Mango",  y: 30  },
			{ label: "Grape",  y: 28  }
		  ]
		}]                
	  };
	}



