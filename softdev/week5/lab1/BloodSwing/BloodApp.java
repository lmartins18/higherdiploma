package BloodSwing;

import javax.swing.JOptionPane;
import Blood.Blood;

public class BloodApp {
    public static void main(String[] args) {

        int age = Integer.parseInt(JOptionPane.showInputDialog(null, "Enter your age: "));
        String bloodType = JOptionPane.showInputDialog(null, "Enter your blood type: ").toString();

        Blood donor = new Blood(age, bloodType);

        String donationInfo = donor.getDonationInfo();
        JOptionPane.showMessageDialog(null, donationInfo);
        
    }
}
