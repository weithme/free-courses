=BEGIN
str = (ARGV[0].to_s).downcase
input_str = str.delete("^a-zA-ZА-Яа-я0-9")
reverse_str = input_str.reverse
res = input_str <=> reverse_str
if res==0
    puts "YES"
else
    puts "NO"
end
=END
