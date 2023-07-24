import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salute-message',
  templateUrl: './salute-message.component.html',
  styleUrls: ['./salute-message.component.css']
})
export class SaluteMessageComponent{
  salute:string = "";
  timeIdentifier:number = 0
  ngOnInit(): void {
    const currentTime = new Date().getHours();

    if(currentTime>=5 && currentTime<=12){
      this.salute = "Good Morning Walter!"
      this.timeIdentifier=1;
    }else if(currentTime>12 && currentTime<=18){
      this.salute = "Good Afternoon Walter!"
      this.timeIdentifier=2
    }else{
      this.salute = "Good Evening Walter!"
      this.timeIdentifier=3
    }
  }
  
}
