public class User {

	public String username;
	public String password;
	private boolean isAuthenticated;

	public boolean getIsAuthenticated() {
		return this.isAuthenticated;
	}

	/**
	 * 
	 * @param value
	 */
	private void setIsAuthenticated(boolean value) {
		this.isAuthenticated = value;
	}

}