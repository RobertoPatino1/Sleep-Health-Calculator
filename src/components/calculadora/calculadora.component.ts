import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  usuario:any={
    genero:'',
    edad:'',
    horas:''
  }
  constructor(){}
  ngOnInit(): void{
  }

  saveData(form:NgForm){
    console.log("enviando datos...");
    console.log(form);
    console.log(form.value)
    console.log('usuario: ', this.usuario)
  }

}
