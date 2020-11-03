/*Getting a hold of the inputs */

var nameInput = document.getElementById('name-input');
var emaiInput = document.getElementById('email-input');
var passInput = document.getElementById('password-input');
var ageInput = document.getElementById('age-input');
var telInput = document.getElementById('tel-input');
var adressInput = document.getElementById('adress-input');
var cityInput = document.getElementById('city-input');
var postalCodeInput = document.getElementById('pcode-input');
var dniInput = document.getElementById('dni-input');

//Getting a reference to the submit button

var submitButton = document.getElementById('submit-button');

//Regular expressions
var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var passwordFormat = /^(?=.*[0-9])[A-Za-z0-9]+/;
var adressFormat = /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z\s]+$/;

//Name input error handling

var validateName = function(){
    var value = nameInput.value;
    var span = getSpan(nameInput);
    hideSpan(span)
    var sixChars = false;
    var spaces = false;
    if(value.length < 6){
        reportError(span,'*Your full name must have at least 6 characters*');
    } else {
        sixChars = true;
    }
    if(value.indexOf(' ') === -1 || value.indexOf(' ') === 0 || value.indexOf(' ') === value.length-1){
        reportError(span,'*There must be a space only between you firstname and last name*')
    } else {
        spaces = true;
    }
    return ( sixChars && spaces);
}

nameInput.onblur = validateName;

nameInput.onfocus = function(){
    var span = getSpan(nameInput);
    hideSpan(span);
}

//Email input error handling
var validateEmail = function(){
    var value = emaiInput.value;
    var span = getSpan(emaiInput);
    hideSpan(span)
    var validEmail = false;
    if(!value.match(mailFormat)){
        reportError(span,'*Invalid email format*')
    } else {
        validEmail = true;
    }
    return validEmail;
}

emaiInput.onblur = validateEmail;

emaiInput.onfocus = function(){
    var span = getSpan(emaiInput);
    hideSpan(span);
}

