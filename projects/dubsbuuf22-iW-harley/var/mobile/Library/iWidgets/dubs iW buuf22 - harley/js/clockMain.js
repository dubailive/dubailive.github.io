clock({
  twentyfour : twentyfour,
  padzero : padzero,
  lang : language,
  refresh : refresh,
  success: function(clock){


document.getElementById('hour').innerHTML = clock.hourtext(true,true); //returns the current hour set to 24hr with the zero padded

document.getElementById('minute').innerHTML = clock.minuteonetext() + clock.minutetwotext(); //returns the current minute

document.getElementById('tod').innerHTML = clock.am(); //returns the current time of day.
      
var dow = ["SUN", "MON", "TUES", "WEDNES", "THURS", "FRI", "SATUR"];

document.getElementById('today').innerHTML = dow[clock.day()]; //returns the current day.

document.getElementById('date').innerHTML = clock.dateplus(); //returns the current date.

document.getElementById('month').innerHTML = clock.monthtext(); //returns the word of the current month.

document.getElementById('year').innerHTML = clock.year(); //returns the current year.

  }
});