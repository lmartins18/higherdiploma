package lab1;

import java.util.Scanner; 
public class lab1CodeRunner {
    private static int age;
    private static int numberOfTickets;
    private static double finalPrice;
    // Getters & Setters
    public static void computePrice() {
        double amount;
        if (age > 18) {
            amount = 18.15;
        }
        else {
            amount = 18.10;
        }
        double result = amount * numberOfTickets;
        finalPrice = result;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        age = sc.nextInt();
        numberOfTickets = sc.nextInt();
        sc.close();
        computePrice();
        System.out.println(finalPrice);
    }
}
