
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMessage = document.getElementById("errorMessage");

    if (username === "" || password === "") {
        errorMessage.textContent = "Please fill in all fields!";
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters!";
        return;
    }

    
    errorMessage.style.color = "green";
    errorMessage.textContent = "Login successful! Redirecting...";
    
    setTimeout(() => {
        window.location.href = "dashboard.html"; // Redirect to dashboard
    }, 1500);
});
