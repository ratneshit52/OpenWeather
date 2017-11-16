import { Component, OnInit } from '@angular/core';
import { WeatherSearchService } from '../../Service/weather-search.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  weatherData: any;
  unitPath = '°F';
  constructor(private _WeatherSearchService: WeatherSearchService) { }

  ngOnInit() {
    this._WeatherSearchService.getData().subscribe(data => {
      console.log(data);
      this.weatherData = data;
    },
    err => {
      console.log('Some thing wrong...!');
    });
  }

}
