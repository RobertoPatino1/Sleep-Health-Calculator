import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sleep-calculator';
  imagenUrl: string = "";
  imagenData: Blob|undefined;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
      this.setImage()
      this.hideSidebar()
  }

  setImage():void{
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


  hideSidebar():void{
    const sidebar = document.getElementById("accordionSidebar")
    const button = document.getElementById("sidebarToggleTop")

    if(sidebar!=null && button!=null){
      button.addEventListener('click',()=>{
        if(sidebar.style.display=='none'){
          sidebar.style.display = 'block'
        }else{
          sidebar.style.display = 'none'
        }
      })
    }
  }
}
