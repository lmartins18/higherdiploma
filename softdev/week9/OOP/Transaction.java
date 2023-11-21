public class Transaction {

	private integer transactionId;
	private integer userId;
	private Date date;
	private double amount;
	private String description;
	private String category;
	private String status;
	private boolean isBlocked;
	private PaymentType paymentType;

	public integer getTransactionID() {
		// TODO - implement Transaction.getTransactionID
		throw new UnsupportedOperationException();
	}

	/**
	 * 
	 * @param newID
	 */
	public void setTransactionID(int newID) {
		// TODO - implement Transaction.setTransactionID
		throw new UnsupportedOperationException();
	}

	public Date getDate() {
		return this.date;
	}

	/**
	 * 
	 * @param newDate
	 */
	public void setDate(Date newDate) {
		this.date = newDate;
	}

	public double getAmount() {
		return this.amount;
	}

	/**
	 * 
	 * @param newAmount
	 */
	public void setAmount(double newAmount) {
		this.amount = newAmount;
	}

	public String getDescription() {
		return this.description;
	}

	/**
	 * 
	 * @param newDesc
	 */
	public void setDescription(String newDesc) {
		this.description = newDesc;
	}

	public String getCategory() {
		return this.category;
	}

	/**
	 * 
	 * @param newCategory
	 */
	public void setCategory(String newCategory) {
		this.category = newCategory;
	}

	public String getStatus() {
		return this.status;
	}

	/**
	 * 
	 * @param newStatus
	 */
	public void setStatus(String newStatus) {
		this.status = newStatus;
	}

	public void setIsBlocked() {
		// TODO - implement Transaction.setIsBlocked
		throw new UnsupportedOperationException();
	}

	/**
	 * 
	 * @param paymentType
	 */
	public void setPaymentType(PaymentType paymentType) {
		this.paymentType = paymentType;
	}

	public PaymentType getPaymentType() {
		return this.paymentType;
	}

}