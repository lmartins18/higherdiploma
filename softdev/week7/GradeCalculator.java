import java.util.Scanner;

public class GradeCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get the number of subjects from the user
        System.out.print("Enter the number of subjects: ");
        int numSubjects = scanner.nextInt();

        // Create arrays to store subject names and results
        String[] subjectNames = new String[numSubjects];
        double[] subjectResults = new double[numSubjects];

        // Prompt the user to enter subject names and results
        for (int i = 0; i < numSubjects; i++) {
            scanner.nextLine(); // Consume the newline character
            System.out.print("Enter the name of subject " + (i + 1) + ": ");
            subjectNames[i] = scanner.nextLine();
            System.out.print("Enter the result for subject " + subjectNames[i] + ": ");
            subjectResults[i] = scanner.nextDouble();
        }

        // Calculate the overall average
        double totalScore = 0;
        for (double result : subjectResults) {
            totalScore += result;
        }
        double overallAverage = totalScore / numSubjects;

        // Print the results and grades for each subject
        System.out.println("\nSubject-wise Results and Grades:");
        for (int i = 0; i < numSubjects; i++) {
            char grade = calculateGrade(subjectResults[i]);
            System.out.println(subjectNames[i] + ": " + subjectResults[i] + " (Grade: " + grade + ")");
        }

        // Print the overall average
        char overallGrade = calculateGrade(overallAverage);
        System.out.println("\nOverall Average: " + overallAverage + " (Overall Grade: " + overallGrade + "");
    }

    // Helper method to calculate the grade based on the score
    public static char calculateGrade(double score) {
        if (score >= 90) {
            return 'A';
        } else if (score >= 80) {
            return 'B';
        } else if (score >= 70) {
            return 'C';
        } else if (score >= 60) {
            return 'D';
        } else {
            return 'F';
        }
    }
}
