/* ------ Ian Nicoll & Dacal ------ */
/****************************
*	  	 touch event	    *
*   Version 1.0 08.08.2012  *
*     created by oldster    *
*    http://itheming.de/    *
*							*
*   angepasst von TEAMIOS   *
*		  D-Shin		    * 
****************************/
var mtouch = false;
function touch(event) {
    var element = event.currentTarget;
    if(mtouch){
		mtouch=false;
		            //document.getElementById("touchrechtskontainer").style.opacity="1.0";
					//document.getElementById("touchrechtskontainer").style.webkitTransform="translateX(0px)";
					
					//document.getElementById("touchlinkskontainer").style.opacity="1.0";
					//document.getElementById("touchlinkskontainer").style.webkitTransform="translateX(0px)";
					
					
			
	               document.getElementById("forecast").style.opacity="0.0";
		
		document.getElementById("forecast").style.webkitTransform="fade-in";
	forecastdisplay = true;
	               
				   //document.getElementById("forecastHour1").style.opacity="1.0";
		
		//document.getElementById("forecastHour1").style.webkitTransform="translateY(160px)";
	//forecastdisplay = true;
	
					}
	
	
	
	else{
		mtouch=true;
		            //document.getElementById("touchrechtskontainer").style.opacity="0.0";
					//document.getElementById("touchrechtskontainer").style.webkitTransform="translateX(160px)";
					
					//document.getElementById("touchlinkskontainer").style.opacity="0.0";
					
					//document.getElementById("touchlinkskontainer").style.webkitTransform="translateX(-160px)";
					
	
	              document.getElementById("forecast").style.opacity="1.0";
		
		document.getElementById("forecast").style.webkitTransform="translateY(160px)";
	forecastdisplay = false;
	              
				  //document.getElementById("forecastHour1").style.opacity="0";
		
		//document.getElementById("forecastHour1").style.webkitTransform="translateY(0px)";
	//forecastdisplay = false;
					
					
		}
						 
}