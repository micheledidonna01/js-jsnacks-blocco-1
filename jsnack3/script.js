// jsnack3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
let numbers;
let numbersTenTimes;


for (let i = 0; i < 10; i++) {
    numbersTenTimes = prompt('inserisci un numero');
    console.log(numbersTenTimes);
    numbers += numbersTenTimes;
    console.log(numbers);

}
alert(`La somma è ${numbers}`);
console.log(numbers);