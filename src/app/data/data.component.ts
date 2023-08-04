import { Component, Input } from '@angular/core';
import { Plantillas } from '../interfaces/plantillas';
import { ServiciosService } from '../providers/servicios.service';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  public data:Plantillas[] = [];
  @Input() category:string = "";
  constructor(private dataProvider:ServiciosService){

  }
  ngOnInit(){
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = (response as Plantillas[]).slice(0,10);

    })

  }


  validateCategory():void{
    /*
    This function will query the dataset according to the category
    passed in as a parameter to the data tag
    */
  }
}
