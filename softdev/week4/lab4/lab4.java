// Research the use of the Math.random class for generating random numbers and then do the following:
// Create a guessing game where the computer comes up with a random number and the user guesses (output winner or loser)
package lab4;

import javax.swing.JOptionPane;

public class lab4 {
    public static void main(String[] args) {
        int max = 10;
        int number = GenerateRandomNumber(max);
        int guess = Integer.parseInt(JOptionPane.showInputDialog(null, "Guess the number from 0 to " + max));
        String message = GetUserGuessMessage(number, guess);
        JOptionPane.showMessageDialog(null, message + " the number was: " + number);
    }

    private static int GenerateRandomNumber(int max) {
        int result = (int) (Math.random() * max);
        return result;
    }

    private static String GetUserGuessMessage(int number, int guess) {
        if (number == guess) {
            return "Winner!";
        } else {
            return "Loser..";
        }
    }

}
