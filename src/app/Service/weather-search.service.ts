import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { weatherUrl } from '../../environments/environment';

@Injectable()
export class WeatherSearchService {
  public url = 'weather?q=Pune&appid=';
  private token = '';
  public unitTokenF = '°F';
  constructor(private _http: Http) {
    this.getData();
  }

  getData() {
    return this._http.get(weatherUrl + this.url + this.token).map((res: Response) => res.json());
  }
}
