public class PaymentType {

	private integer typeID;
	private String typeName;
	private String description;

	public integer getTypeID() {
		return this.typeID;
	}

	/**
	 * 
	 * @param newTypeID
	 */
	public void setTypeID(int newTypeID) {
		// TODO - implement PaymentType.setTypeID
		throw new UnsupportedOperationException();
	}

	public String getTypeName() {
		return this.typeName;
	}

	public String getDescription() {
		return this.description;
	}

	/**
	 * 
	 * @param newTypeName
	 */
	public void setTypeName(String newTypeName) {
		this.typeName = newTypeName;
	}

	/**
	 * 
	 * @param newDesc
	 */
	public void setDescription(String newDesc) {
		this.description = newDesc;
	}

	public void processPayment() {
		// TODO - implement PaymentType.processPayment
		throw new UnsupportedOperationException();
	}

}