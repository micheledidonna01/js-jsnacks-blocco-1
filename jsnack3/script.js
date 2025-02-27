// jsnack3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
let number = 0;


for (let i = 0; i < 10; i++) {
    let numbersTenTimes = Number(prompt('inserisci un numero'));
    console.log(numbersTenTimes);
    number += numbersTenTimes;
    console.log(number);
}
alert(`La somma è ${number}`);
console.log(number);