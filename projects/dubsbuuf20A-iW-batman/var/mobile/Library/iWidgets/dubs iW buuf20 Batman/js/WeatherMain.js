
Weather({
    code : weathercode,
    temp : celsius,
    language : language,
    gps : gpsswitch,
    refresh : refreshrate, // in minutes
    success: function(w){
	
document.getElementById('condition').innerHTML = Fcondition[w.icon]; //condition in different languages

	document.getElementById('temp').innerHTML = w.temp + '&deg;' + "C";
	$("#temp").arctext('destroy');
	    $("#temp").arctext({radius: 50, rotate:true});
	    
	document.getElementById('city').innerHTML = w.city;
	$("#city").arctext('destroy');
	    $("#city").arctext({radius: 70, rotate:true});
	    
	document.getElementById('icon').src = 'Images/Weather/dubs/' + w.icon + '.png';

document.getElementById('low').innerHTML = w.low + '&deg;';
document.getElementById('high').innerHTML = w.high + '&deg;';

    }
});