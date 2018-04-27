import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HolidaysComponent } from './holidays/holidays.component';
import { HolidayDetailsComponent } from './holiday-details/holiday-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/holidayList', pathMatch: 'full' },
  { path: 'holidayList', component: HolidaysComponent },
  { path: 'detail', component: HolidayDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
