public class Blood {
    private int age;
    private String bloodType;

    public Blood(int age, String bloodType) {
        this.age = age;
        this.bloodType = bloodType;
    }

    public String getDonationInfo() {
        String bloodTypeNotRecognizedString = String.format("Blood type not recognized: %s", bloodType);
        String result = "";

        if (age >= 18) {
            result += "Can give blood to ";
            if (bloodType.equalsIgnoreCase("AB")) {
                result += "AB";
            } else if (bloodType.equalsIgnoreCase("A")) {
                result += "A and AB";
            } else if (bloodType.equalsIgnoreCase("B")) {
                result += "B and AB";
            } else if (bloodType.equalsIgnoreCase("O")) {
                result += "AB, A, B, O";
            } else {
                result = bloodTypeNotRecognizedString;
                return result;
            }
        } else {
            result += "Cannot donate";
        }
        result += "\nCan receive blood from ";

        if (bloodType.equalsIgnoreCase("AB")) {
            result += "AB, A, B, O";
        } else if (bloodType.equalsIgnoreCase("A")) {
            result += "A and O";
        } else if (bloodType.equalsIgnoreCase("B")) {
            result += "B and O";
        } else if (bloodType.equalsIgnoreCase("O")) {
            result += "O";
        } else {
            result = bloodTypeNotRecognizedString;
        }

        return result;
    }
}
