// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const dDayTitle=document.querySelector("h3");
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2019-12-24:00:00:00+0900");
  let curDay = new Date();
  const dDayMilSeconds =  xmasDay - curDay + curDay.getTimezoneOffset() * 60000 + NINE_HOURS_MILLISECONDS;
  const dDayDay = dDayMilSeconds / 86400000;
  const dDayHour = (dDayDay - Math.floor(dDayDay)) * 24;
  const dDayMinutes = (dDayHour - Math.floor(dDayHour)) * 60;
  const dDaySeconds = (dDayMinutes - Math.floor(dDayMinutes)) * 60;
  dDayTitle.innerText = `${Math.floor(dDayDay) < 10 
  ? `0${Math.floor(dDayDay)}` 
  : `${Math.floor(dDayDay)}`}d ${Math.floor(dDayHour) < 10 
  ? `0${Math.floor(dDayHour)}` 
  : `${Math.floor(dDayHour)}`}h ${Math.floor(dDayMinutes) < 10
  ? `0${Math.floor(dDayMinutes)}`
  : `${Math.floor(dDayMinutes)}`}m ${Math.floor(dDaySeconds) < 10
  ? `0${Math.floor(dDaySeconds)}`
  : `${Math.floor(dDaySeconds)}`}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
