import { TestBed, inject } from '@angular/core/testing';

import { WeatherSearchService } from './weather-search.service';

describe('WeatherSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherSearchService]
    });
  });

  it('should be created', inject([WeatherSearchService], (service: WeatherSearchService) => {
    expect(service).toBeTruthy();
  }));
});
