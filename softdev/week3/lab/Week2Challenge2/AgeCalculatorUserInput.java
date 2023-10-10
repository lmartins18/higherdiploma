public class AgeCalculatorUserInput {
	//vars
	private int age;
	private int year;
	private int yearOfBirth;
	//set
	public void setAge(int age){
		this.age = age;
	}
	public void setYear(int year){
		this.year = year;
	}
	//compute
	public void computeAge(){
		yearOfBirth = year - age;
	}
	//get
	public int getYearOfBirth(){
		return yearOfBirth;
	}
}