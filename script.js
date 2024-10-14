const signUpButton = document.getElementById('signUpOverlay');
const signInButton = document.getElementById('signInOverlay');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});



document.addEventListener("DOMContentLoaded", function () {
    // Get the Sign In and Sign Up buttons
    const signInButton = document.getElementById("signIn");
    const signUpButton = document.getElementById("signUp");
    const signUpFormButton = document.querySelector(".signUpbutton");

    // Add event listener for Sign In button
    signInButton.addEventListener("click", function () {
        // Redirect to home.html when Sign In button is clicked
        window.location.href = "HomePage.html";
    });

    // Add event listener for Sign Up button in the overlay
    signUpButton.addEventListener("click", function () {
        // Redirect to home.html when Sign Up button is clicked
        window.location.href = "HomePage.html";
    });

    // Add event listener for the Sign Up button in the form
    signUpFormButton.addEventListener("click", function (e) {
        // Prevent the default form submission
        e.preventDefault();
        // Redirect to home.html when Sign Up form button is clicked
        window.location.href = "HomePage.html";
    });
});
