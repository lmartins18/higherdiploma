package Lab1;

public class Lab1 {
    private static void PrintDiamonFormation() {
        System.out.println("Diamond Formation:\n");
        System.out.println("  *  ");
        System.out.println(" * *  ");
        System.out.println("* * *");
        System.out.println(" * *  ");
        System.out.println("  *  ");
    }

    private static void PrintInitials() {
        System.out.println("Initials:\n");
        System.out.println("JJJJJJJ  PPPPPP");
        System.out.println("   J     P    P");
        System.out.println("   J     PPPPPP");
        System.out.println("   J     P");
        System.out.println(" JJJ     P");
    }

    public static void PrintLab1() {
        System.out.println();
        PrintDiamonFormation();
        System.out.println();
        PrintInitials();
        System.out.println();

    }

    public static void main(String[] args) {
        PrintLab1();
    }
}
