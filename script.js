function validateForm() {
    const email = document.forms['myForm']['fieldEmail'].value;
    const isEmail = IsEmail(email);

    const errorIcon = document.getElementById('errorIcon');
    const errorMessage = document.getElementById('errorMessage');

    errorIcon.style.display = !isEmail ? 'block' : 'none';
    errorMessage.style.display = !isEmail ? 'block' : 'none';

    if (isEmail) alert('E-mail sent');

    return isEmail;
}

// font: https://codigofonte.com.br/codigos/validacao-completa-de-email-com-javascript-e-expressao-regular
function IsEmail(email){
    var exclude=/[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;
    var check=/@[\w\-]+\./;
    var checkend=/\.[a-zA-Z]{2,3}$/;
    if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){return false;}
    else {return true;}
}