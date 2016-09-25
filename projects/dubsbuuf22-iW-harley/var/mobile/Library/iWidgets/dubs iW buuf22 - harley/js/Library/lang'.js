var language, weekday, month, smonth, sday, menu, settingstxt, updatedtxt, windchilltxt, windtxt, feeltxt, sunrisetxt, sunsettxt, textstringlater, humidtxt,
    warningtxt, elevationtxt, preciptxt, dewpointtxt, notxt, visibilitytxt, Fcondition;


//language="zh";// tester
if (language === "en") {
    weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
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
    weekday = ["NedÄ›le", "PondÄ›lÃ­", "ÃšterÃ½", "StÅ™eda", "ÄŒtvrtek", "PÃ¡tek", "Sobota"];
    month = ["Leden", "Ãšnor", "BÅ™ezen", "Duben", "KvÄ›ten", "ÄŒerven", "ÄŒervenec", "Srpen", "ZÃ¡Å™Ã­", "Å˜Ã­jen", "Listopad", "Prosinec"];
    smonth = ["Led", "Ãšno", "BÅ™e", "Dub", "KvÄ›", "ÄŒen", "ÄŒec", "Srp", "ZÃ¡Å™", "Å˜Ã­j", "Lis", "Pro"];
    sday = ["Ne", "Po", "Ãšt", "St", "ÄŒt", "PÃ¡", "So"];
    menu = ["Dnes", "Po hodinÃ¡ch", "Po dnech", "NastavenÃ­"];
    settingstxt = ["24h zobrazenÃ­", "Celsius", "K/h", "Weather Walls", "Aktualizovat poÄasÃ­"];
    updatedtxt = "AktualizovÃ¡no: ";
    windchilltxt = "EfektivnÃ­ teplota: ";
    windtxt = "VÃ­tr: ";
    feeltxt = "PocitovÄ›";
    sunrisetxt = "VÃ½chod slunce: ";
    sunsettxt = "ZÃ¡pad slunce: ";
    textstringlater = "Dnes pozdÄ›ji: ";
    humidtxt = "Vlhkost: ";
    warningtxt = "VarovÃ¡nÃ­ ";
    elevationtxt = "Elevation: ";
    preciptxt = "Å ance na dÃ©Å¡Å¥: ";
    dewpointtxt = "RosnÃ½ bod: ";
    notxt = "Ne ";
    visibilitytxt = "Viditelnost: ";
    Fcondition = ["TornÃ¡do", "TropickÃ¡ bouÅ™e", "HurikÃ¡n", "BouÅ™e", "BouÅ™e", "SnÄ›Å¾enÃ­", "DÃ©Å¡Å¥ a snÃ­h", "DÃ©Å¡Å¥ a snÃ­h", "MrznoucÃ­ mrholenÃ­", "MrholenÃ­", "MrznoucÃ­ dÃ©Å¡Å¥", "PÅ™ehÃ¡Åˆky", "PÅ™ehÃ¡Åˆky", "Poryvy vÄ›tru", "SnÄ›Å¾enÃ­", "SnÄ›Å¾enÃ­", "SnÄ›Å¾enÃ­", "Kroupy", "DÃ©Å¡Å¥ a snÃ­h", "Prach", "Mlhy", "Å˜Ã­dkÃ© mlhy", "KouÅ™", "VÄ›trno s bouÅ™kami", "VÄ›trno", "Chladno", "OblaÄno", "OblaÄno", "OblaÄno", "OblaÄno", "OblaÄno", "Jasno", "SluneÄno", "KrÃ¡snÄ›", "KrÃ¡snÄ›", "DÃ©Å¡Å¥ a snÃ­h", "Horko", "BouÅ™e", "BouÅ™e", "BouÅ™e", "PÅ™ehÃ¡Åˆky", "HustÃ© snÄ›Å¾enÃ­", "LehkÃ© snÄ›Å¾enÃ­", "HustÃ© snÄ›Å¾enÃ­", "Polojasno", "BouÅ™e", "SnÄ›Å¾enÃ­", "BouÅ™e", "prÃ¡zdnÃ©"];
} else if (language === "it") {
    weekday = ['Domenica', 'Luned&#236', 'Marted&#236', 'Mercoled&#236', 'Gioved&#236', 'Venerd&#236', 'Sabato'];
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
    textstringlater = "PiÃ¹ tardi oggi: ";
    humidtxt = "UmiditÃ : ";
    warningtxt = "Avvertimento ";
    elevationtxt = "Elevazione: ";
    preciptxt = "PossibilitÃ  di pioggia: ";
    dewpointtxt = "Punto di rugiada: ";
    notxt = "No ";
    visibilitytxt = "VisibilitÃ : ";
    Fcondition = ["Tornado", "Tempesta Tropicale", "Uragano", "Temporali Forti", "Temporali", "Pioggia mista a Neve", "Nevischio", "Nevischio", "Pioggia Gelata", "Pioggerella", "Pioggia Ghiacciata", "Pioggia", "Pioggia", "Neve a Raffiche", "Neve Leggera", "Tempesta di Neve", "Neve", "Grandine", "Nevischio", "Irregolare", "Nebbia", "Foschia", "Fumoso", "Raffiche di Vento", "Ventoso", "Freddo", "Nuvoloso", "Molto Nuvoloso", "Molto Nuvoloso", "Nuvoloso", "Nuvoloso", "Sereno", "Sereno", "Bel Tempo", "Bel Tempo", "Pioggia e Grandine", "Caldo", "Temporali Isolati", "Temporali Sparsi", "Temporali Sparsi", "Rovesci Sparsi", "Neve Forte", "Nevicate Sparse", "Neve Forte", "Nuvoloso", "Rovesci Temporaleschi", "Rovesci di Neve", "Temporali isolati", "Non Disponibile"];
} else if (language === "sp") {
    weekday = ["Domingo", "Lunes", "Martes", "MiÃ©rcoles", "Jueves", "Viernes", "SÃ¡bado"];
    month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    smonth = ["Ene", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dic"];
    sday = ["Sol", "Mon", "Mar", "Mie", "Jue", "Vie", "Sat"];
    menu = ["Hoy", "Cada Hora", "Diario", "Ajustes"];
    settingstxt = ["Reloj 24 horas", "Celsio", "Kph", "Tiempo Paredes", "ActualizaciÃ³n Tiempo"];
    updatedtxt = "Actualizado: ";
    windchilltxt = "Viento Helado: ";
    windtxt = "Viento: ";
    feeltxt = "SensaciÃ³n tÃ©rmica";
    sunrisetxt = "Salida del sol: ";
    sunsettxt = "Puesta del sol: ";
    textstringlater = "Para hoy mÃ¡s tarde: ";
    humidtxt = "Humedad: ";
    warningtxt = "Advertencia ";
    elevationtxt = "ElevaciÃ³n: ";
    preciptxt = "Probabilidad de lluvia: ";
    dewpointtxt = "Punto de rocÃ­o: ";
    notxt = "No ";
    visibilitytxt = "Visibilidad: ";
    Fcondition = ["Tornado", "Tormenta Tropical", "Huracan", "Tormentas Electricas Severas", "Tormentas Electricas", "Mezcla de Lluvia y Nieve", "Mezcla de lluvia y aguanieve", "Mezcla de nieve y aguaniev", "Llovizna helada", "Llovizna", "Lluvia bajo cero", "Chubascos", "Chubascos", "Rafagas de nieve", "Ligeras precipitaciones de nieve", "Viento y nieve", "Nieve", "Granizo", "Aguanieve", "Polvareda", "Neblina", "Bruma", "Humeado", "Tempestuoso", "Vientoso", "Frio", "Nublado ", "Mayormente nublado", "Mayormente nublado", "despejado", "despejado", "Despejado", "Soleado", "Lindo", "Lindo", "Mezcla de lluvia y granizo", "Caluroso", "Tormentas electricas aisladas", "Tormentas electricas dispersas", "Tormentas electricas dispersas", "Chubascos dispersos", "Nieve fuerte", "Precipitaciones de nieve dispersas", "Nieve fuerte", "despejado", "Lluvia con truenos y relampagos", "Precipitaciones de nieve", "Tormentas aisladas", "No disponible"];
} else if (language === "de") {
    weekday = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    month = ["Januar", "Februar", "MÃ¤rz", "April", "Mai", "Juni", "Ju li", "August", "September", "Oktober", "November", "Dez ember"];
    smonth = ["Jan", "Feb", "MÃ¤", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez "];
    sday = ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"];
    menu = ["Momentan", "StÃ¼ndlich", "Tag", "Einstellungen"];
    settingstxt = ["24-Stunden", "Celsius", "Kmh", "Wetter Walls", "Wetter -Update"];
    updatedtxt = "Aktualisiert: ";
    windchilltxt = "Windstill: ";
    windtxt = "Wind: ";
    feeltxt = "GefÃ¼hlt wie";
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
    Fcondition = ["Tornado", "Tropischer Sturm", "Wirbelsturm", "Schwere Gewitter", "Gewitter", "Regen und Schnee", "Graupelschauer", "Schneeregen", "Gefrierender Nieselregen", "Nieselregen", "Gefrierender Regen", "Schauer", "Schauer", "SchneegestÃ¶ber", "Leichte Schneeschauer", "Schneetreiben", "Schnee", "Hagel", "Schneeregen", "Staubig", "Nebelig", "Dunstschleier", "Dunstig", "StÃ¼rmisch", "Windig", "Kalt", "BewÃ¶lkt", "Meist BewÃ¶lkt", "Meist BewÃ¶lkt", "BewÃ¶lkt", "BewÃ¶lkt", "Klar", "Sonnig", "Heiter", "Heiter", "Regen und Hagel", "Heiss", "Ã–rtliche Gewitter", "Vereinzelte Gewitter", "Vereinzelte Gewitter", "Vereinzelte Schauer", "Starker Schneefall", "Vereinzelte Schneeschauer", "Starker Schneefall", "BewÃ¶lkt", "Gewitter", "Scheeschauer", "Ã–rtliche Gewitterschauer", "Nicht VerfÃ¼gbar"];
} else if (language === "fr") {
    weekday = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    month = ["Janvie", "FÃ©vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "AoÃ»t", "Septembre", "Octobre", "Novembre", "DÃ©cembre"];
    smonth = ["Jan", "FÃ©v", "Mar", "Avr", "Mai", "Jui", "Jui", "AoÃ»", "Sep", "Oct", "Nov", "DÃ©c"];
    sday = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
    menu = ["Aujourd'hui", "Horaire", "Tous les jours", "ParamÃ¨tres"];
    settingstxt = ["Horloge 24 heures", "Celsius", "Kph", "MÃ©tÃ©o Murs", "Mise Ã  jour MÃ©tÃ©o"];
    updatedtxt = "Mise Ã  jour: ";
    windchilltxt = "Wind Chill: ";
    windtxt = "Vent: ";
    feeltxt = "Ressenti";
    sunrisetxt = "Lever du soleil: ";
    sunsettxt = "Coucher du soleil: ";
    textstringlater = "Plus tard aujourd'hui: ";
    humidtxt = "HumiditÃ©: ";
    warningtxt = "Avertissement ";
    elevationtxt = "ElÃ©vation: ";
    preciptxt = "Risque de pluie: ";
    dewpointtxt = "Point de rosÃ©e: ";
    notxt = "No ";
    visibilitytxt = "VisibilitÃ©: ";
    Fcondition = ["Tornade", "Tropical", "Ouragan", "Orages Violents", "Orages", "Pluie", "Pluie", "Neige", "Bruine", "Bruine", "Pluie", "Averses", "Averses", "Quelques Flocons", "Faibles Chutes de Neige", "Rafales de Neige", "Neige", "GrÃƒÂªle", "Neige Fondue", "PoussiÃƒÂ©reux", "Brouillard", "Brume", "Brumeux", "TempÃƒÂªte", "Vent", "Temps Froid", "Temps Nuageux ", "TrÃƒÂ¨s Nuageux", "TrÃƒÂ¨s Nuageux", "Nuageux", "Nuageux", "Temps Clair", "Ensoleille", "Beau Temps", "Beau Temps", "Pluie et GrÃƒÂªles", "Temps Chaud", "Orages IsolÃƒÂ©s", "Orages Eparses", "Orages Eparses", "Averses Eparses", "Fortes Chutes de Neige", "Chutes de Neige Eparses", "Fortes Chutes de Neige", "Nuageux", "Orages", "Chute de Neige", "Orages IsolÃƒÂ©s", "Non Disponible"];
} else if (language === "zh") {
    weekday = ['æ˜ŸæœŸæ—¥', 'æ˜ŸæœŸä¸€', 'æ˜ŸæœŸäºŒ', 'æ˜ŸæœŸä¸‰', 'æ˜ŸæœŸå››', 'æ˜ŸæœŸäº”', 'æ˜ŸæœŸå…­'];
    month = ['ä¸€æœˆ', 'äºŒæœˆ', 'ä¸‰æœˆ', 'å››æœˆ', 'äº”æœˆ', 'å…­æœˆ', 'ä¸ƒæœˆ', 'å…«æœˆ', 'ä¹æœˆ', 'åæœˆ', 'åä¸€æœˆ', 'åäºŒæœˆ'];
    smonth = ['ä¸€', 'äºŒ', 'ä¸‰', 'å››', 'äº”', 'å…­', 'ä¸ƒ', 'å…«', 'ä¹', 'å', 'åä¸€', 'åäºŒ'];
    sday = ['å‘¨æ—¥', 'å‘¨ä¸€', 'å‘¨äºŒ', 'å‘¨ä¸‰', 'å‘¨å››', 'å‘¨äº”', 'å‘¨å…­'];
    menu = ["ä»Šå¤©", "æ¯å°æ™‚", "æ—¥å ±", "è¨­ç½®"];
    settingstxt = ["24å°æ™‚æ™‚é˜", "æ”æ°", "å…¬é‡Œ", "å¤©æ°£ç‰†", "æ›´æ–°å¤©æ°£"];
    updatedtxt = "æ›´æ–°: ";
    windchilltxt = "é¢¨å¯’: ";
    windtxt = "é£Ž: ";
    feeltxt = "æ„Ÿè§‰å¥½åƒ";
    sunrisetxt = "æ—¥å‡º: ";
    sunsettxt = "æ—¥è½: ";
    textstringlater = "ä»Šå¤©æ™šäº›æ—¶å€™: ";
    elevationtxt = "æµ·æ‹”: ";
    humidtxt = "æ¹¿åº¦: ";
    warningtxt = "è­¦å‘Š ";
    preciptxt = "å¯èƒ½æœ‰é›¨: ";
    dewpointtxt = "éœ²é»ž: ";
    notxt = "æ²’æœ‰ ";
    visibilitytxt = "èƒ½è¦‹åº¦: ";
    Fcondition = ["é¾™å·é£Ž", "çƒ­å¸¦é£Žæš´", "é£“é£Ž", "é›·æš´", "é›·æš´", "é›ª", "é›¨é›ª", "é›¨é›ª", "å†»æ¯›æ¯›é›¨", "ç»†é›¨", "å†»é›¨", "æ·‹æµ´", "æ·‹æµ´", "é£˜é›ª", "é›ª", "é›ª", "é›ª", "Hail", "é›¨é›ª", "å°˜", "ç‰™é½¿", "é˜´éœ¾", "çƒŸ", "é£Žèµ·äº‘æ¶Œ", "æœ‰é£Ž", "å†·", "å¤šäº‘", "å¤šäº‘", "å¤šäº‘", "å¤šäº‘", "å¤šäº‘", "æ˜Žç¡®", "æ™´æœ—", "å…¬å¹³", "å…¬å¹³", "é›¨é›ª", "Hot", "é›·æš´", "é›·æš´", "é›·æš´", "æ·‹æµ´", "å¤§é›ª", "å°é›ª", "å¤§é›ª", "åŠ å¤šäº‘", "é›·æš´", "é›ª", "é›·æš´", "ç©ºç™½"];
} else {
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