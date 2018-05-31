# 22:07 31.05
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
    puts "d: " + d.to_s
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

if h==1
    res = res + "1 час "
elsif (h>=2 && h<=4) 
    res = res + h.to_s + " часа "
elsif (h>=5 && h<=12) 
    res = res + h.to_s + " часов "
end

if m==1
    res = res + "1 минута "
elsif (m>=2 && m<=4) 
    res = res + m.to_s + " минуты "
elsif (m>=5 && m<=59) 
    res = res + m.to_s + " минут "
end

if s==1
    res = res + "1 секунда"
elsif (s>=2 && s<=4) 
    res = res + s.to_s + " секунды"
elsif (s>=5 && s<=59) 
    res = res + s.to_s + " секунд"
end

# отрезаем пробел в конце
if res[res.length-1] == ""
    res = res[0..res.length-2]
end
puts res
