//Scripts by JunesiPhone, mod by J3T, mod by dubs,



clock({

  twentyfour : true,

  padzero : true,

  refresh : 1000,

  success: function(clock){

    document.getElementById('time').innerHTML = clock.hour() + ':' + clock.minute();

    document.getElementById('am').innerHTML = clock.am();

	  document.getElementById('date').innerHTML = translate[current].sday[clock.day()] + ' ' + clock.datepadded() + ' ' + translate[current].smonth[clock.month()];

  }

});



