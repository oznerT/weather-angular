
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url='https://api.openweathermap.org/data/2.5/weather?q=';
  key='480210b4a5b54bd6ebb54c1c8db5bd47'

  //Para poder hacer las peticiones http tenemos que inyectarlo por inyeccion de dependencias, que es HttpClient  => 
  constructor(private http: HttpClient) { }
  
  //ahora hago este metodo
  //                      Esto es lo que va a retornar
  getClima(ciudad:string): Observable<any>{
    const URL= this.url + ciudad +'&appid='+ this.key;
    console.log('Entro a la url')
    return this.http.get(URL)
  }
}
