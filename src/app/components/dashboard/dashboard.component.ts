import { Component } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  ciudad='';
  urlImagen= 'https://www.pngall.com/wp-content/uploads/11/Weather-No-Background.png';
  temperatura=0;
  humedad=0;
  clima='';
  query = false;


  constructor(private _climaService:ClimaService){

  }
  obtenerClima() {
    this.query = false;
    this._climaService.getClima(this.ciudad).subscribe((data: any) => {
      console.log(data)
      console.log(this.ciudad)
      this.temperatura = data.main.temp - 273;
      this.humedad = data.main.humidity;
      this.clima = data.weather[0].main;
      this.query = true; // Actualiza el valor de query después de asignar los valores
    });
  }
  
}
