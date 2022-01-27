/*
1 - Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
*/

let numero = '';
let h1 = '';
let cubo = '';

let totale = 0;

for (i = 0; i <= 9; i++){
    numero = parseInt(prompt('Inserisci numero'));
    totale = totale + numero;
}

h1 += `<h1>${totale}</h1>`
    
let block1 = document.getElementById('block1');
block1.innerHTML = h1;