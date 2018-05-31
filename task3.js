// Сложение временных промежутков
var t1 = parseInt(process.argv[1]);
// console.log("t1:  " + t1.toString());
var t2 = parseInt(process.argv[2]);
// console.log("t2:  " + t2.toString());
var t = t1 + t2;
// console.log("t:  " + t.toString());

var d=0;
var h=0;
var m=0;
var s=0;
var res = "";
// максимальная сумма 200_000 - это ~ 2.3 дня
// 1 день = 60*60*24 = 86400
var kd = 86400;
if (t >= kd) {
    d = parseInt(t / kd);
    t = t - d*kd;
    //console.log("d:  " + d.toString());
}

// 1 час = 60*60 = 3600 
var kh = 3600;
if (t >= kh) {
    h = parseInt(t / kh);
    t = t - h*kh;
    //console.log("h:  " + h.toString());
}

// 1 мин = 60 = 60 
var km = 60;
if (t >= km) {
    m = parseInt(t / km);
    t = t - m*km;
    //console.log("m:  " + m.toString());
}

s = t;
//console.log("s:  " + s.toString());

if (d==2) {
    res = "2 дня ";
} else if (d==1) {
    res = "1 день ";
}

if (h==1 || h==21) {
    res = res + h.toString() + " час ";
} else if ((h>=2 && 4>=h) || (h==22) || (h==23)) {
    res = res + h.toString() + " часа ";
} else if (h>=5 && 20>=h) {
    res = res + h.toString() + " часов ";
}

if (m==1 || m==21 || m==31 || m==41 || m==51) {
    res = res + m.toString() + " минута ";
} else if ((m>=2 && 4>=m) || (m>=22 && 24>=m) || (m>=32 && 34>=m) || (m>=42 && 44>=m) || (m>=52 && 54>=m)){
    res = res + m.toString() + " минуты ";
} else if ((m>=5 && 20>=m) || (m>=25 && 30>=m) || (m>=35 && 40>=m) || (m>=45 && 50>=m) || (m>=55 && 59>=m)){
    res = res + m.toString() + " минут ";
}

if (s==1 || s==21 || s==31 || s==41 || s==51) {
    res = res + s.toString() + " секунда";
} else if ((s>=2 && 4>=s) || (s>=22 && 24>=s) || (s>=32 && 34>=s) || (s>=42 && 44>=s) || (s>=52 && 54>=s)) {
    res = res + s.toString() + " секунды";
} else if ((s>=5 && 20>=s) || (s>=25 && 30>=s) || (s>=35 && 40>=s) || (s>=45 && 50>=s) || (s>=55 && 59>=s)) {
    res = res + s.toString() + " секунд";
}

// отрезаем пробел в конце
res = res.trim();
console.log(res);
