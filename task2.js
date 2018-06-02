// Количество дней до нового года
var d = parseInt(process.argv[1]);
// console.log(d.toString());
var m_str = (process.argv[2]).toString();
// console.log(m_str.toString());
var y = parseInt(process.argv[3]);
// console.log(y.toString());

var feb = 28;

//# високосный год или нет
//# 1 <= y <= 2999
//# в 1582 году римский папа Григорий XIII провёл реформу календаря. 
//# распределение високосных годов:
//# год, номер которого кратен 400, — високосный;
//# остальные годы, номер которых кратен 100, — невисокосные;
//# остальные годы, номер которых кратен 4, — високосные.
if (y >= 1600) {
    if (y % 400 == 0) {
        // "високосный"
        feb = 29;
    } else if (y % 100 == 0) {
        // "не високосный"
        feb = 28;
    } else if (y % 4 == 0) {
        // "високосный"
        feb = 29;
    } else {
        // "не високосный"
        feb = 28;
    }
} else {
    if (y % 4 == 0) {//# рассчитывается как до принятия григорианского календаря
        // "високосный"
        feb = 29;
    } else {
        // "не високосный"
        feb = 28;
    }
}

// days in month
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

// days in month
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
//#puts dinm[m_str].to_s

var res = dinm[m_str] - d; // дней до конца месяца
if (res>=0) {//#указано число дней не больше, чем есть в месяце
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
    //#puts "m: " + m.to_s

    var i=m;
    if (m < 12) {
        while (i<12) {
            //#puts i.to_s + ":" + dinm1[i].to_s
            res = res + dinm1[i];
            i++;
        }
    }

    //res = 0
    console.log(res.toString());
}
