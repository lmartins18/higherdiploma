package Challenge1;

import javax.swing.JOptionPane;

public class SimpleAdditionUserInput {
	public static void main(String[] args) {
		int x = Integer.parseInt(JOptionPane.showInputDialog(null, "Enter a number"));
		int y = Integer.parseInt(JOptionPane.showInputDialog(null, "Enter a number"));
		int ans = x + y;
		// print
		System.out.println(ans);
		JOptionPane.showMessageDialog(null, "The answer is: " + ans);
	}
}