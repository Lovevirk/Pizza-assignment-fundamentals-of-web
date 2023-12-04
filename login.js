// Wait for the HTML document to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {
    
    // Get references to the username and password input fields and the login form
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginForm = document.getElementById("login-form");

    // Add an event listener to the login form for the form submission
    loginForm.addEventListener("submit", function (event) {
        // Prevent the default form submission behavior to handle it manually
        event.preventDefault();

        // Retrieve the values entered in the username and password fields
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Check if the entered username and password match the expected values
        if (username === "Tariq" && password === "Tariq") {
            // If the credentials are correct, redirect to the "pizza1.html" page
            window.location.href = "pizza1.html";
        } else {
            // If the credentials are incorrect, display an error message
            document.getElementById("error").textContent = "Invalid username or password.";
        }
    });
});
