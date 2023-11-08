function submitForm() {
    event.preventDefault();
    // Get user's name and email
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Hide the form
    document.getElementById("form-container").style.display = "none";

    // Create a message
    const message = name + ", thank you for your details. We will be in touch via " + email + " shortly.";

    // Display the message
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.style.display = "block";
}