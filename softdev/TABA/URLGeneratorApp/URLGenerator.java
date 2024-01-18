import javax.swing.JOptionPane;

public class URLGenerator {

    // Data members (instance variables) to store URL components
    private String companyName;
    private String protocol;
    private String hostname;
    private String hostnameWithoutSuffix;
    private String path;

    // Constructor to initialize data members
    public URLGenerator() {
        protocol = "";
        hostname = "";
        path = "";
        hostnameWithoutSuffix = "";
    }

    // Question 1 - UR1

    // Setter method to set the company name
    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }
    // Main compute method for Question 1
    public void computeURL() {
        protocol = determineProtocol(companyName);
        hostnameWithoutSuffix = removeSuffixes(companyName);
        hostname = replaceSpacesWithHyphens(hostnameWithoutSuffix);
    
        if (hostname.isEmpty()) {
            JOptionPane.showMessageDialog(null, "Invalid company name");
            return;
        }
    
        hostname += determineHostnameEnding(hostnameWithoutSuffix);
        path = determinePath(hostnameWithoutSuffix);
    }
    
    // a) Determine protocol based on company name "google" regardless of case
    private String determineProtocol(String companyName) {
        return companyName.toLowerCase().contains("google") ? "https" : "http";
    }
    
    // b) Remove specified suffixes from company name
    private String removeSuffixes(String companyName) {
        String[] suffixes = {" Inc.", " Ltd.", " LLC"};
        for (String suffix : suffixes) {
            if (companyName.endsWith(suffix)) {
                return companyName.substring(0, companyName.length() - suffix.length());
            }
        }
        return companyName;
    }
    
    // c) Replace spaces with hyphens
    // d) Apart from the above-mentioned letters and characters,
    // all the other letters should be copied unchanged to the URL hostname from the given company name.
    private String replaceSpacesWithHyphens(String hostnameWithoutSuffix) {
        return hostnameWithoutSuffix.replaceAll(" ", "-");
    }
    
    // e) Determine hostname ending based on vowel count
    private String determineHostnameEnding(String hostnameWithoutSuffix) {
        int vowelCount = 0;
        for (char c : hostnameWithoutSuffix.toLowerCase().toCharArray()) {
            if (isVowel(c)) {
                vowelCount++;
            }
        }
        return vowelCount % 2 == 0 ? ".com" : ".ie";
    }
    
    // f) Determine path based on consonant pair count
    private String determinePath(String hostnameWithoutSuffix) {
        int consonantPairCount = 0;
        for (int i = 0; i < hostnameWithoutSuffix.length() - 1; i++) {
            char c1 = hostnameWithoutSuffix.toLowerCase().charAt(i);
            char c2 = hostnameWithoutSuffix.toLowerCase().charAt(i + 1);
            if (!isVowel(c1) && !isVowel(c2)) {
                consonantPairCount++;
            }
        }
        return consonantPairCount == 0 ? "/index" : consonantPairCount < 3 ? "/contactDetails" : "/basket";
    }
    
    
    private boolean isVowel(char c) {
        return "aeiou".indexOf(c) != -1;
    }

    // Getter method to return the generated URL
    public String getGeneratedURL() {
        return protocol + "://" + hostname + path;
    }

    // Method to prompt the user for company name using JOptionPane
    public String promptCompanyName() {
        return JOptionPane.showInputDialog("Enter the full company name:");
    }
    // Question 2 - Amazon URLs
    public boolean[] validateURLs(String[] urls) {
        boolean[] validations = new boolean[urls.length];
    
        for (int i = 0; i < urls.length; i++) {
            validations[i] = validateURL(urls[i]);
        }
    
        return validations;
    }
    
    private boolean validateURL(String url) {
        url = url.toLowerCase(); // Convert URL to lowercase
    
        if (!containsAmazonOrAws(url)) {
            return false;
        }
    
        if (!hasValidLength(url)) {
            return false;
        }
    
        return hasAllowedCharactersAndDot(url);
    }
    
    // It must contain “amazon” or “aws” in the URL hostname.
    private boolean containsAmazonOrAws(String url) {
        return url.contains("amazon") || url.contains("aws");
    }
    
    // It cannot be shorter than 5 characters.
	// It cannot be longer than 16 characters.
    private boolean hasValidLength(String url) {
    
        return url.length() >= 5 && url.length() <= 16;
    }
    
    // It can only contain letters (i.e. a – z inclusive, A – Z inclusive),
    // digits (i.e. 0 – 9 inclusive), and underscores (i.e. ‘_’), forward slashes (i.e. ‘/’), and periods (i.e. ‘.’)
    private boolean hasAllowedCharactersAndDot(String url) {
        // Check allowed characters
        boolean isValid = true;
        boolean dotFound = false;
        for (char c : url.toCharArray()) {
            if (!(Character.isLetterOrDigit(c) || c == '_' || c == '/' || c == '.')) {
                isValid = false;
                break;
            }
            if (c == '.') {
                dotFound = true;
            }
        }
        return isValid && dotFound;
    }
    
    
}
