
public class HotelBooking {
    private String name;
    private int nights;
    private int age;
    private double costPerNight = 90.0;

    public HotelBooking(String name, int nights, int age) {
        this.name = name;
        this.nights = nights;
        this.age = age;
    }

    public String bookRoom() {
        if (age >= 18) {
            double totalCost = calculateTotalCost();
            return String.valueOf(totalCost);
        } else {
            return "A booking can only be confirmed if the user is at least 18.";
        }

    }

    private double calculateTotalCost() {
        return nights * costPerNight;
    }
}
