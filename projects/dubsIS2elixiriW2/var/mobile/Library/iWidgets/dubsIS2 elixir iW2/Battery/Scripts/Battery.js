
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


if( Level == 1 ) document.getElementById("BatteryImage").src="Images/Battery/1@2x.png";
if( Level == 2 ) document.getElementById("BatteryImage").src="Images/Battery/2@2x.png";
if( Level == 3 ) document.getElementById("BatteryImage").src="Images/Battery/3@2x.png";
if( Level == 4 ) document.getElementById("BatteryImage").src="Images/Battery/4@2x.png";
if( Level == 5 ) document.getElementById("BatteryImage").src="Images/Battery/5@2x.png";
if( Level == 6 ) document.getElementById("BatteryImage").src="Images/Battery/6@2x.png";
if( Level == 7 ) document.getElementById("BatteryImage").src="Images/Battery/7@2x.png";
if( Level == 8 ) document.getElementById("BatteryImage").src="Images/Battery/8@2x.png";
if( Level == 9 ) document.getElementById("BatteryImage").src="Images/Battery/9@2x.png";
if( Level == 10 ) document.getElementById("BatteryImage").src="Images/Battery/10@2x.png";
if( Level == 11 ) document.getElementById("BatteryImage").src="Images/Battery/11@2x.png";
if( Level == 12 ) document.getElementById("BatteryImage").src="Images/Battery/12@2x.png";
if( Level == 13 ) document.getElementById("BatteryImage").src="Images/Battery/13@2x.png";
if( Level == 14 ) document.getElementById("BatteryImage").src="Images/Battery/14@2x.png";
if( Level == 15 ) document.getElementById("BatteryImage").src="Images/Battery/15@2x.png";
if( Level == 16 ) document.getElementById("BatteryImage").src="Images/Battery/16@2x.png";
if( Level == 17 ) document.getElementById("BatteryImage").src="Images/Battery/17@2x.png";
if( Level == 18 ) document.getElementById("BatteryImage").src="Images/Battery/18@2x.png";
if( Level == 19 ) document.getElementById("BatteryImage").src="Images/Battery/19@2x.png";
if( Level == 20 ) document.getElementById("BatteryImage").src="Images/Battery/20@2x.png";
if( Level == 21 ) document.getElementById("BatteryImage").src="Images/Battery/21@2x.png";
if( Level == 22 ) document.getElementById("BatteryImage").src="Images/Battery/22@2x.png";
if( Level == 23 ) document.getElementById("BatteryImage").src="Images/Battery/23@2x.png";
if( Level == 24 ) document.getElementById("BatteryImage").src="Images/Battery/24@2x.png";
if( Level == 25 ) document.getElementById("BatteryImage").src="Images/Battery/25@2x.png";
if( Level == 26 ) document.getElementById("BatteryImage").src="Images/Battery/26@2x.png";
if( Level == 27 ) document.getElementById("BatteryImage").src="Images/Battery/27@2x.png";
if( Level == 28 ) document.getElementById("BatteryImage").src="Images/Battery/28@2x.png";
if( Level == 29 ) document.getElementById("BatteryImage").src="Images/Battery/29@2x.png";
if( Level == 30 ) document.getElementById("BatteryImage").src="Images/Battery/30@2x.png";
if( Level == 31 ) document.getElementById("BatteryImage").src="Images/Battery/31@2x.png";
if( Level == 32 ) document.getElementById("BatteryImage").src="Images/Battery/32@2x.png";
if( Level == 33 ) document.getElementById("BatteryImage").src="Images/Battery/33@2x.png";
if( Level == 34 ) document.getElementById("BatteryImage").src="Images/Battery/34@2x.png";
if( Level == 35 ) document.getElementById("BatteryImage").src="Images/Battery/35@2x.png";
if( Level == 36 ) document.getElementById("BatteryImage").src="Images/Battery/36@2x.png";
if( Level == 37 ) document.getElementById("BatteryImage").src="Images/Battery/37@2x.png";
if( Level == 38 ) document.getElementById("BatteryImage").src="Images/Battery/38@2x.png";
if( Level == 39 ) document.getElementById("BatteryImage").src="Images/Battery/39@2x.png";
if( Level == 40 ) document.getElementById("BatteryImage").src="Images/Battery/40@2x.png";
if( Level == 41 ) document.getElementById("BatteryImage").src="Images/Battery/41@2x.png";
if( Level == 42 ) document.getElementById("BatteryImage").src="Images/Battery/42@2x.png";
if( Level == 43 ) document.getElementById("BatteryImage").src="Images/Battery/43@2x.png";
if( Level == 44 ) document.getElementById("BatteryImage").src="Images/Battery/44@2x.png";
if( Level == 45 ) document.getElementById("BatteryImage").src="Images/Battery/45@2x.png";
if( Level == 46 ) document.getElementById("BatteryImage").src="Images/Battery/46@2x.png";
if( Level == 47 ) document.getElementById("BatteryImage").src="Images/Battery/47@2x.png";
if( Level == 48 ) document.getElementById("BatteryImage").src="Images/Battery/48@2x.png";
if( Level == 49 ) document.getElementById("BatteryImage").src="Images/Battery/49@2x.png";
if( Level == 50 ) document.getElementById("BatteryImage").src="Images/Battery/50@2x.png";
if( Level == 51 ) document.getElementById("BatteryImage").src="Images/Battery/51@2x.png";
if( Level == 52 ) document.getElementById("BatteryImage").src="Images/Battery/52@2x.png";
if( Level == 53 ) document.getElementById("BatteryImage").src="Images/Battery/53@2x.png";
if( Level == 54 ) document.getElementById("BatteryImage").src="Images/Battery/54@2x.png";
if( Level == 55 ) document.getElementById("BatteryImage").src="Images/Battery/55@2x.png";
if( Level == 56 ) document.getElementById("BatteryImage").src="Images/Battery/56@2x.png";
if( Level == 57 ) document.getElementById("BatteryImage").src="Images/Battery/57@2x.png";
if( Level == 58 ) document.getElementById("BatteryImage").src="Images/Battery/58@2x.png";
if( Level == 59 ) document.getElementById("BatteryImage").src="Images/Battery/59@2x.png";
if( Level == 60 ) document.getElementById("BatteryImage").src="Images/Battery/60@2x.png";
if( Level == 61 ) document.getElementById("BatteryImage").src="Images/Battery/61@2x.png";
if( Level == 62 ) document.getElementById("BatteryImage").src="Images/Battery/62@2x.png";
if( Level == 63 ) document.getElementById("BatteryImage").src="Images/Battery/63@2x.png";
if( Level == 64 ) document.getElementById("BatteryImage").src="Images/Battery/64@2x.png";
if( Level == 65 ) document.getElementById("BatteryImage").src="Images/Battery/65@2x.png";
if( Level == 66 ) document.getElementById("BatteryImage").src="Images/Battery/66@2x.png";
if( Level == 67 ) document.getElementById("BatteryImage").src="Images/Battery/67@2x.png";
if( Level == 68 ) document.getElementById("BatteryImage").src="Images/Battery/68@2x.png";
if( Level == 69 ) document.getElementById("BatteryImage").src="Images/Battery/69@2x.png";
if( Level == 70 ) document.getElementById("BatteryImage").src="Images/Battery/70@2x.png";
if( Level == 71 ) document.getElementById("BatteryImage").src="Images/Battery/71@2x.png";
if( Level == 72 ) document.getElementById("BatteryImage").src="Images/Battery/72@2x.png";
if( Level == 73 ) document.getElementById("BatteryImage").src="Images/Battery/73@2x.png";
if( Level == 74 ) document.getElementById("BatteryImage").src="Images/Battery/74@2x.png";
if( Level == 75 ) document.getElementById("BatteryImage").src="Images/Battery/75@2x.png";
if( Level == 76 ) document.getElementById("BatteryImage").src="Images/Battery/76@2x.png";
if( Level == 77 ) document.getElementById("BatteryImage").src="Images/Battery/77@2x.png";
if( Level == 78 ) document.getElementById("BatteryImage").src="Images/Battery/78@2x.png";
if( Level == 79 ) document.getElementById("BatteryImage").src="Images/Battery/79@2x.png";
if( Level == 80 ) document.getElementById("BatteryImage").src="Images/Battery/80@2x.png";
if( Level == 81 ) document.getElementById("BatteryImage").src="Images/Battery/81@2x.png";
if( Level == 82 ) document.getElementById("BatteryImage").src="Images/Battery/82@2x.png";
if( Level == 83 ) document.getElementById("BatteryImage").src="Images/Battery/83@2x.png";
if( Level == 84 ) document.getElementById("BatteryImage").src="Images/Battery/84@2x.png";
if( Level == 85 ) document.getElementById("BatteryImage").src="Images/Battery/85@2x.png";
if( Level == 86 ) document.getElementById("BatteryImage").src="Images/Battery/86@2x.png";
if( Level == 87 ) document.getElementById("BatteryImage").src="Images/Battery/87@2x.png";
if( Level == 88 ) document.getElementById("BatteryImage").src="Images/Battery/88@2x.png";
if( Level == 89 ) document.getElementById("BatteryImage").src="Images/Battery/89@2x.png";
if( Level == 90 ) document.getElementById("BatteryImage").src="Images/Battery/90@2x.png";
if( Level == 91 ) document.getElementById("BatteryImage").src="Images/Battery/91@2x.png";
if( Level == 92 ) document.getElementById("BatteryImage").src="Images/Battery/92@2x.png";
if( Level == 93 ) document.getElementById("BatteryImage").src="Images/Battery/93@2x.png";
if( Level == 94 ) document.getElementById("BatteryImage").src="Images/Battery/94@2x.png";
if( Level == 95 ) document.getElementById("BatteryImage").src="Images/Battery/95@2x.png";
if( Level == 96 ) document.getElementById("BatteryImage").src="Images/Battery/96@2x.png";
if( Level == 97 ) document.getElementById("BatteryImage").src="Images/Battery/97@2x.png";
if( Level == 98 ) document.getElementById("BatteryImage").src="Images/Battery/98@2x.png";
if( Level == 99 ) document.getElementById("BatteryImage").src="Images/Battery/99@2x.png";
if( Level == 100 ) document.getElementById("BatteryImage").src="Images/Battery/100@2x.png";



document.getElementById("LevelDisplay").innerHTML = Level +"%";
document.getElementById("StateDisplay").innerHTML = State;

});

}