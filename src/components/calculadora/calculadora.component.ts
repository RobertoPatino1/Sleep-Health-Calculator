import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {funcionPredeterminada} from '../calculadora/calculadora.js'
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
    funcionPredeterminada();
  }

  saveData(form:NgForm){
    console.log("enviando datos...");
    console.log(form);
    console.log(form.value)
    console.log('usuario: ', this.usuario)
  }

}
