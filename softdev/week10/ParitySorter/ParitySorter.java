/* NOTE:
 I used 'javadoc' in this class out of curiosity, and, since only 0-1 can be used 
 on the 'sortByParity' method, it makes it easier for the end-user to understand the method.
*/

/**
 * The ParitySorter class is responsible for sorting an array of numbers into a
 * subset
 * array containing either even or odd numbers based on the specified parity.
 */
public class ParitySorter {

    /**
     * Sorts the given array into a subset array containing either even or odd
     * numbers.
     *
     * @param numbers The array of numbers to be sorted.
     * @param parity  An integer representing whether the subset array should
     *                contain even or odd numbers
     *                (0 for even, 1 for odd).
     * @return An array containing either all even or all odd numbers from the input
     *         array.
     * @throws IllegalArgumentException If the provided parity is not 0 or 1.
     */
    public int[] sortByParity(int[] numbers, int parity) {
        if (parity < 0 || parity > 1) {
            throw new IllegalArgumentException("Invalid parity value. Expected 0 for even or 1 for odd.");
        }
        // Count the number of even or odd numbers in the array.
        int count = 0;
        for (int number : numbers) {
            if ((number % 2 == 0 && parity == 0) || (number % 2 != 0 && parity == 1)) {
                count++;
            }
        }

        // Create a new array to store the even or odd numbers.
        int[] result = new int[count];

        // Populate the result array with even or odd numbers.
        int index = 0;
        for (int number : numbers) {
            if ((number % 2 == 0 && parity == 0) || (number % 2 != 0 && parity == 1)) {
                result[index++] = number;
            }
        }

        return result;
    }
}
