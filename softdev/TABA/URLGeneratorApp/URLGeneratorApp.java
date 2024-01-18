import javax.swing.JOptionPane;

public class URLGeneratorApp {

    public static void main(String[] args) {
        URLGenerator urlGenerator = new URLGenerator();
        String answer = "yes";
        while (answer.equalsIgnoreCase("yes")) {
            // Prompt the user to choose functionality
            String choice = JOptionPane.showInputDialog("Choose a functionality:\n1. Generate URL\n2. Validate URLs");
            
            if (choice.equals("1")) {
                urlGenerator = new URLGenerator(); // reset in case it's second+ time user generates a URL
                // Generate URL
                String companyName = urlGenerator.promptCompanyName();
                urlGenerator.setCompanyName(companyName);
                urlGenerator.computeURL();
                String generatedURL = urlGenerator.getGeneratedURL();
                JOptionPane.showMessageDialog(null, generatedURL);
            } else if (choice.equals("2")) {
                // Validate URLs
                int numberOfURLs = Integer.parseInt(JOptionPane.showInputDialog("Enter the number of URLs to validate:"));
                String[] urls = new String[numberOfURLs];

                for (int i = 0; i < numberOfURLs; i++) {
                    urls[i] = JOptionPane.showInputDialog("Enter URL " + (i + 1) + ":");
                }

                boolean[] validations = urlGenerator.validateURLs(urls);

                for (int i = 0; i < numberOfURLs; i++) {
                    String message = urls[i] + " is ";
                    if(validations[i] == true) {
                        message += "valid";
                    }
                    else {
                        message += "invalid";
                    }
                    JOptionPane.showMessageDialog(null, message);
                }
            } else {
                JOptionPane.showMessageDialog(null, "Invalid choice. Please choose 1 or 2.");
            }

            // MCNA2 - Ask if the user wants to continue, accommodated to work with both methods.
            answer = JOptionPane.showInputDialog("Would you like to perform another action? (yes/no)");
        }
    }
}
