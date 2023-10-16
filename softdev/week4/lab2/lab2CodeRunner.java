import java.util.Scanner; 
public class lab2CodeRunner {
    private static int num;
    private static String answer;
    // Getters & Setters    
    private static void computePostiveNegative() {
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

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        num = sc.nextInt();
        sc.close();
        computePostiveNegative();
        System.out.println(answer);
    }
}