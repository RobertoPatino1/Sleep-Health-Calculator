import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit{
  ngOnInit(): void {
    this.hideSidebar()
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
