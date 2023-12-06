public class App {
    public static void main(String[] args) {
        MountainBike myMountainBike = new MountainBike();

        System.out.println("Initial Status:");
        myMountainBike.printStatus();
        System.out.println();

        myMountainBike.changeGear(3);
        System.out.println("Status after changing gear to 3:");
        myMountainBike.printStatus();
        System.out.println();

        myMountainBike.speedUp(15);
        System.out.println("Status after speeding up by 15 units:");
        myMountainBike.printStatus();
        System.out.println();

        myMountainBike.applyBrake(3);
        System.out.println("Status after applying brake by 3 units:");
        myMountainBike.printStatus();
        System.out.println();

        myMountainBike.setSuspensionLevel(2);
        System.out.println("Status after setting suspension level to 2:");
        myMountainBike.printStatus();
    }
}
