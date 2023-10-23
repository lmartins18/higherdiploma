package Ex4;

public class LeapYearChecker {
    private int year;

    public LeapYearChecker(int year) {
        this.year = year;
    }

    public boolean isLeapYear() {
        return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    }

    public String getIsLeapYearMessage() {
        if (isLeapYear()) {
            return "Leap year";
        } else {
            return "Not a leap year";
        }
    }
}
