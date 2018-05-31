# Сложение временных промежутков
t1 = ARGV[0].to_i
#puts "t1:  " + t1.to_s
t2 = ARGV[1].to_i
#puts "t2:  " + t2.to_s
t = t1 + t2
#puts t.to_s

d=0
h=0
m=0
s=0
res = ""
# максимальная сумма 200_000 - это ~ 2.3 дня
# 1 день = 60*60*24 = 86400
kd = 86400
if t >= kd
    d = (t / kd).to_i
    t = t - d * kd
    #puts "d: " + d.to_s
end

# 1 час = 60*60 = 3600 
kh = 3600
if t >= kh
    h = (t / kh).to_i
    t = t - h* kh
    #puts "h: " + h.to_s
end

# 1 мин = 60 = 60 
km = 60
if t >= km
    m = (t / km).to_i
    t = t - m* km
    #puts "m: " + m.to_s
end

s = t
#puts "s: " + s.to_s

if d==2
    res = "2 дня "
elsif d==1
    res = "1 день "
end

if (h==1 || h==21)
    res = res + h.to_s + " час "
elsif ((h>=2 && 4>=h) || (h==22) || (h==23))
    res = res + h.to_s + " часа "
elsif (h>=5 && 20>=h)
    res = res + h.to_s + " часов "
end

if (m==1 || m==21 || m==31 || m==41 || m==51)
    res = res + m.to_s + " минута "
elsif ((m>=2 && 4>=m) || (m>=22 && 24>=m) || (m>=32 && 34>=m) || (m>=42 && 44>=m) || (m>=52 && 54>=m))
    res = res + m.to_s + " минуты "
elsif ((m>=5 && 20>=m) || (m>=25 && 30>=m) || (m>=35 && 40>=m) || (m>=45 && 50>=m) || (m>=55 && 59>=m))
    res = res + m.to_s + " минут "
end

if (s==1 || s==21 || s==31 || s==41 || s==51)
    res = res + s.to_s + " секунда"
elsif ((s>=2 && 4>=s) || (s>=22 && 24>=s) || (s>=32 && 34>=s) || (s>=42 && 44>=s) || (s>=52 && 54>=s))
    res = res + s.to_s + " секунды"
elsif ((s>=5 && 20>=s) || (s>=25 && 30>=s) || (s>=35 && 40>=s) || (s>=45 && 50>=s) || (s>=55 && 59>=s))
    res = res + s.to_s + " секунд"
end

# отрезаем пробел в конце
if res[res.length-1] == ""
    res = res[0..res.length-2]
end
puts res
