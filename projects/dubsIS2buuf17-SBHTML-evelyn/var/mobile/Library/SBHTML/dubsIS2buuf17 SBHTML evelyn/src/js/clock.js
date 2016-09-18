/*
   _,.----.              _,.---._      _,.----.  ,--.-.,-.            ,--.-,  ,-,--.
 .' .' -   \   _.-.    ,-.' , -  `.  .' .' -   \/==/- |\  \          |==' -|,-.'-  _\
/==/  ,  ,-' .-,.'|   /==/_,  ,  - \/==/  ,  ,-'|==|_ `/_ /          |==|- /==/_ ,_.'
|==|-   |  .|==|, |  |==|   .=.     |==|-   |  .|==| ,   /         __|==|, \==\  \
|==|_   `-' \==|- |  |==|_ : ;=:  - |==|_   `-' \==|-  .|       ,--.-'\=|- |\==\ -\
|==|   _  , |==|, |  |==| , '='     |==|   _  , |==| _ , \      |==|- |=/ ,|_\==\ ,\
\==\.       /==|- `-._\==\ -    ,_ /\==\.       /==/  '\  | .=. |==|. /=| -/==/\/ _ |
 `-.`.___.-'/==/ - , ,/'.='. -   .'  `-.`.___.-'\==\ /\=\.':=; :\==\, `-' /\==\ - , /
            `--`-----'   `--`--''                `--`       `=`  `--`----'  `--`---'
** Creator: JunesiPhone
** Website: http://junesiphone.com/libraries
** Javascript clocks the easy way.
** Usage clock({
          twentyfour : true,
          padzero : true,
          refresh : 5000,
          success: function(clock){
            document.getElementById('time').innerHTML = clock.hour() + ':' + clock.minute();
          }
        });
*/
function clock(options) {
    'use strict';
    var getTimes = function () {
            var d = new Date(),
                funcs = {
                    hour: function () {
                        var hour = (options.twentyfour === true) ? d.getHours() : (d.getHours() + 11) % 12 + 1;
                        hour = (options.padzero === true) ? (hour < 10 ? "0" + hour : "" + hour) : hour;
                        return hour;
                    },
                    rawhour: function () {
                        return d.getHours();
                    },
                    minute: function () {
                        return (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
                    },
                    rawminute: function () {
                        return d.getMinutes();
                    },
                    am: function () {
                        if (options.twentyfour === true) {
                            return ' ';
                        }
                        return (d.getHours() > 11) ? "pm" : "am";
                    },
                    date: function () {
                        return d.getDate();
                    },
                    datepadded: function () {
                        return (d.getDate() < 10) ? "0" + d.getDate() : d.getDate();
                    },
                    day: function () {
                        return d.getDay();
                    },
                    month: function () {
                        return d.getMonth();
                    },
                    monthnum: function () {
                        return d.getMonth() + 1;
                    },
                    year: function () {
                        return d.getFullYear();
                    },
                    hourtext: function () {
                        var hourtxt = (options.twentyfour === true) ? ["Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty", "Twenty One", "Twenty Two", "Twenty Three", "Twenty Four"] : ["Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];
                        return hourtxt[this.rawhour()];
                    },
                    minuteonetext: function () {
                        var minuteone = ["o' clock", "o' one", "o' two", "o' three", "o' four", "o' five", "o' six", "o' seven", "o' eight", "o' nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "Sixteen", "Seventeen", "eighteen", "Nineteen", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Twenty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Thirty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Forty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty", "Fifty"];
                        if (minuteone[this.rawminute()] !== undefined) {
                            return minuteone[this.rawminute()];
                        }
                        return "";
                    },
                    minutetwotext: function () {
                        var minutetwo = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", ""];
                        if (minutetwo[this.rawminute()] !== undefined) {
                            return minutetwo[this.rawminute()];
                        }
                        return "";
                    },
                    daytext: function () {
                        var textdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                        return textdays[this.day()];
                    },
                    sdaytext: function () {
                        var stextdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                        return stextdays[this.day()];
                    },
                    sdaytextmanual: function (day) {
                        var stextdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                        return stextdays[day];
                    },
                    monthtext: function () {
                        var textmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        return textmonth[this.month()];
                    },
                    smonthtext: function () {
                        var textmonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                        return textmonth[this.month()];
                    },
                    datetext: function () {
                        var textdate = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth", "Thirteenth", "Fourteenth", "Fifteenth", "Sixteenth", "Seventeenth", "Eightheenth", "Nineteenth", "Twentyith", "TwentyFirst", "TwentySecond", "TwentyThird", 'TwentyFourth', "TwentyFifth", "TwentySixth", "TwentySeventh", "TwentyEight", "TwentyNinth", "Thirtyith", "ThirtyFirst"];
                        return textdate[this.date() - 1];
                    },
                    nth: function (d) {
                        if (d > 3 && d < 21) {
                            return 'th';
                        }
                        switch (d % 10) {
                        case 1:
                            return "st";
                        case 2:
                            return "nd";
                        case 3:
                            return "rd";
                        default:
                            return "th";
                        }
                    },
                    dateplus: function () {
                        return this.date() + this.nth(Number(this.date()));
                    }
                };
            options.success(funcs);
            setTimeout(function () {
                getTimes();
            }, options.refresh);
        };
    getTimes();
}