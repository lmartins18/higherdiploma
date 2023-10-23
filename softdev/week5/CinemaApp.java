import javax.swing.JOptionPane;
public class CinemaApp{
	public static void main(String[] args){
		//declare vars
		int age,numTickets;
		String day;
		double cost;
		//declare & create objects
		Cinema c;
		c=new Cinema();
		//input
		age=Integer.parseInt(JOptionPane.showInputDialog(null,"Enter your age"));
		day=JOptionPane.showInputDialog(null,"Enter either \"weekend\" or \"weekday\"");
		numTickets=Integer.parseInt(JOptionPane.showInputDialog(null,"Enter number of tickets"));
		//set
		c.setAge(age);
		c.setNumTickets(numTickets);
		c.setDay(day);
		//compute
		c.computeCost();
		//get
		cost=c.getCost();
		//output
		JOptionPane.showMessageDialog(null,numTickets+" tickets will cost: "+cost);
	}
}