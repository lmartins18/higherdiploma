import java.util.Scanner;

public class AverageMarksWithGrades {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Please enter how many subjects you studied: ");
        int numSubjects = scanner.nextInt();
        int totalMarks = 0;

        while (numSubjects > 100 || numSubjects < 0) {
            System.out.println("Invalid marks. Please enter marks between 0 and 100.");
            numSubjects = scanner.nextInt();
        }
        for (int i = 1; i <= numSubjects; i++) {
            System.out.println(String.format("Marks for subject %s: ", i));
            int marks = scanner.nextInt();
            totalMarks += marks;
        }

        double average = (double) totalMarks / numSubjects;
        System.out.println("The average is: " + Math.round(average));

        char grade = GetGrade(average);
        System.out.println("Grade: " + grade);

        scanner.close();
    }
    private static char GetGrade(double average) {
        if (average >= 80) {
            return 'A';
        } else if (average >= 70) {
            return 'B';
        } else if (average >= 50) {
            return 'C';
        } else if (average >= 40) {
            return 'D';
        } else {
            return 'F';
        }
    }
}
