public class App {
    public static void main(String[] args) {
        ParitySorter ps = new ParitySorter();
        int[] numbers = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

        // Get and print even numbers first.
        int parity = 0; // Even.
        int[] sortedNumbers = ps.sortByParity(numbers, parity);
        System.out.println("Even numbers:");
        for (int number : sortedNumbers) {
            System.out.println(number);
        }
        // Line-break results.
        System.out.println();
        // Get and print odd numbers now.
        parity = 1; // Odd.
        sortedNumbers = ps.sortByParity(numbers, parity);
        System.out.println("Odd numbers:");
        for (int number : sortedNumbers) {
            System.out.println(number);
        }
    }
}
