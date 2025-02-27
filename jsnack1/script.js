// //jsnack1
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

let num1 = prompt('Inserisci il primo numero');
let num2 = prompt('Inserisci il secondo numero');

if(num1 > num2){
    alert(`Il numero maggiore è ${num1}`);
}else if(num1 < num2){
    alert(`Il numero maggiore è ${num2}`);
}else{
    alert(`${num1} e ${num2} sono uguali`);
}