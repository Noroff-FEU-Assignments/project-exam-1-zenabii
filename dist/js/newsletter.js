const form = document.querySelector("#confirmation_container");
const email = document.querySelector("#newsletteremail");
const emailError = document.querySelector("#emailError");


function validateForm(event) {
    var pass = true 
    event.preventDefault();

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        pass = false
    }

    if (pass === true) {
        alert("Thank you for signing up to our newsletter!");
        event.target.reset();
    }
    console.log(validateForm);
}

form.addEventListener("submit", validateForm);

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}