package Lab3;

import java.util.Scanner;

public class CodeRunnerTwoDimensionArraySum {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // Create a 3x3 array and put set values into the array.
        int[][] array = new int[3][3];

        for (int i = 0; i < 3; i++) {
              System.out.println("Please enter row number " + (i + 1) + ":");
            String[] values = scanner.nextLine().split(" ");
            for(int j = 0; j < 3; j++) 
            {
                array[i][j] = Integer.parseInt(values[j]);
            }
        }

        // 1. Sum each row
        for (int i = 0; i < 3; i++) {
            int rowSum = 0;
            for (int j = 0; j < 3; j++) {
                rowSum += array[i][j];
            }
            System.out.println("Sum for row number " + i + ": " + rowSum);
        }

        // 2. Sum each column
        for (int j = 0; j < 3; j++) {
            int colSum = 0;
            for (int i = 0; i < 3; i++) {
                colSum += array[i][j];
            }
            System.out.println("Sum for column number " + j + ": " + colSum);
        }

        // 3. Sum the entire array
        int overallSum = 0;
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                overallSum += array[i][j];
            }
        }
        System.out.println("Overall sum: " + overallSum);
        scanner.close();
    }
}
