package org.example;

import java.util.HashMap;
import java.util.Map;

public class AuthenticationService {

    private Map<String, String> userCredentials;

    public AuthenticationService() {
        this.userCredentials = new HashMap<>();
    }

    public boolean login(String username, String password) {
        if (userCredentials.containsKey(username)) {
            String storedPassword = userCredentials.get(username);
            return storedPassword.equals(password);
        }
        displayWrongDetails();
        return false;
    }

    public void createAccount(String username, String password) {
        if (!userCredentials.containsKey(username)) {
            userCredentials.put(username, password);
        }
    }

    public boolean verifyPassword(String username, String password) {
        if (userCredentials.containsKey(username)) {
            String storedPassword = userCredentials.get(username);
            return storedPassword.equals(password);
        }
        return false;
    }

    public void displayWrongDetails() {
        System.out.println("Invalid username or password. Please try again.");
    }
}
