package lab3;

public class OddEven {
    private int num;
    private String answer;
    // Setters & getters
    public void setNum(int num) {
        this.num = num;
    }
    public String getAnswer() {
        return this.answer;
    }
    public void computeOddEven() {
        if (num % 2 == 0) {
            answer = "even";
        } else {
            answer = "odd";
        }
    }
}
