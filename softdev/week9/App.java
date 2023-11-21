import java.util.ArrayList;
import java.util.Scanner;

public class App {

    private String inputString;

    public App(String inputString) {
        this.inputString = inputString;
    }

    // "Counts the letters"
    public int countLetters() {
        return inputString.length();
    }

    // "Counts vowels"
    public int countVowels() {
        return inputString.replaceAll("[^aeiouAEIOU]", "").length();
    }

    // "Stores a new String that only contains every second letter"
    public String everySecondLetter() {
        StringBuilder result = new StringBuilder();
        for (int i = 1; i < inputString.length(); i += 2) {
            result.append(inputString.charAt(i));
        }
        return result.toString();
    }

    // "Stores the positions of each space (comma separated for more than one
    // space)"
    public String positionsOfSpaces() {
        ArrayList<Integer> spacePositions = new ArrayList<>();
        for (int i = 0; i < inputString.length(); i++) {
            if (inputString.charAt(i) == ' ') {
                spacePositions.add(i);
            }
        }
        return String.join(",",spacePositions.toString())
                .replace("[", "")
                .replace("]", "")
                .replace(" ", "");
    }

    // "Outputs a new String with all vowels are replaced/printed as exclamation
    // points"
    public String replaceVowelsWithExclamation() {
        return inputString.replaceAll("[aeiouAEIOU]", "!");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Please insert the string to analyse:");
        String userInput = sc.nextLine();
        App app = new App(userInput);

        System.out.println("Letter count: " + app.countLetters());
        System.out.println("Vowel count: " + app.countVowels());
        System.out.println("Every second letter: " + app.everySecondLetter());
        System.out.println("Position of each space: " + app.positionsOfSpaces());
        System.out.println("Exclamation point String: " + app.replaceVowelsWithExclamation());

        sc.close();
    }
}
