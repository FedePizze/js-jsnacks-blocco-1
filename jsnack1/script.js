/*
1 - Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
*/

let numero = '';
let li = '';
let cubo = '';

for (i = 0; i <= 9; i++){
    numero = parseInt(prompt('Inserisci numero'));
    li += `<li id="num">${numero}</li>`;

    
    let block1 = document.getElementById('block1');
    block1.innerHTML = li;
}