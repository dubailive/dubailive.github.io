
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

if( Level > 0  && Level <= 7 )  document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_1@2x.png";
if( Level > 7  && Level <= 14 )  document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_2@2x.png";
if( Level > 14 && Level <= 20 )  document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_3@2x.png";
if( Level > 20 && Level <= 27 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_4@2x.png";
if( Level > 27 && Level <= 37 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_5@2x.png";
if( Level > 37 && Level <= 43 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_6@2x.png";
if( Level > 43 && Level <= 49 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_7@2x.png";
if( Level > 49 && Level <= 55 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_8@2x.png";
if( Level > 55 && Level <= 62 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_9@2x.png";
if( Level > 62 && Level <= 68 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_10@2x.png";
if( Level > 68 && Level <= 74 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_11@2x.png";
if( Level > 74 && Level <= 80 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_12@2x.png";
if( Level > 80 && Level <= 84 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_13@2x.png";
if( Level > 84 && Level <= 89 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_14@2x.png";
if( Level > 89 && Level <= 94 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_15@2x.png";
if( Level > 94 && Level <= 100 ) document.getElementById("BatteryImage").src="Images/Battery/BatteryBG_16@2x.png";



if( Level > 0  && Level <= 7 )  document.getElementById("LevelDisplay").style.marginLeft = "-289px";
if( Level > 7  && Level <= 14 )  document.getElementById("LevelDisplay").style.marginLeft = "-289px";
if( Level > 14 && Level <= 20 )  document.getElementById("LevelDisplay").style.marginLeft = "-268px";
if( Level > 20 && Level <= 27 ) document.getElementById("LevelDisplay").style.marginLeft = "-247px";
if( Level > 27 && Level <= 37 ) document.getElementById("LevelDisplay").style.marginLeft = "-227px";
if( Level > 37 && Level <= 43 ) document.getElementById("LevelDisplay").style.marginLeft = "-207px";
if( Level > 43 && Level <= 49 ) document.getElementById("LevelDisplay").style.marginLeft = "-187px";
if( Level > 49 && Level <= 55 ) document.getElementById("LevelDisplay").style.marginLeft = "-167px";
if( Level > 55 && Level <= 62 ) document.getElementById("LevelDisplay").style.marginLeft = "-147px";
if( Level > 62 && Level <= 68 ) document.getElementById("LevelDisplay").style.marginLeft = "-127px";
if( Level > 68 && Level <= 74 ) document.getElementById("LevelDisplay").style.marginLeft = "-107px";
if( Level > 74 && Level <= 80 ) document.getElementById("LevelDisplay").style.marginLeft = "-67px";
if( Level > 80 && Level <= 84 ) document.getElementById("LevelDisplay").style.marginLeft = "-47px";
if( Level > 84 && Level <= 89 ) document.getElementById("LevelDisplay").style.marginLeft = "-27px";
if( Level > 89 && Level <= 94 ) document.getElementById("LevelDisplay").style.marginLeft = "-7px";
if( Level > 94 && Level <= 100 ) document.getElementById("LevelDisplay").style.marginLeft = "12px";



document.getElementById("LevelDisplay").innerHTML = Level;

document.getElementById("LevelDisplay").style.position = "absolute";

document.getElementById("StateDisplay").innerHTML = State;



});

}