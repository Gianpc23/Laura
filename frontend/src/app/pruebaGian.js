const getDatesBetweenDates = (startDate, endDate) => {
  let dates = []
  //to avoid modifying the original date
  const theDate = new Date(startDate)
  while (theDate < endDate) {
    dates = [...dates, new Date(theDate)]
    theDate.setDate(theDate.getDate() + 1)
  }
  dates = [...dates, endDate]
  return dates
}

const today = new Date()
const threedaysFromNow = new Date(today)
threedaysFromNow.setDate( threedaysFromNow.getDate() + 3)

getDatesBetweenDates(today, threedaysFromNow).forEach(e => console.log(e))
