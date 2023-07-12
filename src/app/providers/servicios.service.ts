import { Injectable } from '@angular/core';
//Importación del HttpClient
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private URL: string = 'https://sleep-health-calculator-default-rtdb.firebaseio.com/collection.json';
  constructor(private http:HttpClient) { }
}
