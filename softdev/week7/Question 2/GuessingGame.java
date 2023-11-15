import javax.swing.JOptionPane;
import java.util.Random;
import java.util.ArrayList;

public class GuessingGame {
    public static void main(String[] args) {
        Random random = new Random();
        ArrayList<Integer> guesses = new ArrayList<>();
        int numberToGuess = random.nextInt(100) + 1;
        int attempts = 0;
        boolean hasGuessedCorrectly = false;

        JOptionPane.showMessageDialog(null, "Welcome to the Guessing Game!");

        while (!hasGuessedCorrectly) {
            String input = JOptionPane.showInputDialog("Enter your guess (1-100), or press Cancel to quit:");
            if (input == null) {
                int confirmQuit = JOptionPane.showConfirmDialog(null, "Are you sure you want to quit?", "Quit",
                        JOptionPane.YES_NO_OPTION);
                if (confirmQuit == JOptionPane.YES_OPTION) {
                    showGuesses(guesses);
                    break;
                }
            } else {
                int guess = Integer.parseInt(input);
                guesses.add(guess);
                attempts++;

                if (guess < numberToGuess) {
                    JOptionPane.showMessageDialog(null, "Try a higher number.");
                } else if (guess > numberToGuess) {
                    JOptionPane.showMessageDialog(null, "Try a lower number.");
                } else {
                    JOptionPane.showMessageDialog(null, "Congratulations! You've guessed the number " + numberToGuess
                            + " in " + attempts + " attempts.");
                    hasGuessedCorrectly = true;
                }
            }
        }
        if (hasGuessedCorrectly) {
            showGuesses(guesses);
        }

    }

    private static void showGuesses(ArrayList<Integer> guesses) {
        StringBuilder resultMessage = new StringBuilder();
        resultMessage.append("Your guesses:\n");

        for (int i = 0; i < guesses.size(); i++) {
            resultMessage.append("Guess ").append(i + 1).append(": ").append(guesses.get(i)).append("\n");
        }

        JOptionPane.showMessageDialog(null, resultMessage.toString());
    }
}
