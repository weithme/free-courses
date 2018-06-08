var d = parseInt(process.argv[2]);
var m_str = (process.argv[3]).toString();
var y = parseInt(process.argv[4]);

var feb = 28;

/*
if (y >= 1600) {
    if (y % 400 == 0) {
        feb = 29;
    } else if (y % 100 == 0) {
        feb = 28;
    } else if (y % 4 == 0) {
        feb = 29;
    } else {
        feb = 28;
    }
} else {
    if (y % 4 == 0) {
        feb = 29;
    } else {
        feb = 28;
    }
}
*/

if (y % 4 == 0) {
    feb = 29;
} 


var dinm1 = {1: 31,
            2: feb,
            3: 31,
            4: 30,
            5: 31,
            6: 30,
            7: 31,
            8: 31,
            9: 30,
            10: 31,
            11: 30,
            12: 31};

var dinm = {"января": 31,
            "февраля": feb,
            "марта": 31,
            "апреля": 30,
            "мая": 31,
            "июня": 30,
            "июля": 31,
            "августа": 31,
            "сентября": 30,
            "октября": 31,
            "ноября": 30,
            "декабря": 31};

var res = dinm[m_str] - d; 
if (res>=0) {
    switch (m_str) {
        case "января"  : m = 1; break;
        case "февраля" : m = 2; break;
        case "марта"   : m = 3; break;
        case "апреля"  : m = 4; break;
        case "мая"     : m = 5; break;
        case "июня"    : m = 6; break;
        case "июля"    : m = 7; break;
        case "августа" : m = 8; break;
        case "сентября": m = 9; break;
        case "октября" : m = 10; break;
        case "ноября"  : m = 11; break;
        case "декабря" : m = 12; break;
        default        : m = 0;
    }

    var i=m;
    if (m < 12) {
        while (i<12) {
            res = res + dinm1[i];
            i++;
        }
    }

    console.log(res.toString());
}
