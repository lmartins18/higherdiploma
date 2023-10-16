public class PositiveNegative {
    private int num;
    private String answer;
    // Setters & getters
    public void setNum(int num) {
        this.num = num;
    }
    public String getAnswer() {
        return this.answer;
    }
    public void computePostiveNegative() {
        if(num == 0) {
            answer = "zero";
        }
        else if (num > 0) {
            answer = "positive";
        }
        else {
            answer = "negative";
        }
    }
}
