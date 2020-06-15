export class WorkedDay {
  date: Date;
  isChecked: boolean;

  constructor(date= new Date(), isChecked = true){
    this.date = date;
    this.isChecked = isChecked;
  }

}
