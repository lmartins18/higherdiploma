

def hello_world(input)
  for i in 1..input
    if(i % 7 === 0 && i % 9 === 0)
        puts "hello world"
    elsif i % 7 === 0
      puts "hello"
    elsif i % 9 === 0
      puts "world"
    end
  end
end

hello_world(63)
