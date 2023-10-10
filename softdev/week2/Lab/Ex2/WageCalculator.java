package Lab.Ex2;
import javax.swing.JOptionPane;
public class WageCalculator {
    public static void main(String[] args) {
        int monthlyWage = Integer.parseInt(JOptionPane.showInputDialog(null, "Enter your monthly wage"));
        int weeklyHours = Integer.parseInt(JOptionPane.showInputDialog(null, "Enter your weekly working hours"));;

        // how much per year and per hour.
        int yearlyWage = monthlyWage * 12;
        int hourlyWage = yearlyWage / (weeklyHours * 52);
        JOptionPane.showMessageDialog(null, "Yearly Wage: " + yearlyWage + "\nHourly Wage: " + hourlyWage);
    }
}
