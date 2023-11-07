class BottlesOfBeer {
    public static void main(String[] args) {
  
      for (int i = 99; i >= 0; i--) {
        if(i == 0) {
            System.out.println("No more bottles of beer on the wall, no more bottles of beer");
            System.out.println("Go to the store and buy some more, 99 bottles of beer on the wall");
            break;
        }
        String bottle = GetBottleNumberLyricFromNumeric(i);
        String nextBottle = GetBottleNumberLyricFromNumeric(i-1);
  
        System.out.println(String.format("%s of beer on the wall, %s of beer", bottle, bottle));
        System.out.println(String.format("Take one down and pass it around, %s of beer on the wall\n", nextBottle.toLowerCase()));
  
      }
    }
    private static String GetBottleNumberLyricFromNumeric(int bottle) {
      if (bottle == 0) {
        return "No more bottles";
      }
      else if(bottle > 1) {
        return String.valueOf(bottle) + " bottles";
      }
      else {
        return String.valueOf(bottle) + " bottle";
      }
  
    }
  }