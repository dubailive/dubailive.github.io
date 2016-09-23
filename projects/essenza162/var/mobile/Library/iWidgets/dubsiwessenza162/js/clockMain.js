clock({
  twentyfour : twentyfour,
  padzero : padzero,
  lang : language,
  refresh : refresh,
  success: function(clock){


document.getElementById('time').innerHTML = clock.hour(true,true) + " " + clock.minuteonetext() + clock.minutetwotext(); //returns the current hour set to 24hr with the zero padded

document.getElementById('tod').innerHTML = clock.am(); //returns the current time of day.

document.getElementById('today').innerHTML = clock.sdaytext(); //returns the current day.
	$("#today").arctext('destroy');
	$("#today").arctext({radius:-1, rotate:true});

document.getElementById('date').innerHTML = clock.dateplus(); //returns the current date.
      
document.getElementById('month').innerHTML = clock.smonth(); //returns the word of the current month.
	$("#month").arctext('destroy');
	$("#month").arctext({radius:-1, rotate:true});


document.getElementById('year').innerHTML = clock.year(); //returns the current year.

  }
});