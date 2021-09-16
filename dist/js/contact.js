const form = document.querySelector("#contactForm");
const Name = document.querySelector("#Name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");


function validateForm(event) {
    var pass = true 
    event.preventDefault();

    if (checkLength(Name.value, 0) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
        pass = false
    }

    if (checkLength(subject.value, 0) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
        pass = false
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        pass = false
    }
    if (validateEmail(message.value) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
        pass = false
    }

    if (pass === true) {
        alert("Thank you for your message! We usually respond within 48 hours.");
        event.target.reset();
    }
}

form.addEventListener("#formButton", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}