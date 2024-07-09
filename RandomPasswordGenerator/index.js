let passwordLength; 

const isIncludeLowercase = document.getElementById('isIncludeLowercase');
const isIncludeUppercase = document.getElementById('isIncludeUppercase');
const isIncludeNumbers = document.getElementById('isIncludeNumbers');
const isIncludeSymbols = document.getElementById('isIncludeSymbols');
const passwordResult = document.getElementById('passwordResult');

function updatePasswordLength() {
    passwordLength = parseInt(document.getElementById('length').value, 10);
}

function randomPassword() {
    updatePasswordLength(); 

    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = lowerCaseChars.toUpperCase();
    const numberChars = "0123456789";
    const symbols = "!@#$%^&*()_=;'/.,<>`";

    let allowedChars = "";
    let password = "";

    allowedChars += isIncludeLowercase.checked ? lowerCaseChars : "";
    allowedChars += isIncludeUppercase.checked ? upperCaseChars : "";
    allowedChars += isIncludeNumbers.checked ? numberChars : "";
    allowedChars += isIncludeSymbols.checked ? symbols : "";
    
    if (allowedChars.length === 0) {
        window.alert("At least 1 set of characters needs to be selected.");
        return; 
    }

    password = generateRandomPassword(allowedChars, passwordLength);
    
    passwordResult.textContent = password; 
}

function generateRandomPassword(allowedChars, length) {
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        generatedPassword += allowedChars[randomIndex];
    }
    return generatedPassword;
}
