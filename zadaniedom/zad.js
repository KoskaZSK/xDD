function sprawdz(){
    var elKod = document.getElementById('kod').value;
    var elMiasto = document.getElementById('miasto').value;
    var wMiasto = /[A-z]/i;
    var wKod = /^\d{2}-\d{3}$/;

    console.log('f dziala');

    if(wKod.test(elKod) && wMiasto.test(elMiasto)){
        elWynik.innerHTML = 'Kod pocztowy: '+ elKod + ' <br/> Miasto: '+ elMiasto;

    }else
        alert('nieprawidlowe dane');
}

var elPrzycisk = document.getElementById('przycisk');
var elWynik = document.getElementById('wynik');


elPrzycisk.addEventListener('click',sprawdz);