import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { HolidayDetailsComponent } from './holiday-details/holiday-details.component';
import { HolidaysService } from './holidays.service';
import { AppRoutingModule } from './/app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    HolidaysComponent,
    HolidayDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule
  ],
  providers: [HolidaysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
