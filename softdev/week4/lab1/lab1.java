package lab1;

import javax.swing.JOptionPane;

public class lab1 {
    public static void main(String[] args) {
        Tickets ts = new Tickets();
        // Test if number is positive.
        int age = Integer.parseInt(JOptionPane.showInputDialog(null, "Enter your age:"));
        ts.setAge(age);
        int numberOfTickets = Integer.parseInt(JOptionPane.showInputDialog(null, "Enter number of tickets needed:"));
        ts.setNumberOfTickets(numberOfTickets);
        ts.computePrice();
        System.out.println(ts.getFinalPrice());
        JOptionPane.showMessageDialog(null, "Final price is: " + ts.getFinalPrice());
    }
}