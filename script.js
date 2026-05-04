// DOM
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    let email = document.querySelector("input[name='email']").value;

    if (!email.includes("@")) {
        alert("Invalid email!");
        e.preventDefault();
    }
});