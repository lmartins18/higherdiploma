public class FindLargestNumber {
    public static void main(String[] args) {
        // Create a preset array of numbers
        int[] numbers = {45, 12, 78, 95, 32, 64, 21, 88, 53};

        // Initialize a variable to store the largest number
        int largest = numbers[0];

        // Loop through the array to find the largest number
        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] > largest) {
                largest = numbers[i];
            }
        }

        System.out.println("The largest number in the array is: " + largest);
    }
}
