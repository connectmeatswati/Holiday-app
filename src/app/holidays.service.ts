import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class HolidaysService {
  private apiKey = '79655c29-8751-4e95-bbfb-345e1a259548';
  private holidayAPI = 'https://holidayapi.com/v1/holidays?key=' + this.apiKey + '&country=US&year=2015';
  private holidayItem: any;
  constructor(private http: HttpClient) { }
  getHolidays (): Observable<any> {
    return this.http.get<any[]>(this.holidayAPI);
  }
  setHolidayItem(item) {
    this.holidayItem = item;
  }
  getHolidayItem() {
    return this.holidayItem;
  }
}
