public class MountainBike extends Bike {
    private int suspensionLevel;

    public MountainBike() {
        super();
        suspensionLevel = 1;
    }

    public void setSuspensionLevel(int level) {
        suspensionLevel = level;
    }

    public void printStatus() {
        super.printStatus();
        System.out.println("Suspension Level: " + suspensionLevel);
    }

}
