function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('login-message');

    if (username === "admin" && password === "admin123") {
        document.getElementById('login-section').style.display = "none";
        document.getElementById('portfolio-section').style.display = "block";
    } else {
        loginMessage.innerText = "Incorrect username or password!";
        loginMessage.style.color = "red";
    }
}
