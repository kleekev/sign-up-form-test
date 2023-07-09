const password = document.getElementById("user-password");

password.addEventListener("input", (event) => {
    if (password.validity.typeMismatch) {
        password.textContent("Password must be at least 12 characters!")
    }
});
