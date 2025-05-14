import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiUrl = 'https://api.bmkg.go.id/'
  

  constructor(private http: HttpClient) { }

  getWeatherData() {
    return this.http.get(this.apiUrl + 'publik/prakiraan-cuaca?adm4=35.14.06.2012')
      .pipe(
        catchError((error) => {
          console.error('Error fetching weather data', error);
          throw error;
        })
      );
  }
}
