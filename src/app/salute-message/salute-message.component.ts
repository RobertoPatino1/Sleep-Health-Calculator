import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salute-message',
  templateUrl: './salute-message.component.html',
  styleUrls: ['./salute-message.component.css']
})
export class SaluteMessageComponent{
  salute:string = "";
  timeIdentifier:number = 0
  hour:number = 0;
  minutes:number = 0;
  formattedDate:string = ""

  ngOnInit(): void {
    this.setup()
    this.updateTime();  //Function that updates the time constantly

  }

  setup():void{
    const weekDays = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    
    // Array of the names of the months in English
    const months = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    // Get the current date
    const currentDate = new Date();

    // Get the day of the week, day of the month, month, and year
    const dayOfWeek = weekDays[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    this.formattedDate = `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
  }

  updateTime(): void {
    setInterval(() => {
      const currentTime = new Date();
      this.hour = currentTime.getHours();
      this.minutes = currentTime.getMinutes();
      this.updateSalute(); 
    }, 1000); 
  }


  updateSalute():void{
    const currentTime = new Date().getHours();
    this.hour = new Date().getHours();
    this.minutes = new Date().getMinutes();
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
