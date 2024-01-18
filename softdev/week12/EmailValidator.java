public class EmailValidator {

    private String[] extensions;

    // Method to set the valid domain extensions.
    public void setExtensions(String[] extensions) {
        for (String extension : extensions) {
            if (extension.length() != 3) {
                throw new IllegalArgumentException("Invalid extension: " + extension + ". Extensions must be three letters long.");
            }
        }

        // If all extensions are valid, set them.
        this.extensions = extensions;
    }

    public String validateEmailAddress(String email) {
        // Check that there is an @ symbol in the email address.
        if (!email.contains("@")) {
            return "Invalid email address: Missing @ symbol";
        }
        // Find the last dot in the email address.
        int lastDotIndex = email.lastIndexOf('.');

        // Check that there is a . before the 3 character extension.
        if (lastDotIndex == -1 || lastDotIndex != email.length() - 4) {
            return "Invalid email address: Invalid extension or missing dot (.) before the 3 character extension";
        }

        // Extract the domain extension.
        String domainExtension = email.substring(lastDotIndex + 1);

        // Ensure that the domain extension is one of the 3 character Strings from the array.
        boolean isValidExtension = false;
        for (String validExtension : extensions) {
            if (domainExtension.equals(validExtension)) {
                isValidExtension = true;
                break;
            }
        }

        if (!isValidExtension) {
            return "Invalid email address: Invalid domain extension.";
        }

        // If all checks pass, the email address is valid.
        return "Email address is valid.";
    }
}