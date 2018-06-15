var t1 = parseInt(process.argv[2]);
var t2 = parseInt(process.argv[3]);
var t = t1 + t2;

var d = 0;
var h = 0;
var m = 0;
var s = 0;
var res = "";

var kd = 86400;
if (t >= kd) {
    d = parseInt(t / kd);
    t = t - d*kd;
}

var kh = 3600;
if (t >= kh) {
    h = parseInt(t / kh);
    t = t - h*kh;
}

var km = 60;
if (t >= km) {
    m = parseInt(t / km);
    t = t - m*km;
}

s = t;
if (d==2) {
    h = h + 48;
} else if (d==1) {
    h = h + 24;
}

if (h==1 || h==21 || h==31 || h==41 || h==51) {
    res = res + h.toString() + " час ";
} else if ((h>=2 && 4>=h) || (h>=22 && 24>=h) || (h>=32 && 34>=h) || (h>=42 && 44>=h) || (h>=52 && 54>=h)) {
    res = res + h.toString() + " часа ";
} else if ((h>=5 && 20>=h) || (h>=25 && 30>=h) || (h>=35 && 40>=h) || (h>=45 && 50>=h) || (h>=55 && 60>=h)) {
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

res = res.trim();
console.log(res);
