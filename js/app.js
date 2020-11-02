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