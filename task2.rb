d = ARGV[0].to_i
m_str = ARGV[1].to_s
y = ARGV[2].to_i
if (y >= 1600)
    if (y % 400 == 0)
        feb = 29
    elsif (y % 100 == 0) 
        feb = 28
    elsif (y % 4 == 0) 
        feb = 29
    else
        feb = 28
    end
else
    if (y % 4 == 0) 
        feb = 29
    else
        feb = 28
    end
end

dinm1 = Hash[1, 31,
            2, feb,
            3, 31,
            4, 30,
            5, 31,
            6, 30,
            7, 31,
            8, 31,
            9, 30,
            10, 31,
            11, 30,
            12, 31]

dinm = Hash["января", 31,
            "февраля", feb,
            "марта", 31,
            "апреля", 30,
            "мая", 31,
            "июня", 30,
            "июля", 31,
            "августа", 31,
            "сентября", 30,
            "октября", 31,
            "ноября", 30,
            "декабря", 31]
#puts dinm[m_str].to_s

res = dinm[m_str] - d 
if res>=0 
    case m_str
    when "января"
        m = 1
    when "февраля"
        m = 2
    when "марта"
        m = 3
    when "апреля"
        m = 4
    when "мая"
        m = 5
    when "июня"
        m = 6
    when "июля"
        m = 7
    when "августа"
        m = 8
    when "сентября"
        m = 9
    when "октября"
        m = 10
    when "ноября"
        m = 11
    when "декабря"
        m = 12
    else
      m = 0
    end
 
    i=m
    if m < 12
        loop do
            i+=1
            res = res + dinm1[i]
            break if i>=12
        end
    end

    puts res.to_s
end
