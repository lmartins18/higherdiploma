# ----- Animal base class -----
# Create an Animal class
class Animal
  # that has a breath method which will print "inhale and exhale"
  def breath
    puts "inhale and exhale"
  end
end
# ----- Cat class -----
# Create a Cat class that will inherit from the animal class
class Cat < Animal
  # and will have a method called speak
  def speak
    # when this method is run speak method will print "Meow"
    puts "Meow"
  end
end
# ----- Dog class -----
# Create a Dog class that will inherit from the animal class
class Dog < Animal
  # and will have a method called speak
  def speak
    # when this method is run speak method will print "Woof"
    puts "Woof"
  end
end
# ----- Instantiation -----
# Create instances of the dog class and the cat class
cat = Cat.new
dog = Dog.new
# ----- Execution -----
#  and call the speak method on both.
puts cat.speak
puts dog.speak
