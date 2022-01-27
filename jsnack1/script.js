/*
1 - Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
2 - Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
3 - Calcola la somma e la media dei primi 10 numeri.
*/

let numero = '';
let li = '';
let cubo = '';

for (i = 0; i <= 9; i++){
    numero = parseInt(prompt('Inserisci numero'));
    

    if (i >= 2 && i <= 5) {
        cubo = (Math.pow(numero, numero) * numero);
        li += `<li>${cubo}</li>`
    } else {
        li += `<li>${numero}</li>`
    }

    let block1 = document.getElementById('block1');
    block1.innerHTML = li;
}

