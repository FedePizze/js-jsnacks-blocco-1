/*
2 - Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/

let tot = '';
let numero = '';
let h1 = '';
let cubo = '';

tot = parseInt(prompt('Inserisci numero'));

for (i = 1; i <= tot; i++){
    numero = i;
    cubo = (Math.pow(numero, numero) * numero);
    h1 += `<h1>${cubo}</h1>`
    
    let block1 = document.getElementById('block1');
    block1.innerHTML = h1;
}