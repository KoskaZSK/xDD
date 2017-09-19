var login = document.getElementById('login');
var haslo = document.getElementById('haslo');
var przycisk = document.getElementById('przycisk');
var a = document.getElementById('a');

przycisk.onclick = function (){
    if(login.value == 'Filip' && haslo.value == 'haslo'){
        a.style.color = 'red';
        a.textContent = 'Logowanie poprawne';
    }else{
        a.style.color = 'green';
        a.textContent = 'Złe dane logowania';
    }};