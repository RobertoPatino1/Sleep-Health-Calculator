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


  @Input() category:string = "";
  constructor(private dataProvider:ServiciosService){}
  
  ngOnInit(){
    
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = (response as Plantillas[]).slice(0,10);
    })
    this.getUniqueKeys() 
    console.log("--->");
       
    console.log(this.data);
    console.log(this.category);
    
    
  }

  getUniqueKeys():void{    
    if(this.category!=null){
      if(this.category==="gender"){
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


  validateCategory():void{
    /*
    This function will query the dataset according to the category
    passed in as a parameter to the data tag
    */
    if(this.category!=null){




    }
  }
}
