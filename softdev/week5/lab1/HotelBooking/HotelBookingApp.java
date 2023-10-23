import java.util.Scanner;

public class HotelBookingApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String name = scanner.nextLine();
        int nights = scanner.nextInt();
        int age = scanner.nextInt();

        HotelBooking booking = new HotelBooking(name, nights, age);
        String message = booking.bookRoom();

        System.out.println(message);

        scanner.close();
    }
}
