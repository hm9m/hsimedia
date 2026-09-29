const form = document.getElementById("loginForm");
const message = document.getElementById("loginMessage");

const password = document.getElementById("password");
const showPassword = document.getElementById("showPassword");

showPassword.addEventListener("click", () => {

    if (password.type === "password") {
        password.type = "text";
        showPassword.textContent = "HIDE";
    } else {
        password.type = "password";
        showPassword.textContent = "SHOW";
    }

});

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const username = document
        .getElementById("username")
        .value
        .trim();

    const enteredPassword = password.value.trim();

    if (!username || !enteredPassword) {
        message.textContent = "Enter a username and password.";
        return;
    }

    message.textContent = "Authenticating...";

    // Demo session only.
    // Password is NOT saved.
    sessionStorage.setItem("mediaPortalDemo", "true");
    sessionStorage.setItem("mediaPortalUser", username);

    setTimeout(() => {
        window.location.href = "portal.html";
    }, 700);

});
