import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../services/home.service";
import {WorkedDay} from "../../models/workedDay";
import testGian from "../../utils/testPuppeteerService.js";

@Component({
  selector: 'app-worked-day-list',
  templateUrl: './worked-day-list.component.html',
  styleUrls: ['./worked-day-list.component.css'],
})
export class WorkedDayListComponent implements OnInit {

  availableDates: WorkedDay[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.$stats.subscribe(dates => {
      console.log(dates)
      this.availableDates = this.getDatesBetweenDates(dates.startDate, dates.endDate);
      this.availableDates.forEach(e => console.log(e))
      console.log(this.availableDates.length)
    });
  }

  updateWorkedDay($event: WorkedDay) {
    console.log("XXXXXXXXXXXXXXXXX")
    let index = this.availableDates.findIndex(wd => wd.date.getTime() == $event.date.getTime());
    this.availableDates[index].isChecked = $event.isChecked;
    this.availableDates.forEach(e => console.log(e))
  }

   getDatesBetweenDates(startDate: Date, endDate: Date)  {
    let dates: WorkedDay[] = [];
    const theDate = new Date(startDate)
    while (theDate < endDate) {
      dates = [...dates, new WorkedDay(new Date(theDate),true)]
      theDate.setDate(theDate.getDate() + 1)
    }
    dates = [...dates, new WorkedDay(new Date(endDate),true)]
    return dates
  }

  isHoliday(day: Date){
    return this.homeService.holidays.find(e => e.getTime() == day.getTime());
  }

  testGian() {
    testGian();
  }

}
