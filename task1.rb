input_str = (ARGV[0].to_s).downcase
reverse_str = input_str.reverse
res = input_str <=> reverse_str
if res==0
    puts "YES"
else
    puts "NO"
end
