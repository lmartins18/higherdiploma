public class Cinema{
	//declare vars
	private int age,numTickets;
	private String day;
	private double cost;
	//constructor
	public Cinema(){
		age=0;
		day="";
		cost=0.0;
		numTickets=1;
	}
	//set
	public void setAge(int age){
		this.age=age;
	}
	public void setNumTickets(int numTickets){
		this.numTickets=numTickets;
	}
	public void setDay(String day){
		this.day=day;
	}
	//compute
	public void computeCost(){
		if(day.equalsIgnoreCase("Weekend")){
			if(age>=18){
				cost=12.50*numTickets;
			}
			else if(age<18 && age>0){
				cost=10.00*numTickets;
			}
			else{
				System.out.println("Invalid entry for age");
			}
		}
		else if(day.equalsIgnoreCase("Weekday")){
			if(age>=18){
				cost=10.50*numTickets;
			}
			else if(age<18 && age>0){
				cost=8.00*numTickets;
			}
			else{
				System.out.println("Invalid entry for age");
			}
		}
		else{
			System.out.println("Invalid entry for weekday/weekend");
		}
	}
	//get
	public double getCost(){
		return cost;
	}
}