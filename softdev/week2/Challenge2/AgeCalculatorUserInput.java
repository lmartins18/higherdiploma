package Challenge2;

import javax.swing.JOptionPane;

public class AgeCalculatorUserInput {
	public static void main(String[] args) {
		int age = Integer.parseInt(JOptionPane.showInputDialog(null, "Enter your age"));
		int currentYear = Integer.parseInt(JOptionPane.showInputDialog(null, "Enter the current year"));
		int yearOfBirth = currentYear - age;
		JOptionPane.showMessageDialog(null, "You were born in " + yearOfBirth);
	}
}