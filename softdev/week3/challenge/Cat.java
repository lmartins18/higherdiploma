public class Cat {
    // Variables
    String name;
    String breed;
    int age;
    String meowSound;

    // Getters & Setters
    public void setName(String name) {
        this.name = name;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setMeow(String meowSound) {
        this.meowSound = meowSound;
    }

    public String getName() {
        return this.name;
    }

    public String getBreed() {
        return this.breed;
    }

    public int getAge() {
        return this.age;
    }

    public String getMeow() {
        return this.meowSound;
    }

    public void printMeow()
    {
        System.out.println(meowSound + " " + meowSound + " " + meowSound);
    }
}