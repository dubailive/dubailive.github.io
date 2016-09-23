var Level = "";
var State = "";

$.ajaxSetup({
cache: false,
headers: {'Cache-Control': 'no-cache'}
});

function init() {

refreshLocationTimer = setTimeout(init, 10*1000);

jQuery.get('file:///private/var/mobile/Library/BatteryStats.txt', function(appdata) {

var myvar = appdata;
var substr = appdata.split('\n');
var Level=substr[0].split(':')[1];
var State=substr[1].split(':')[1];

if( Level > 0  && Level <= 8 )	document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_1@2x.png";
if( Level > 8  && Level <= 15 )  document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_2@2x.png";
if( Level > 15 && Level <= 23 )  document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_3@2x.png";
if( Level > 23 && Level <= 30 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_4@2x.png";
if( Level > 30 && Level <= 35 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_5@2x.png";
if( Level > 35 && Level <= 40 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_6@2x.png";
if( Level > 40 && Level <= 45 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_7@2x.png";
if( Level > 45 && Level <= 50 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_8@2x.png";
if( Level > 50 && Level <= 55 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_9@2x.png";
if( Level > 55 && Level <= 60 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_10@2x.png";
if( Level > 60 && Level <= 65 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_11@2x.png";
if( Level > 65 && Level <= 70 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_12@2x.png";
if( Level > 70 && Level <= 75 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_13@2x.png";
if( Level > 75 && Level <= 80 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_14@2x.png";
if( Level > 80 && Level <= 85 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_15@2x.png";
if( Level > 85 && Level <= 90 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_16@2x.png";
if( Level > 90 && Level <= 95 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_17@2x.png";
if( Level > 95 && Level <= 100 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_18@2x.png";


document.getElementById("LevelDisplay").innerHTML = Level + "%";
document.getElementById("StateDisplay").innerHTML = State;
    
    $("#StateDisplay").arctext('destroy');
    $("#StateDisplay").arctext({radius:60, rotate:true});

});

}