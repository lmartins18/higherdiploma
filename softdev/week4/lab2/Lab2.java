import javax.swing.JOptionPane;

// Create an application that takes in a number from a user and outputs whether it is positive or negative
public class Lab2 {
    public static void main(String[] args) {
        // Test if number is positive.
        int input = Integer.parseInt(JOptionPane.showInputDialog(null, "Enter a number:"));
        String message = IsNumberPositiveMessage(input);
        JOptionPane.showMessageDialog(null, "The number " + input + " is " + message + "." );
    }

    private static String IsNumberPositiveMessage(int input)
    {
        if (input > 0) {
            return "positive";
        } else {
            return "negative";
        }
    }
}