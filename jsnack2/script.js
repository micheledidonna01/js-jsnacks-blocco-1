// jsnack2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

let stringa1 = prompt('Inserisci la prima parola');
let stringa2 = prompt('Inserisci la seconda parola');

if(stringa1.length > stringa2.length){
    alert(`La parola più corta è ${stringa2}`);
    alert(`La parola più lunga è ${stringa1}`);
}else if(stringa1.length < stringa2.length){
    alert(`La parola più corta è ${stringa1}`);
    alert(`La parola più lunga è ${stringa2}`);
}else{
    alert(`${stringa1} e ${stringa2} hanno lo stesso numero di caratteri: ${stringa1.length}`);
}