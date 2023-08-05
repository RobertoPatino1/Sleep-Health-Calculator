import { Injectable } from '@angular/core';
//Importación del HttpClient
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private URL: string = 'https://sleep-health-calculator-default-rtdb.firebaseio.com/collection.json';

    //Método con la petición HTTP
    getResponse() {
      return this.http.get(this.URL);
    }
    
    getCustomResponse(query:string){
      const CORS = "https://cors-anywhere.herokuapp.com/"
      return this.http.get(CORS+this.URL+"?"+query)
    }

  constructor(private http:HttpClient) { }
}
