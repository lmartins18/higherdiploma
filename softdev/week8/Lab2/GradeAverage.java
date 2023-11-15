package Lab2;

import java.util.Scanner;

public class GradeAverage {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int numYears = 4;
        int modules = 5;
        int[][] allGrades = new int[numYears][modules];

        for (int yearIndex = 0; yearIndex < numYears; yearIndex++) {
            int yearNumber = yearIndex + 1;
            System.out.println("Please enter the grades for year " + yearNumber + ": ");
            for (int i = 0; i < modules; i++) {
                allGrades[yearIndex][i] = scanner.nextInt();
            }
            int yearAverage = calculateAverage(allGrades[yearIndex]);
            System.out.println("Year " + yearNumber + " average: " + yearAverage);
        }

        // Convert two-dimension array to one-dimension.
        int[] grades = new int[numYears * modules];
        int index = 0;
        for (int year = 0; year < numYears; year++) {
            for (int i = 0; i < modules; i++) {
                grades[index++] = allGrades[year][i];
            }
        }
        // Get overall average.
        int overallAverage = calculateAverage(grades);
        System.out.println("Overall average: " + overallAverage);
        scanner.close();
    }
    private static int calculateAverage(int[] grades) {
        int sum = 0;
        for (int i = 0; i < grades.length; i++) {
            sum += grades[i];
        }
        int average = sum / grades.length;
        return average;
    }
}