/*
3 - Calcola la somma e la media dei primi 10 numeri.
*/

let totale = 0;
let h1 = '';

for (i = 0; i < 11; i++){
    totale = totale + i;
}

const media =  totale / 10;

h1 += `<div>
            <h1>${totale}</h1>
            <h1>${media}</h1>
       </div>`
 
let block1 = document.getElementById('block1');
block1.innerHTML = h1;