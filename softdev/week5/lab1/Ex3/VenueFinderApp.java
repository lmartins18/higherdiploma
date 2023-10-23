package Ex3;

import java.util.Scanner;

public class VenueFinderApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String program = scanner.nextLine();
        int year = scanner.nextInt();

        VenueFinder venueFinder = new VenueFinder(program, year);
        String venue = venueFinder.findVenue();

        System.out.println(venue);

        scanner.close();
    }
}
