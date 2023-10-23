package Ex2;

import javax.swing.JOptionPane;

public class HotelBookingApp {
    public static void main(String[] args) {
        // Input user's name
        String name = JOptionPane.showInputDialog(null, "Enter your name:");

        // Input required number of nights
        String nightsInput = JOptionPane.showInputDialog(null, "Enter the required number of nights:");
        int nights = Integer.parseInt(nightsInput);

        // Input user's age
        String ageInput = JOptionPane.showInputDialog(null, "Enter your age:");
        int age = Integer.parseInt(ageInput);

        HotelBooking booking = new HotelBooking(name, nights, age);
        String message = booking.bookRoom();

        JOptionPane.showMessageDialog(null, message);
    }
}
