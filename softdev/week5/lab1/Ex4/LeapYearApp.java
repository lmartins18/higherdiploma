package Ex4;

import java.util.Scanner;

public class LeapYearApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int year = scanner.nextInt();

        LeapYearChecker checker = new LeapYearChecker(year);
        String result = checker.getIsLeapYearMessage();
        System.out.println(result);

        scanner.close();
    }
}
