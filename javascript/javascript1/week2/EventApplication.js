const todayDate = new Date()
const day = todayDate.getDay()
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
function getEventWeekday(eventInDays) {
    const eventDay = (eventInDays + day)%7
    return weekday[eventDay]
}
console.log(getEventWeekday(9)) 
console.log(getEventWeekday(2)) 