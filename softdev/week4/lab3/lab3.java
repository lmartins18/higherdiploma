// Create an application that takes in a number from a user and outputs whether it is odd or even
package lab3;

import javax.swing.JOptionPane;

public class lab3 {
    public static void main(String[] args) {
        // Test if number is positive.
        int input = Integer.parseInt(JOptionPane.showInputDialog(null, "Enter a number:"));
        String message = IsNumberEvenMessage(input);
        JOptionPane.showMessageDialog(null, "The number " + input + " is " + message + ".");
    }

    private static String IsNumberEvenMessage(int input) {
        if (input % 2 == 0) {
            return "even";
        } else {
            return "odd";
        }
    }
}
