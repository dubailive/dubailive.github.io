
function init() {
updateIS2data();

    setInterval(updateIS2data, 15000);
}

function updateIS2data(){
	
//Signal Strength//
if (WifiOn() == true){
document.getElementById("WifiImage").src="Images/Signals/Wifi" + WifiSignal() + ".png";
}else{
document.getElementById("WifiImage").src = "Images/Signals/NoWifi.png";
}


//Cellular Strength//
if (airplaneMode() == true){
document.getElementById("CellImage").src="Images/Signals/NoCell.png";
}else{
document.getElementById("CellImage").src="Images/Signals/Cell" + getSignal() + ".png";
}


//Battery Percent//
document.getElementById("battLevel").innerHTML = getBatteryPercent() + "%";  


//Battery Image//
var Level = getBatteryPercent(), batteryImage;

if( Level > 0  && Level <= 2 )	batteryImage="Images/Battery/B1.png";
if( Level > 2  && Level <= 5 )	batteryImage="Images/Battery/B2.png";
if( Level > 5 && Level <= 10 )	batteryImage="Images/Battery/B3.png";
if( Level > 10 && Level <= 20 ) batteryImage="Images/Battery/B4.png";
if( Level > 20 && Level <= 25 ) batteryImage="Images/Battery/B5.png";
if( Level > 25 && Level <= 35 ) batteryImage="Images/Battery/B6.png";
if( Level > 35 && Level <= 45 ) batteryImage="Images/Battery/B7.png";
if( Level > 45 && Level <= 50 ) batteryImage="Images/Battery/B8.png";
if( Level > 50 && Level <= 55 ) batteryImage="Images/Battery/B9.png";
if( Level > 55 && Level <= 65 ) batteryImage="Images/Battery/B10.png";
if( Level > 65 && Level <= 70 ) batteryImage="Images/Battery/B11.png";
if( Level > 70 && Level <= 80 ) batteryImage="Images/Battery/B12.png";
if( Level > 80 && Level <= 85 ) batteryImage="Images/Battery/B13.png";
if( Level > 85 && Level <= 90 ) batteryImage="Images/Battery/B14.png";
if( Level > 90 && Level <= 95 ) batteryImage="Images/Battery/B15.png";
if( Level > 95 && Level <= 98 ) batteryImage="Images/Battery/B16.png";
if( Level > 98 && Level <= 100 ) batteryImage="Images/Battery/B17.png";

document.getElementById("BatteryImage").src=batteryImage;


//Battery State//
if (getBatteryState() == 1){
document.getElementById("battState").innerHTML = discharging;
document.getElementById("battState").style.color = "lightblue";
}else{
document.getElementById("battState").innerHTML = charging;
document.getElementById("battState").style.color = "#e35b2a";
}


//RAM Stats//
document.getElementById("freeRam").innerHTML = getRam() + "mb" + " " + "free"; 


//RAM Image//

var Fram = getRam(), framImage;
if( Fram > 0  && Fram <= 50 )  framImage="Images/RamFree/R1.png";
if( Fram > 50  && Fram <= 100 )  framImage="Images/RamFree/R2.png";
if( Fram > 100 && Fram <= 150 )  framImage="Images/RamFree/R3.png";
if( Fram > 150 && Fram <= 200 ) framImage="Images/RamFree/R4.png";
if( Fram > 200 && Fram <= 250 ) framImage="Images/RamFree/R5.png";
if( Fram > 250 && Fram <= 300 ) framImage="Images/RamFree/R6.png";
if( Fram > 300 && Fram <= 350 ) framImage="Images/RamFree/R7.png";
if( Fram > 350 && Fram <= 400 ) framImage="Images/RamFree/R8.png";
if( Fram > 400 && Fram <= 450 ) framImage="Images/RamFree/R9.png";
if( Fram > 450 && Fram <= 500 ) framImage="Images/RamFree/R10.png";
if( Fram > 500 && Fram <= 550 ) framImage="Images/RamFree/R11.png";
if( Fram > 550 && Fram <= 600 ) framImage="Images/RamFree/R12.png";
if( Fram > 600 && Fram <= 650 ) framImage="Images/RamFree/R13.png";
if( Fram > 650 && Fram <= 700 ) framImage="Images/RamFree/R14.png";
if( Fram > 700 && Fram <= 750 ) framImage="Images/RamFree/R15.png";
if( Fram > 750 && Fram <= 800 ) framImage="Images/RamFree/R16.png";
if( Fram > 800 && Fram <= 850 ) framImage="Images/RamFree/R17.png";
if( Fram > 850 && Fram <= 900 ) framImage="Images/RamFree/R18.png";
if( Fram > 900 && Fram <= 950 ) framImage="Images/RamFree/R19.png";
if( Fram > 950 && Fram <= 1000 ) framImage="Images/RamFree/R20.png";
document.getElementById("FramImage").src=framImage;

//devicename//
document.getElementById("dName").innerHTML = deviceName();

}

