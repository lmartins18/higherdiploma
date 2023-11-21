import org.example.AuthenticationService;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class AuthenticationServiceTest {

    @Test
    public void testLoginWithValidCredentials() {
        AuthenticationService authService = new AuthenticationService();
        authService.createAccount("testUser", "password123");

        boolean result = authService.login("testUser", "password123");

        assertTrue(result);
    }

    @Test
    public void testLoginWithInvalidCredentials() {
        AuthenticationService authService = new AuthenticationService();
        authService.createAccount("testUser", "password123");

        boolean result = authService.login("testUser", "wrongPassword");

        assertFalse(result);
    }
    @Test
    public void testCreateAccount() {
        AuthenticationService authService = new AuthenticationService();

        authService.createAccount("newUser", "newPassword");

        boolean result = authService.login("newUser", "newPassword");

        assertTrue(result);
    }

    @Test
    public void testCreateAccountWithExistingUsername() {
        AuthenticationService authService = new AuthenticationService();
        authService.createAccount("existingUser", "password123");

        assertThrows(IllegalArgumentException.class, () -> authService.createAccount("existingUser", "newPassword"));
    }


    @Test
    public void testVerifyPasswordWithCorrectPassword() {
        AuthenticationService authService = new AuthenticationService();
        authService.createAccount("user1", "password123");

        boolean result = authService.verifyPassword("user1", "password123");

        assertTrue(result);
    }

    @Test
    public void testVerifyPasswordWithIncorrectPassword() {
        AuthenticationService authService = new AuthenticationService();
        authService.createAccount("user2", "password123");

        boolean result = authService.verifyPassword("user2", "wrongPassword");

        assertFalse(result);
    }
}