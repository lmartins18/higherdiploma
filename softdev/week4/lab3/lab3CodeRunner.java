package lab3;
import java.util.Scanner; 
public class lab3CodeRunner {
    private static int num;
    private static String answer;
    // Getters & Setters    
    private static void computeOddEven() {
        if (num % 2 == 0) {
            answer = "even";
        } else {
            answer = "odd";
        }
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        num = sc.nextInt();
        sc.close();
        computeOddEven();
        System.out.println(answer);
    }
}