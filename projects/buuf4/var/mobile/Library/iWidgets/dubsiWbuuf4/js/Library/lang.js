var language, weekday, month, smonth, sday, menu, settingstxt, updatedtxt, windchilltxt, windtxt, feeltxt, sunrisetxt, sunsettxt, textstringlater, humidtxt,

    warningtxt, elevationtxt, preciptxt, dewpointtxt, notxt, visibilitytxt, Fcondition;





//language="zh";// tester

     var charging = "charging";
     var discharging = "discharging";

if (language === "en") {

    weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    smonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    sday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    menu = ["Today", "Hourly", "Daily", "Settings"];

    settingstxt = ["24hr Clock", "Celsius", "Kph", "Weather Walls", "Update Weather"];

    updatedtxt = "Updated: ";

    windchilltxt = "Wind Chill: ";

    windtxt = "Wind: ";

    feeltxt = "Feels Like";

    sunrisetxt = "Sunrise: ";

    sunsettxt = "Sunset: ";

    textstringlater = "Later Today: ";

    humidtxt = "Humidity: ";

    warningtxt = "Warning ";

    elevationtxt = "Elevation: ";

    preciptxt = "Chance of rain: ";

    dewpointtxt = "Dewpoint: ";

    notxt = "No ";

    visibilitytxt = "Visibility: ";

    Fcondition = ["Tornado", "Tropical Storm", "Hurricane", "Thunderstorm", "Thunderstorm", "Snow", "Sleet", "Sleet", "Freezing Drizzle", "Drizzle", "Freezing Rain", "Showers", "Showers", "Flurries", "Snow", "Snow", "Snow", "Hail", "Sleet", "Dust", "Fog", "Haze", "Smoky", "Blustery", "Windy", "Cold", "Cloudy", "Cloudy", "Cloudy", "Cloudy", "Cloudy", "Clear", "Sunny", "Fair", "Fair", "Sleet", "Hot", "Thunderstorms", "Thunderstorms", "Thunderstorms", "Showers", "Heavy Snow", "Light Snow", "Heavy Snow", "Partly Cloudy", "Thunderstorm", "Snow", "Thunderstorm", "blank"];

} else if (language === "cz") {

    weekday = ["Nedele", "Pondeli", "Utery", "Streda", "Ctvrtek", "Patek", "Sobota"];

    month = ["Leden", "Unor", "Brezen", "Duben", "Kveten", "Cerven", "Cervenec", "Srpen", "Zari", "Rijen", "Listopad", "Prosinec"];

    smonth = ["Led", "Uno", "Bre", "Dub", "Kve", "Cer", "Cer", "Srp", "Zar", "Rij", "Lis", "Pro"];

    sday = ["Ne", "Po", "Ut", "St", "Ct", "Pa¡", "So"];

    menu = ["Dnes", "Hodinově", "denni", "settins"];

    settingstxt = ["24h zobrazen", "Celsius", "K/h", "Weather Walls", "Aktualizovat pocasi"];

    updatedtxt = "Aktualizováno: ";

    windchilltxt = "Escalofríos: ";

    windtxt = "Vítr: ";

    feeltxt = "cítí jako: ";

    sunrisetxt = "východ slunce: ";

    sunsettxt = "západ slunce: ";

    textstringlater = "Dnes později: ";

    humidtxt = "Vlhkost: ";

    warningtxt = "varování: ";

    elevationtxt = "Elevation: ";

    preciptxt = "Možnost deště: ";

    dewpointtxt = "rosný bod: ";

    notxt = "Ne ";

    visibilitytxt = "Viditelnost: ";

    Fcondition = ["Tornádo", "Tropická Bouře", "Hurikán", "Bouřka", "Bouřka", "Sněžení", "Plískanice", "Plískanice", "Mrazivý déšť", "Mrholení", "Mrazivý déšť", "Dešťové Přeháňky", "Dešťové Přeháňky", "Závany", "Sněžení", "Sněžení", "Sněžení", "Kroupy", "Plískanice", "Prach", "Mlha", "Opar", "Zakouřený", "Bouřlivý", "Větrný", "Studený", "zakalený", "zakalený", "zakalený", "zakalený", "zakalený", "Jasný", "Slunný", "Veletrh", "Veletrh", "Plískanice", "Horký", "bouřky", "bouřky", "bouřky", "dešťové přeháňky", "Sněžení", "Sněžení", "Sněžení", "Polojasno", "Bouřka", "Sněžení", "Bouřka", "blank"];

} else if (language === "it") {

    weekday = ["Domenica", "Lunedi", "Martedì", "Mercoledì", "Giovedi", "Venerdì", "Sabato"];

    month = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

    smonth = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];

    sday = ["Sun", "Mon", "Mar", "Mer", "Gio", "Ven", "Sat"];

    menu = ["Oggi", "Ogni Ora", "Quotidiano", "Impostazioni"];

    settingstxt = ["24hr Orologio", "Centigrado", "Kph", "Walls meteo", "Aggiornamento Meteo"];

    updatedtxt = "Aggiornato: ";

    windchilltxt = "Wind Chill: ";

    windtxt = "Vento: ";

    feeltxt = "Sembra";

    sunrisetxt = "Alba: ";

    sunsettxt = "Tramonto: ";

    textstringlater = "tardi oggi: ";

    humidtxt = "Umidita : ";

    warningtxt = "Avvertimento ";

    elevationtxt = "Elevazione: ";

    preciptxt = "Possibilita  di pioggia: ";

    dewpointtxt = "Punto di rugiada: ";

    notxt = "No ";

    visibilitytxt = "Visibilita: ";

    Fcondition = ["Tornado", "Tempesta Tropicale", "Uragano", "Temporali Forti", "Temporali", "Pioggia mista a Neve", "Nevischio", "Nevischio", "Pioggia Gelata", "Pioggerella", "Pioggia Ghiacciata", "Pioggia", "Pioggia", "Neve a Raffiche", "Neve Leggera", "Tempesta di Neve", "Neve", "Grandine", "Nevischio", "Irregolare", "Nebbia", "Foschia", "Fumoso", "Raffiche di Vento", "Ventoso", "Freddo", "Nuvoloso", "Molto Nuvoloso", "Molto Nuvoloso", "Nuvoloso", "Nuvoloso", "Sereno", "Sereno", "Bel Tempo", "Bel Tempo", "Pioggia e Grandine", "Caldo", "Temporali Isolati", "Temporali Sparsi", "Temporali Sparsi", "Rovesci Sparsi", "Neve Forte", "Nevicate Sparse", "Neve Forte", "Nuvoloso", "Rovesci Temporaleschi", "Rovesci di Neve", "Temporali isolati", "Non Disponibile"];

} else if (language === "sp") {

    weekday = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    smonth = ["Ene", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dic"];

    sday = ["Sol", "Mon", "Mar", "Mie", "Jue", "Vie", "Sat"];

    menu = ["Hoy", "Cada Hora", "Diario", "Ajustes"];

    settingstxt = ["Reloj 24 horas", "Celsio", "Kph", "Tiempo Paredes", "El Tiempo de Actualización"];

    updatedtxt = "Actualizado: ";

    windchilltxt = "Viento Helado: ";

    windtxt = "Viento: ";

    feeltxt = "Se siente como:";

    sunrisetxt = "Salida del sol: ";

    sunsettxt = "Puesta del sol: ";

    textstringlater = "Para hoy más tarde: ";

    humidtxt = "Humedad: ";

    warningtxt = "Advertencia: ";

    elevationtxt = "Elevacián: ";

    preciptxt = "Probabilidad de lluvia: ";

    dewpointtxt = "Punto de rocío: ";

    notxt = "No ";

    visibilitytxt = "Visibilidad: ";

    Fcondition = ["Tornado", "Tormenta Tropical", "Huracan", "Tormentas Electricas Severas", "Tormentas Electricas", "Mezcla de Lluvia y Nieve", "Mezcla de lluvia y aguanieve", "Mezcla de nieve y aguaniev", "Llovizna helada", "Llovizna", "Lluvia bajo cero", "Chubascos", "Chubascos", "Rafagas de nieve", "Ligeras precipitaciones de nieve", "Viento y nieve", "Nieve", "Granizo", "Aguanieve", "Polvareda", "Neblina", "Bruma", "Humeado", "Tempestuoso", "Vientoso", "Frio", "Nublado ", "Mayormente nublado", "Mayormente nublado", "despejado", "despejado", "Despejado", "Soleado", "Lindo", "Lindo", "Mezcla de lluvia y granizo", "Caluroso", "Tormentas electricas aisladas", "Tormentas electricas dispersas", "Tormentas electricas dispersas", "Chubascos dispersos", "Nieve fuerte", "Precipitaciones de nieve dispersas", "Nieve fuerte", "despejado", "Lluvia con truenos y relampagos", "Precipitaciones de nieve", "Tormentas aisladas", "No disponible"];

} else if (language === "de") {

    weekday = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

    month = ["Januar", "Februar", "Maerz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

    smonth = ["Jan", "Feb", "Mae", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez "];

    sday = ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"];

    menu = ["Momentan", "Stundlich", "Tag", "Einstellungen"];

    settingstxt = ["24-Stunden", "Celsius", "Kmh", "Wetter Walls", "Wetter -Update"];

    updatedtxt = "Aktualisiert: ";

    windchilltxt = "Windstill: ";

    windtxt = "Wind: ";

    feeltxt = "fühlt sich an wie";

    sunrisetxt = "Sonnenaufgang: ";

    sunsettxt = "Sonnenuntergang: ";

    textstringlater = "Im Laufe des Tages: ";

    humidtxt = "Luftfeuchtigkeit: ";

    warningtxt = "Warnung ";

    elevationtxt = "Hoch: ";

    preciptxt = "Niederschlag: ";

    dewpointtxt = "Taupunkt: ";

    notxt = "Nein";

    visibilitytxt = "Sichtbarkeit: ";

    Fcondition = ["Tornado", "Tropischer Sturm", "Wirbelsturm", "Schwere Gewitter", "Gewitter", "Regen und Schnee", "Graupelschauer", "Schneeregen", "Gefrierender Nieselregen", "Nieselregen", "Gefrierender Regen", "Schauer", "Schauer", "Schneegest&ouml;ber", "Leichte Schneeschauer", "Schneetreiben", "Schnee", "Hagel", "Schneeregen", "Staubig", "Nebelig", "Dunstschleier", "Dunstig", "St&uuml;rmisch", "Windig", "Kalt", "Bew&ouml;lkt", "Meist Bew&ouml;lkt", "Meist Bew&ouml;lkt", "Teilweise Bew&ouml;lkt", "Teilweise Bew&ouml;lkt", "Klar", "Sonnig", "Heiter", "Heiter", "Regen und Hagel", "Heiss", "&Ouml;rtliche Gewitter", "Vereinzelte Gewitte", "Vereinzelte Gewitte", "Vereinzelte Schauer", "Starker Schneefall", "Vereinzelte Schneeschauer", "Starker Schneefall", "Teilweise Bew&ouml;lkt", "Gewitter", "Scheeschauer", "Ouml;rtliche Gewitterschauer", "Nicht Verfuegbar"];

} else if (language === "fr") {

    weekday = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    month = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];

    smonth = ["Jan", "Fev", "Mar", "Avr", "Mai", "Jui", "Jui", "Aout", "Sep", "Oct", "Nov", "Dec"];

    sday = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

    menu = ["Aujourd'hui", "Horaire", "Tous les jours", "Parametres"];

    settingstxt = ["Horloge 24 heures", "Celsius", "Kph", "Paredes de tiempo", "Mise à jour Météo"];

    updatedtxt = "Mise à jour: ";

    windchilltxt = "Wind Chill: ";

    windtxt = "Vent: ";

    feeltxt = "Ressenti";

    sunrisetxt = "Lever du soleil: ";

    sunsettxt = "Coucher du soleil: ";

    textstringlater = "Plus tard aujourd'hui: ";

    humidtxt = "Humidity: ";

    warningtxt = "Avertissement: ";

    elevationtxt = "Élévation: ";

    preciptxt = "Risque de pluie: ";

    dewpointtxt = "Point de rosee: ";

    notxt = "No ";

    visibilitytxt = "Visibility: ";

    Fcondition = ["Tornade", "Orage Tropical", "Ouragan", "Orages Violents", "Orages", "Neige", "Neige Fondue", "Neige Fondue", "Gelée Bruine", "Bruine", "Gelée Pluie", "Averses", "Averses", "Quelques Flocons", "Faibles Chutes de Neige", "Rafales de Neige", "Neige", "Grêle", "Neige Fondue", "Poussière", "Brouillard", "Brume", "Brumeux", "Enfumée", "Grand Vent", "Froide", "Nuageux", "Nuageux", "Nuageux", "Nuageux", "Nuageux", "Temps Clair", "Ensoleillée", "Beau Temps", "Beau Temps", "Neige Fondue", "Faire Chaud", "Orages Eparses", "Orages Eparses", "Orages Eparses", "Averses Eparses", "Fortes Chutes de Neige", "Chutes de Neige Eparses", "Fortes Chutes de Neige", "Partiellement Nuageux", "Orages", "Chute de Neige", "Orage", "Non Disponible"];

} else if (language === "zh") {

    weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

    month = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

    smonth = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

    sday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

    menu = ["Today", "Hourly", "Daily", "Settings"];

    settingstxt = ["24hr Clock", "Celsius", "Kph", "Weather Walls", "Update Weather"];

    updatedtxt = "Updated: ";

    windchilltxt = "风向: ";

    windtxt = "风向: ";

    feeltxt = "感覺像:";

    sunrisetxt = "日出: ";

    sunsettxt = "日落: ";

    textstringlater = "Later Today:";

    elevationtxt = "æµ·æ‹”: ";

    humidtxt = "湿度: ";

    warningtxt = "Warning ";

    elevationtxt = "Elevation: ";

    preciptxt = "Chance of rain: ";

    dewpointtxt = "Dewpoint: ";

    notxt = "No ";

    visibilitytxt = "能见度: ";

    Fcondition = [	"风卷残云",

			"热带风暴",

			"狂风暴雨",

			"电闪雷鸣",

			"电闪雷鸣",

			"雨雪霏霏",

			"雨雪霏霏",

			"雨雪纷纷",

			"寒风冷雨",

			"蒙蒙细雨",

			"凄风冷雨",

			"疾风骤雨",

			"疾风骤雨",

			"俄而雪骤",

			"流风回雪",

			"狂风暴雪",

			"大雪纷飞",

			"天降冰雹",

			"雨雪霏霏",

			"飞沙走石",

			"云迷雾锁",

			"十面霾伏",

			"烟雾弥漫",

			"风起云涌",

			"风和日丽",

			"天寒地冻",

			"乌云蔽日",

			"浮云蔽日",

			"浮云蔽日",

			"云淡风轻",

			"云淡风轻",

			"晴空万里",

			"阳光明媚",

			"天朗气清",

			"天朗气清",

			"冰雹带雨",

			"骄阳似火",

			"霹雳列缺",

			"电闪雷鸣",

			"电闪雷鸣",

			"急风骤雨",

			"大雪纷飞",

			"骤雪初歇",

			"大雪纷飞",

			"云淡风轻",

			"雷阵雨",

			"雨雪霏霏",

			"霹雳列缺",

			"自行判断"];

} else {

     var charging = "charging";
     var discharging = "discharging";

    weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    smonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    sday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    menu = ["Today", "Hourly", "Daily", "Settings"];

    settingstxt = ["24hr Clock", "Celsius", "Kph", "Weather Walls", "Update Weather"];

    updatedtxt = "Updated: ";

    windchilltxt = "Wind Chill: ";

    windtxt = "Wind: ";

    feeltxt = "Feels Like";

    sunrisetxt = "Sunrise: ";

    sunsettxt = "Sunset: ";

    textstringlater = "Later Today:";

    humidtxt = "Humidity: ";

    warningtxt = "Warning ";

    elevationtxt = "Elevation: ";

    preciptxt = "Chance of rain: ";

    dewpointtxt = "Dewpoint: ";

    notxt = "No ";

    visibilitytxt = "Visibility: ";

    Fcondition = ["Tornado", "Tropical Storm", "Hurricane", "Thunderstorm", "Thunderstorm", "Snow", "Sleet", "Sleet", "Freezing Drizzle", "Drizzle", "Freezing Rain", "Showers", "Showers", "Flurries", "Snow", "Snow", "Snow", "Hail", "Sleet", "Dust", "Fog", "Haze", "Smoky", "Blustery", "Windy", "Cold", "Cloudy", "Cloudy", "Cloudy", "Cloudy", "Cloudy", "Clear", "Sunny", "Fair", "Fair", "Sleet", "Hot", "Thunderstorms", "Thunderstorms", "Thunderstorms", "Showers", "Heavy Snow", "Light Snow", "Heavy Snow", "Partly Cloudy", "Thunderstorm", "Snow", "Thunderstorm", "blank"];

}