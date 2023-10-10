import javax.swing.JOptionPane;

public class AgeCalculatorUserInputApp {
	public static void main(String[] args) {
       //variables
		int age;
		int year;
		int yearOfBirth;
		//objects
		AgeCalculatorUserInput ageCalculator;
		ageCalculator=new AgeCalculatorUserInput();
		//inputs
		age=Integer.parseInt(JOptionPane.showInputDialog(null, "Enter your age"));
		year = Integer.parseInt(JOptionPane.showInputDialog(null, "Enter the current year"));
		//set
		ageCalculator.setAge(age);;
		ageCalculator.setYear(year);
		//compute
		ageCalculator.computeAge();
		//get
		yearOfBirth = ageCalculator.getYearOfBirth();
		//output
		JOptionPane.showMessageDialog(null, "You were born in " + yearOfBirth);
    }
}