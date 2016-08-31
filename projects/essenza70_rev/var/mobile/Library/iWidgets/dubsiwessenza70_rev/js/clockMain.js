clock({
  twentyfour : twentyfour,
  padzero : padzero,
  lang : language,
  refresh : refresh,
  success: function(clock){


document.getElementById('time').innerHTML = clock.hour() + ':' + clock.minute();

document.getElementById('tod').innerHTML = clock.am(); //returns the current time of day.

document.getElementById('note').innerHTML = clock.tod();

var dow = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

document.getElementById('today').innerHTML = dow[clock.day()]; //returns the current day.
      
document.getElementById('date').innerHTML = clock.dateplus(); //returns the current date.

var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

document.getElementById('month').innerHTML = months[clock.month()]; //returns the current date.

document.getElementById('year').innerHTML = clock.year(); //returns the current year.
      
  }
});

			
 