document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const dropdown = document.querySelector('.dropdown');

    menuButton.addEventListener('click', function () {
        dropdown.classList.toggle('show');  // Toggle the dropdown visibility
    });

    // Optional: Close dropdown if clicking outside of it
    window.addEventListener('click', function (event) {
        if (!menuButton.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove('show');  // Hide dropdown
        }
    });
});