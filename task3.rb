t1 = ARGV[0].to_i
t2 = ARGV[1].to_i
t = t1 + t2

d=0
h=0
m=0
s=0
res = ""

kh = 3600
if t >= kh
    h = (t / kh).to_i
    t = t - h* kh
end

km = 60
if t >= km
    m = (t / km).to_i
    t = t - m* km
end

s = t

res = res + h.to_s + " час"
if ((h>=2 && 4>=h) || (h>=22 && 24>=h) || (h>=32 && 34>=h) || (h>=42 && 44>=h) || (h>=52 && 54>=h))
    res = res + "а"
elsif ((h>=5 && 20>=h) || (h>=25 && 30>=h) || (h>=35 && 40>=h) || (h>=45 && 50>=h) || (h>=55 && 60>=h))
    res = res + "ов"
end

res = res + " " + m.to_s + " минут"
if (m==1 || m==21 || m==31 || m==41 || m==51)
    res = res + "а"
elsif ((m>=2 && 4>=m) || (m>=22 && 24>=m) || (m>=32 && 34>=m) || (m>=42 && 44>=m) || (m>=52 && 54>=m))
    res = res + "ы"
end

if (s==1 || s==21 || s==31 || s==41 || s==51)
    res = res + " " + s.to_s + " секунда"
elsif ((s>=2 && 4>=s) || (s>=22 && 24>=s) || (s>=32 && 34>=s) || (s>=42 && 44>=s) || (s>=52 && 54>=s))
    res = res + " " + s.to_s + " секунды"
elsif ((s>=5 && 20>=s) || (s>=25 && 30>=s) || (s>=35 && 40>=s) || (s>=45 && 50>=s) || (s>=55 && 59>=s))
    res = res + " " + s.to_s + " секунд"
end

if res[res.length-1] == ""
    res = res[0..res.length-2]
end
puts res
