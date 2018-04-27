import { Component, OnInit } from '@angular/core';
import { HolidaysService } from '../holidays.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {

  constructor(private holidayService: HolidaysService) { }
  holidaysList: any[] = [];
  ngOnInit() {
    this.getHolidays();
  }

  getHolidays() {
    /*let index = 1;*/
    this.holidayService.getHolidays().subscribe(respone => {
      for (const property in respone.holidays) {
        if (respone.holidays.hasOwnProperty(property)) {
          this.holidaysList.push(respone.holidays[property]);
        }
      }
      /*this.holidaysList.forEach(function(item){
        item.id = index;
        index++;
      });*/
    });
  }

  setCurrentHoliday(holidayItem) {
    this.holidayService.setHolidayItem(holidayItem);
  }

}
