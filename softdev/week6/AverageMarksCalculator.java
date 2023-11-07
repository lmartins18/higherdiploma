import java.util.Scanner;

public class AverageMarksCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Please enter how many subjects you studied: ");
        int numSubjects = scanner.nextInt();
        int totalMarks = 0;

        for (int i = 1; i <= numSubjects; i++) {
            System.out.println("Marks for subject " + i + ": ");
            int marks = scanner.nextInt();

            if (marks < 0 || marks > 100) {
                System.out.println("Invalid marks. Please enter marks between 0 and 100.");
                i--; 
            } else {
                totalMarks += marks;
            }
        }
        double average = (double) totalMarks / numSubjects;
        System.out.println("The average is: " + Math.round(average));
        scanner.close();
    }
}
