import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        EmailValidator emailValidator = new EmailValidator();
        Scanner sc = new Scanner(System.in);
        // Set valid domain extensions.
        String[] validExtensions = {"com", "edu", "org"};
        emailValidator.setExtensions(validExtensions);

        // User input email address.
        System.out.println("Please enter your email address:");
        String userEmail = sc.nextLine();
        sc.close();

        // Validate and print the result.
        String result = emailValidator.validateEmailAddress(userEmail);
        System.out.println(result);
    }
}