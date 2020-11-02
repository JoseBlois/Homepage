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
var passwordWithALetterFormat = /^(?=.*[a-z])[A-Za-z0-9]+/

//Name input error handling

nameInput.onblur = function(){
    var value = nameInput.value;
    var span = getSpan(nameInput);
    if(value.length < 6){
        reportError(span,'*Your full name must have at least 6 characters*');
    }
    if(value.indexOf(' ') === -1 || value.indexOf(' ') === 0 || value.indexOf(' ') === value.length-1){
        reportError(span,'*There must be a space only between you firstname and last name*')
    }
}
nameInput.onfocus = function(){
    var span = getSpan(nameInput);
    hideSpan(span);
}

//Email input error handling

emaiInput.onblur = function(){
    var value = emaiInput.value;
    var span = getSpan(emaiInput);
    if(!value.match(mailFormat)){
        reportError(span,'*Invalid email format*')
    }
}
emaiInput.onfocus = function(){
    var span = getSpan(emaiInput);
    hideSpan(span);
}

//Password input error handling

passInput.onblur = function(){
    value = passInput.value;
    span = getSpan(passInput);
    if(value.length < 8){
        reportError(span,'*Your password must be at least 8 characters long*')
    }
    if(!value.match(passwordFormat)){
        reportError(span,'*Your password must contain a number*')
    }
    if(!value.match(passwordWithALetterFormat)){
        reportError(span,'*Your password must contain a letter*');
    }
}

passInput.onfocus = function(){
    span = getSpan(passInput);
    hideSpan(span);
}
/*Error Involve Functions*/

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