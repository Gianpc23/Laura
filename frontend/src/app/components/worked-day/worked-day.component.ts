import {Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';
import {WorkedDay} from "../../models/workedDay";
import {DaysOfTheWeek, Constants} from '../../utils/constants';

@Component({
  selector: 'app-worked-day',
  templateUrl: './worked-day.component.html',
  styleUrls: ['./worked-day.component.css']
})
export class WorkedDayComponent implements OnInit {
  daysOfWeek = [DaysOfTheWeek.SUNDAY, DaysOfTheWeek.MONDAY, DaysOfTheWeek.TUESDAY, DaysOfTheWeek.WEDNESDAY,
    DaysOfTheWeek.THURSDAY, DaysOfTheWeek.FRIDAY, DaysOfTheWeek.SATURDAY];
  @Output() updatedWorkedDay: EventEmitter<any>;
  @Input() day: Date;
  @Input() isHoliday: boolean;
  dayOfWeek: String;
  checked: boolean;
  constructor() {
    this.updatedWorkedDay = new EventEmitter();
    this.day = new Date();
  }

  ngOnInit() {
    this.dayOfWeek = (this.isHoliday) ? Constants.VACATIONS : this.daysOfWeek[this.day.getDay()];
    this.checked = !this.isHoliday;
  }

  changeChecked(): void {
    this.updatedWorkedDay.emit(new WorkedDay(this.day, this.checked));
  }

}
