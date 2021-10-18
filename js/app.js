var $form = document.getElementsByTagName('form');
var $error = document.getElementById('error');
var $email = document.getElementById('email');
var $password = document.getElementById('password');

function addError(message){
    $error.innerHTML = message;
    $error.classList.remove('d-none');
    $error.classList.add('d-block');
}

function clear(){
    $email.value="";
    $password.value="";
}

function validate(event){
    event.preventDefault();
    if($email.value == 'admin@unindar.com'){
        if($password.value == 12345678){
            clear();
            location.replace('home.html');
        }else{
            addError('password salah');
        }
    }else{
        addError('Email salah atau tidak terdaftar');
    }
}

$form = addEventListener('submit', validate);