import { Component, Input } from '@angular/core';
import { Plantillas } from '../../app/interfaces/plantillas';
import { ServiciosService } from '../../app/providers/servicios.service';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  public data:Plantillas[] = [];
  public uniqueKeys:string[] = []
  public key:string=""
  public sectionedData:Plantillas[] = [];
  @Input() category:string = "";
  constructor(private dataProvider:ServiciosService){}
  
  ngOnInit(){
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = (response as Plantillas[]);
    })
    this.getUniqueKeys()  
  }

  getUniqueKeys():void{    
    //This functions fills the contents of dropdown headers
    if(this.category!=null){
      if(this.category==="Gender"){
        this.uniqueKeys.push("Male");
        this.uniqueKeys.push("Female");
      }else if(this.category==="BMI Category"){
        this.uniqueKeys.push("Normal")
        this.uniqueKeys.push("Normal Weight")
        this.uniqueKeys.push("Overweight")
        this.uniqueKeys.push("Obese")
      }else if(this.category==="Occupation"){
        let uniqueOccupations = ['Nurse', 'Salesperson', 'Software Engineer', 'Sales Representative', 'Lawyer', 'Scientist', 'Doctor', 'Manager', 'Teacher', 'Engineer', 'Accountant']
        for(let occupation of uniqueOccupations){
          this.uniqueKeys.push(occupation)
        }
      }else if(this.category==="Sleep Disorder"){
        this.uniqueKeys.push("Insomnia");
        this.uniqueKeys.push("Sleep Apnea");
        this.uniqueKeys.push("None");
      }
    }
     
  }


  sectionBySelectedCategory(key:string):void{
    this.sectionedData = [] //Restarting the sectioned data array
    console.log("You selected: "+key);
    this.key = key;
    let i = 0;
    for(let datum of this.data){
      if(datum[this.category]===this.key){
        this.sectionedData.push(datum)
        i++;
      }
      if(i==15) break;
    }
  }
}
