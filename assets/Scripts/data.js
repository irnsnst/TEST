function displayRegistrationData() {
    const userName = localStorage.getItem('userName') || '';
    const email = localStorage.getItem('email') || '';
    const phone = localStorage.getItem('phone') || '';
    const password = localStorage.getItem('password') || ''; // Retrieve password

    document.getElementById("userName").textContent = userName;
    document.getElementById("email").textContent = email;
    document.getElementById("phone").textContent = phone;
    document.getElementById("password").textContent = password; // Set password as text content
}

document.addEventListener("DOMContentLoaded", function () {
    displayRegistrationData();
});
