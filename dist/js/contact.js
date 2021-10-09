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

    if (checkLength(Name.value, 4) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
        pass = false
    }

    if (checkLength(subject.value, 14) === true) {
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
    if (checkLength(message.value, 24) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
        pass = false
    }

    if (pass === true) {
        alert("Thank you for your message! We usually respond within 48 hours.");
        submitData();
        event.target.reset();
    }
}

function submitData() {
    fetch ("https://projectexam.zenabi.no/wp-json/contact-form-7/v1/contact-forms/5/feedback", {
        method: "POST",
        body: new FormData(form)
    })
}

form.addEventListener("submit", validateForm);

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