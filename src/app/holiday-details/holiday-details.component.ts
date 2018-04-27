import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HolidaysService } from '../holidays.service';

@Component({
  selector: 'app-holiday-details',
  templateUrl: './holiday-details.component.html',
  styleUrls: ['./holiday-details.component.css']
})
export class HolidayDetailsComponent implements OnInit {
  holiday: any;
  holidayList: any;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private holidayService: HolidaysService) { }

  ngOnInit() {
    this.holiday = this.holidayService.getHolidayItem();
  }

}
