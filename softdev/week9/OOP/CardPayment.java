 public class CardPayment extends PaymentType {

	private String cardNumber;
	private String cardHolder;
	private Date expirationDate;
	private String cvv;

	public String getCardNumber() {
		return this.cardNumber;
	}

	/**
	 * 
	 * @param newCardNumber
	 */
	public void setCardNumber(String newCardNumber) {
		this.cardNumber = newCardNumber;
	}

	public String getCardHolder() {
		return this.cardHolder;
	}

	/**
	 * 
	 * @param newCardHolder
	 */
	public void setCardHolder(String newCardHolder) {
		this.cardHolder = newCardHolder;
	}

	public Date getExpirationDate() {
		return this.expirationDate;
	}

	/**
	 * 
	 * @param newDate
	 */
	public void setExpirationDate(Date newDate) {
		this.expirationDate = newDate;
	}

	public String getCVV() {
		// TODO - implement CardPayment.getCVV
		throw new UnsupportedOperationException();
	}

	/**
	 * 
	 * @param newCVV
	 */
	public void setCVV(String newCVV) {
		// TODO - implement CardPayment.setCVV
		throw new UnsupportedOperationException();
	}

	public void processPayment() {
		// TODO - implement CardPayment.processPayment
		throw new UnsupportedOperationException();
	}

}