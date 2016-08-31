
function init() {
updateIS2data();

    setInterval(updateIS2data, 10000);
}

function updateIS2data(){
	
//Signal Strength//
if (WifiOn() == true){
if( WifiSignal() == 0 ) document.getElementById("wStrength").innerHTML = WifiID() + " - " + "poor";
if( WifiSignal() == 1 ) document.getElementById("wStrength").innerHTML = WifiID() + " - " + "fair";
if( WifiSignal() == 2 ) document.getElementById("wStrength").innerHTML = WifiID() + " - " + "good";
if( WifiSignal() == 3 ) document.getElementById("wStrength").innerHTML = WifiID() + " - " + "excellent";
}else{
document.getElementById("wStrength").innerHTML = "no wifi";
}


//Cellular Strength//

if (airplaneMode() == true){
document.getElementById("noCell").innerHTML = "no service";
document.getElementById("slider").style.marginLeft = "0px";
document.getElementById("wStrength").innerHTML = "no wifi";
}else{

document.getElementById("noCell").innerHTML = "";

if( getSignal() == 0 )
document.getElementById("slider").style.marginLeft = "0px";
if( getSignal() == 1 )
document.getElementById("slider").style.marginLeft = "-32px";
if( getSignal() == 2 )
document.getElementById("slider").style.marginLeft = "-50px";
if( getSignal() == 3 )
document.getElementById("slider").style.marginLeft = "-68px";
if( getSignal() == 4 )
document.getElementById("slider").style.marginLeft = "-86px";
if( getSignal() == 5 )
document.getElementById("slider").style.marginLeft = "-104px";
}

document.getElementById("slider").style.position = "absolute";


//Battery Percent//
document.getElementById("battLevel").innerHTML = "B" + getBatteryPercent() + "%";  


//Battery Image//
var Level = getBatteryPercent(), batteryImage;

if( Level > 0  && Level <= 2 )	batteryImage="Images/Battery/BatteryBG_1@2x.png";
if( Level > 2  && Level <= 5 )	batteryImage="Images/Battery/BatteryBG_2@2x.png";
if( Level > 5  && Level <= 10 ) batteryImage="Images/Battery/BatteryBG_3@2x.png";
if( Level > 10 && Level <= 20 ) batteryImage="Images/Battery/BatteryBG_4@2x.png.png";
if( Level > 20 && Level <= 25 ) batteryImage="Images/Battery/BatteryBG_5@2x.png";
if( Level > 25 && Level <= 35 ) batteryImage="Images/Battery/BatteryBG_6@2x.png";
if( Level > 35 && Level <= 45 ) batteryImage="Images/Battery/BatteryBG_7@2x.png";
if( Level > 45 && Level <= 50 ) batteryImage="Images/Battery/BatteryBG_8@2x.png";
if( Level > 50 && Level <= 55 ) batteryImage="Images/Battery/BatteryBG_9@2x.png";
if( Level > 55 && Level <= 65 ) batteryImage="Images/Battery/BatteryBG_10@2x.png";
if( Level > 65 && Level <= 70 ) batteryImage="Images/Battery/BatteryBG_11@2x.png";
if( Level > 70 && Level <= 80 ) batteryImage="Images/Battery/BatteryBG_12@2x.png";
if( Level > 80 && Level <= 85 ) batteryImage="Images/Battery/BatteryBG_13@2x.png";
if( Level > 85 && Level <= 90 ) batteryImage="Images/Battery/BatteryBG_14@2x.png";
if( Level > 90 && Level <= 95 ) batteryImage="Images/Battery/BatteryBG_15@2x.png";
if( Level > 95 && Level <= 98 ) batteryImage="Images/Battery/BatteryBG_16@2x.png";
if( Level > 98 && Level <= 100 ) batteryImage="Images/Battery/BatteryBG_17@2x.png";


document.getElementById("BatteryImage").src=batteryImage;


//Battery State//

if (getBatteryState() == 1){
document.getElementById("battState").innerHTML = discharging;
document.getElementById("bolt").style.opacity = "0";

}else{
document.getElementById("battState").innerHTML = charging;
document.getElementById("bolt").style.opacity = "1";

}


}
