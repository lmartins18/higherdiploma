package Ex3;

public class VenueFinder {
    private String program;
    private int year;

    public VenueFinder(String program, int year) {
        this.program = program.toLowerCase();
        this.year = year;
    }

    public String findVenue() {
        if (year == 1) {
            if (program.equals("hdaiml")) {
                return "Lagoona";
            } else if (program.equals("hdbc")) {
                return "Harbourmaster";
            }
        } else if (year == 2) {
            if (program.equals("hdaiml")) {
                return "Harbourmaster";
            } else if (program.equals("hdbc")) {
                return "Lagoona";
            }
        }
        return "Venue not found for the given year";
    }
}
