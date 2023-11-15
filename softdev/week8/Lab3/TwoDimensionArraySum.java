package Lab3;

public class TwoDimensionArraySum {
    public static void main(String[] args) {
        // Create a 3x3 array and put set values into the array.
        int[][] array = {
                { 1, 2, 3 },
                { 4, 5, 6 },
                { 7, 8, 9 }
        };

        System.out.println("Array Data:");
        printArray(array);

        // 1. Sum each row
        printSumEachRow(array);

        // 2. Sum each column
        printSumEachColumn(array);

        // 3. Sum the entire array
        printSumEntireArray(array);
    }

    private static void printArray(int[][] array) {
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < array[i].length; j++) {
                System.out.print(array[i][j] + " ");
            }
            System.out.println();
        }
        System.out.println();
    }

    // 1. Sum each row
    private static void printSumEachRow(int[][] array) {
        System.out.println("Sum of Each Row:");
        for (int i = 0; i < array.length; i++) {
            int rowSum = 0;
            for (int j = 0; j < array[i].length; j++) {
                rowSum += array[i][j];
            }
            System.out.println("Row " + (i + 1) + ": " + rowSum);
        }
        System.out.println();
    }

    // 2. Sum each column
    private static void printSumEachColumn(int[][] array) {
        System.out.println("Sum of Each Column:");
        for (int j = 0; j < array[0].length; j++) {
            int colSum = 0;
            for (int i = 0; i < array.length; i++) {
                colSum += array[i][j];
            }
            System.out.println("Column " + (j + 1) + ": " + colSum);
        }
        System.out.println();
    }

    // 3. Sum the entire array
    private static void printSumEntireArray(int[][] array) {
        int totalSum = 0;
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < array[i].length; j++) {
                totalSum += array[i][j];
            }
        }
        System.out.println("Sum of Entire Array: " + totalSum);
    }
}
