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
  public uniqueKeys:string[] = []
  public key:string=""

  @Input() category:string = "";
  constructor(private dataProvider:ServiciosService){}
  
  ngOnInit(){
    
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = (response as Plantillas[]);
    })
    this.getUniqueKeys()  
    
  }

  getUniqueKeys():void{    
    if(this.category!=null){
      if(this.category==="Gender"){
        //Fill the button with Male/Female options
        this.uniqueKeys.push("Male");
        this.uniqueKeys.push("Female");
      }if(this.category==="BMI category"){
        this.uniqueKeys.push("Normal")
        this.uniqueKeys.push("Normal Weight")
        this.uniqueKeys.push("Overweight")
        this.uniqueKeys.push("Obese")
      }else if(this.category==="occupation"){

      }else if(this.category==="sleeping disorder"){

      }
    }
     
  }


  sectionBySelectedCategory(key:string):void{
    console.log("You selected: "+key);
    this.key = key;
  }
}
