class Person

  @@counter = 0;
  attr_accessor :name, :age

  def initialize(aName, aAge)
    @name = aName
    @age = aAge
    @@counter += 1
  end
  def to_s
    "The person name is #{@name} and the age is #{@age}"
  end
  def numPersons
    puts(@@counter)
  end

end

p1 = Person.new("Josh", 30)
p2 = Person.new("Luis", 24)
puts p1.name
puts p1.age

p1.name = "Joshua"
puts p1.name

p1.numPersons
p2.numPersons

puts p1

# Part 2 - new class, Student
puts "****************STUDENT*******************"

class Student < Person
  attr_accessor :studentNumber

  def initialize(aName, aAge, aStudentNumber)
    super(aName, aAge)
    @studentNumber = aStudentNumber
  end

  def to_s
    "Student number: #{@studentNumber}, name #{@name} and age is #{@age}"
  end
end

s1 = Student.new("Xavier", 44, 1)
puts s1
