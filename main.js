const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const mobileInput = document.getElementById("mobile");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const mobileError = document.getElementById("mobileError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

form.addEventListener("submit", function(event){
    let isValid = true;

    if(nameInput.value === ""){
        nameError.textContent = "Name is required";
        isValid = false;
    }
    else{
        nameError.textContent = "";
    }

    if(emailInput.value === ""){
        emailError.textContent = "Email is required";
        isValid = false;
    }
    else if(!isValidEmail(emailInput.value)){
        emailError.textContent = "Invalid email format";
        isValid = false;
    }
    else{
        emailError.textContent = "";
    }

    if(mobileInput.value === ""){
        mobileError.textContent = "Mobile number is required";
        isValid = false;
    }
    else if(!isValidMobile(mobileInput.value)){
        mobileError.textContent = "Invalid mobile number format";
        isValid = false;
    }
    else{
        mobileError.textContent = "";
    }

    if(passwordInput.value === ""){
        passwordError.textContent = "Password is required";
        isValid = false;
    }
    else{
        passwordError.textContent = "";
    }

    if(confirmPasswordInput.value === ""){
        confirmPasswordError.textContent = "Please confirm password";
        isValid = false;
    }
    else if(passwordInput.value !== confirmPasswordInput.value){
        confirmPasswordError.textContent = "Password do not match";
        isValid = false;
    }
    else{
        confirmPasswordError.textContent = "";
    }

    if(!isValid){
        event.preventDefault();
    }
})

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidMobile(mobile){
    const mobileRegex = /^[0-9]{10}$/;
    return mobileRegex.test(mobile);
}