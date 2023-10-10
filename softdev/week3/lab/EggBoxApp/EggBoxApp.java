
import javax.swing.JOptionPane;

public class EggBoxApp {
	public static void main(String[] args){
		//variables
		int eggs;
		int boxSize;
		int numBoxes;
		int leftOverEggs;
		//objects
		EggBox egg;
		egg=new EggBox();
		//inputs
		eggs=Integer.parseInt(JOptionPane.showInputDialog(null,"Enter a number of eggs"));
		boxSize=6;
		//set
		egg.setEggs(eggs);
		egg.setBoxSize(boxSize);
		//compute
		egg.computeBoxes();
		egg.computeLeftover();
		//get
		numBoxes=egg.getBoxes();
		leftOverEggs=egg.getLeftover();
		//output
		JOptionPane.showMessageDialog(null,"Number of boxes needed "+numBoxes);
		JOptionPane.showMessageDialog(null,"Number of eggs left over "+leftOverEggs);
	}
}