package exam;

import java.util.Scanner;

public class Wage {
    public static void main(String args[]) {
        try (Scanner sc = new Scanner(System.in)) {
            int monthlyWage = sc.nextInt();
            int hoursWorked = sc.nextInt();

            // Calculate annual wage.
            int annualWage = monthlyWage * 12;

            // Calculate per hour rate
            int perHourRate = annualWage / (hoursWorked * 52);

            // Print the results
            System.out.println("Annual wage: " + annualWage);
            System.out.println("Per hour rate: " + perHourRate);
        }

    }
}