//Password input error handling
var validatePassword = function(){
    var value = passInput.value;
    var span = getSpan(passInput);
    var eightChars = false;
    var containsNumber = false;
    var containsLetter = false;
    var notSpecialChars = false;
    hideSpan(span)
    if(value.length < 8){
        reportError(span,'*Your password must be at least 8 characters long*')
    } else {
        eightChars = true;
    }
    if(!value.match(passwordFormat)){
        reportError(span,'*Your password must contain a number*')
    } else {
        containsNumber = true;
    }
    if(!value.match(/^(?=.*[a-zA-Z])/)){
        reportError(span,'*Your password must contain a letter*');
    } else {
        containsLetter = true;
    }
    if(value.match(/^(?=.*[.!#$%&'*+/=?^_`{|}~-])/)){
        reportError(span,'*Your password mustn\'t contain special characters*');
    } else {
        notSpecialChars = true;
    }
    return ( eightChars && containsLetter && containsNumber && notSpecialChars);
}

passInput.onblur = validatePassword;

passInput.onfocus = function(){
    span = getSpan(passInput);
    hideSpan(span);
}

// Age input Error Handling

var validateAge = function(){
    var value = ageInput.value;
    var span = getSpan(ageInput);
    var oldEnough = false;
    hideSpan(span);
    if(value < 18){
        reportError(span,'*You must be over 18 to suscribe to this newspaper*')
    } else {
        oldEnough = true;
    }
    return oldEnough;
};

ageInput.onblur = validateAge;

ageInput.onfocus = function(){
    var span = getSpan(ageInput);
    hideSpan(span);
}

//Telephone input error handling

var validateTelephone = function(){
    var value = telInput.value;
    var span = getSpan(telInput);
    var sevenDigits = false;
    var notSpecialChars = false;
    hideSpan(span);
    if(value.length < 7){
        reportError(span,'*The number is too short, must be 7 digist or above*')
    } else {
        sevenDigits = true;
    }
    if(!value.match(/^[0-9]+$/)){
        reportError(span,'*Your telephone muts only consist of numbers (this excludes white spaces, ) and - )*');
    } else {
        notSpecialChars = true;
    }
    return (sevenDigits && notSpecialChars);
}

telInput.onblur = validateTelephone;

telInput.onfocus = function(){
    span = getSpan(telInput);
    hideSpan(span);
}

//City input error handling

var validateCity = function(){
    var value = cityInput.value;
    var span = getSpan(cityInput);
    var threeChars = false;
    hideSpan(span);
    if(value.length < 3){
        reportError(span,'*The name of the city is too short (3 or more characters)*');
    } else {
        threeChars = true;
    }
    return threeChars;
}

cityInput.onblur = validateCity;

cityInput.onfocus = function(){
    var span = getSpan(cityInput);
    hideSpan(span);
}

//Postal Code input error handling

var validatePCode = function(){
    var value = postalCodeInput.value;
    var span = getSpan(postalCodeInput);
    var threeChars = false;
    hideSpan(span);
    if(value.length < 3){
        reportError(span,'*The postal code is too short (3 or more characters)*');
    } else {
        threeChars = true;
    }
    return threeChars;
}

postalCodeInput.onblur = validatePCode;

postalCodeInput.onfocus = function(){
    var span = getSpan(postalCodeInput);
    hideSpan(span);
}

// DNI input error handling

var validateDNI = function(){
    var value = dniInput.value;
    var span = getSpan(dniInput);
    var onlyDigits = false;
    var righLength = false;
    hideSpan(span);
    if(value.length === 7 || value.length === 8){
        righLength = true;
    } else {
        reportError(span,'*Your DNI must be 7 or 8 digits long*')
    }
    if(!value.match(/^[0-9]+$/)){
        reportError(span,'*Your DNI must consist of only numbers*')
    } else {
        onlyDigits = true;
    }
    return (onlyDigits && righLength);
}

dniInput.onblur = validateDNI;

dniInput.onfocus = function(){
    var span = getSpan(dniInput);
    hideSpan(span);
}

//Adress input error handling

var validateAdress = function(){
    var value = adressInput.value;
    var span = getSpan(adressInput);
    var lettersAndNum = false;
    var fiveChars = false;
    var containSpace = false;
    hideSpan(span);
    if(!value.match(adressFormat)){
        reportError(span,'*The adress field must contain letters and numbers*');
    } else {
        lettersAndNum = true;
    }
    if(value.length < 5){
        reportError(span,'*The adress field must be 5 or more charecters long*');
    } else {
        fiveChars = true;
    }
    if(value.indexOf(' ')===-1 || value.indexOf(' ')===0 || value.indexOf(' ')===value.length-1){
        reportError(span,'*There should be a space only in the middle of the adress*');
    } else {
        containSpace = true;
    }
    return (containSpace && fiveChars && lettersAndNum);
}

adressInput.onblur = validateAdress;

adressInput.onfocus = function(){
    var span = getSpan(adressInput);
    hideSpan(span);
}

//Submit button event handling

submitButton.onclick = function(e){
    e.preventDefault();
    if( validateName() && validateEmail() && validatePassword() &&
        validateAge() && validateTelephone() && validateCity() &&
        validatePCode() && validateDNI() && validateAdress() ){
        alert('Fullname: ' + nameInput.value + '\nEmail: ' + emaiInput.value +
            '\nPassword: '+passInput.value+ '\nAge: ' + ageInput.value +
            '\nTEL: '+telInput.value+'\nCity: ' +cityInput.value+ '\nAdress: '+ adressInput.value +
            '\nPostal code: '+postalCodeInput.value+
            '\nDNI: '+dniInput.value);
    } else {
        alert('There was an error with one of the form fields');
    }
}
/*Error Message Functions*/

var hideSpan = function(span){
    span.innerText = '';
    span.classList.add('non-visible');
}
var getSpan = function(input){
    var parent = input.parentNode;
    var span = parent.getElementsByTagName('span')[0];
    return span
}
var reportError = function(span,text){
    span.innerText += ' ' + text;
    span.classList.remove('non-visible');
    span.classList.add('error-message');
}