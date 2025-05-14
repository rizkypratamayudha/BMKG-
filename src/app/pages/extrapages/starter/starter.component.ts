import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { WeatherService } from 'src/app/core/services/weather/weather.service';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})

/**
 * Starter Component
 */
export class StarterComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  /* DATA */
  weatherData: any = [];

  /* Date & Time */
  date = new Date();

  constructor(
    private weatherService: WeatherService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Weather Dashboard', active: true }
    ];

    this.getWeatherData();
  }

  getWeatherData() {
    this.spinner.show();
    this.weatherService.getWeatherData().subscribe(
      (data: any) => {
        this.weatherData = data;
        console.log(this.weatherData);
        this.spinner.hide();
      },
      (error: any) => {
        console.error('Error fetching weather data', error);
        this.spinner.hide();
      }
    );
  }

  // Format time from datetime string (e.g. "2025-05-15 08:00:00" to "8:00 AM")
  formatTime(datetimeStr: string): string {
    if (!datetimeStr) return '';
    
    const date = new Date(datetimeStr);
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric',
      minute: '2-digit', 
      hour12: true 
    });
  }

  // Get day name from datetime string (e.g. "2025-05-15 08:00:00" to "Wed")
  getDayName(datetimeStr: string): string {
    if (!datetimeStr) return '';
    
    const date = new Date(datetimeStr);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  }

  // Get min and max temperature for a day's forecasts
  getDayMinMaxTemp(forecasts: any[]): string {
    if (!forecasts || forecasts.length === 0) return '';
    
    const temps = forecasts.map(f => f.t);
    const maxTemp = Math.max(...temps);
    const minTemp = Math.min(...temps);
    
    return `${maxTemp}°/${minTemp}°`;
  }

  // Get most frequent weather description for a day
  getMostFrequentWeather(forecasts: any[]): string {
    if (!forecasts || forecasts.length === 0) return '';
    
    const weatherCounts = forecasts.reduce((acc, forecast) => {
      const weather = forecast.weather_desc_en;
      acc[weather] = (acc[weather] || 0) + 1;
      return acc;
    }, {});
    
    return Object.keys(weatherCounts).reduce((a, b) => 
      weatherCounts[a] > weatherCounts[b] ? a : b
    );
  }

  // Get most frequent weather icon for a day
  getMostFrequentWeatherIcon(forecasts: any[]): string {
    if (!forecasts || forecasts.length === 0) return '';
    
    const iconCounts = forecasts.reduce((acc, forecast) => {
      const icon = forecast.image;
      acc[icon] = (acc[icon] || 0) + 1;
      return acc;
    }, {});
    
    return Object.keys(iconCounts).reduce((a, b) => 
      iconCounts[a] > iconCounts[b] ? a : b
    );
  }

}
