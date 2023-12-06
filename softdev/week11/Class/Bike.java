public abstract class Bike {
    private int speed;
    private int gear;

    public Bike() {
        speed = 0;
        gear = 1;
    }

    public void applyBrake(int decrement) {
        speed -= decrement;
    }

    public void speedUp(int increment) {
        speed += increment;
    }

    public void changeGear(int newGear) {
        gear = newGear;
    }

    public void printStatus() {
        System.out.println("Gear: " + gear);
        System.out.println("SPeed: " + speed);
    }
}
