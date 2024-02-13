require 'arithmetic_calculator'

class ArithmeticCalculator
  def self.add(n1, n2)
    result = n1 + n2
  end

  def self.subtract(n1, n2)
    result = n1 - n2
  end

  def self.multiply(n1, n2)
    result = n1 * n2
  end

  def self.divide(n1, n2)
    if(n1 == 0 || n2 == 0)
      return 0.0 / 0.0
    end
    result = n1 / n2
  end
end
