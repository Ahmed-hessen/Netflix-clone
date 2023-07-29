

function formValidate () {
let email = document.getElementById("email").value;
let password = document.getElementById("pass").value;
let error = document.getElementById("error");
let text="";

if (email.length < 10|| email.indexOf("@") == -1 ){
        text = "Email is not valid";
        error.innerHTML=text;
        return false;
}else if ( password.length < 8 ){
        text = "Password is not valid";
        error.innerHTML=text;
        return false;
}else{
        return true;
}
}