clock({
  twentyfour : twentyfour,
  padzero : padzero,
  lang : language,
  refresh : refresh,
  success: function(clock){


document.getElementById('hour').innerHTML = clock.hour(true,true); //returns the current hour set to 24hr with the zero padded

document.getElementById('minute').innerHTML = clock.minute(); //returns the current minute

document.getElementById('hour1').innerHTML = clock.hour(true,true); //returns the current hour set to 24hr with the zero padded

document.getElementById('minute1').innerHTML = clock.minute(); //returns the current minute

document.getElementById('tod').innerHTML = clock.am(); //returns the current time of day.
      
document.getElementById('today').innerHTML = clock.daytext(); //returns the current day.

document.getElementById('date').innerHTML = clock.dateplus(); //returns the current date.
      
document.getElementById('month').innerHTML = clock.smonth(); //returns the word of the current month.

document.getElementById('year').innerHTML = clock.year(); //returns the current year.

  }
});