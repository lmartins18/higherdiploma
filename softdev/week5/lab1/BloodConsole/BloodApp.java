package BloodConsole;
import java.util.Scanner;
import Blood.Blood;

public class BloodApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        
        System.out.print("Enter your blood type: ");
        String bloodType = scanner.nextLine();

        
        Blood donor = new Blood(age, bloodType);

        String donationInfo = donor.getDonationInfo();

        System.out.println(donationInfo);

        scanner.close();
    }
}
