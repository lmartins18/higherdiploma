package lab1;

public class Tickets {
    private int age;
    private int numberOfTickets;
    private double finalPrice;
    // Getters & Setters
    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getNumberOfTickets() {
        return numberOfTickets;
    }

    public void setNumberOfTickets(int numberOfTickets) {
        this.numberOfTickets = numberOfTickets;
    }

    public void computePrice() {
        double amount;
        if (age > 18) {
            amount = 18.15;
        }
        else {
            amount = 18.10;
        }
        double result = amount * numberOfTickets;
        finalPrice = result;
    }
    public double getFinalPrice() {
        return this.finalPrice;
    }
}
