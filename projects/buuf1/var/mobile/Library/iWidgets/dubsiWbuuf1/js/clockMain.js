clock({
  twentyfour : twentyfour,
  padzero : padzero,
  lang : language,
  refresh : refresh,
  success: function(clock){


    document.getElementById('hour').innerHTML = clock.hourtext();
      
 document.getElementById('minute').innerHTML = clock.minuteonetext() + clock.minutetwotext();

document.getElementById('tod').innerHTML = clock.am(); //returns the current time of day.

document.getElementById('today').innerHTML = clock.daytext(); //returns the current day.
      
document.getElementById('date').innerHTML = clock.date(); //returns the current date.

document.getElementById('month').innerHTML = clock.smonth(); //returns the current date.

document.getElementById('year').innerHTML = clock.year(); //returns the current year.
      
  }
});

			
 