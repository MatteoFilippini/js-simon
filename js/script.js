/*
Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
*/


// FUNZIONE NUMERO RANDOM (genera 5 numeri diversi)
const array = [];
const getRandomNumebers = () => {
    for (let i = 0; array.length < 5; i++) {
        const r = Math.floor(Math.random() * 10) + 1;
        if (!(array.includes(r))) {
            array.push(r);
        }
    }
    return array;
}

// PRENDO GLI ELEMENTI DEL DOM DOVE STAMPARE
const display = document.getElementById('display');

// GENEREO 5 NUMERI RANDOM
console.log('random ' + getRandomNumebers());
alert('random ' + getRandomNumebers());

const userArray = [];
let flag = 0;
let message = 'Hai indovinato';
const winArray = [];
//dopo 3 secondi fai...
setTimeout(() => {
    // chiedi all'utente di inserire un numero
    for (let i = 0; i < 5; i++) {
        const n = parseInt(prompt(`Inserisci un numero`));
        userArray.push(n);
        // controlla che sia presente nell array
        if (array.includes(n)) {
            flag++;
            winArray.push(n);
        }
    }
    display.innerText = `Hai inserito i numeri: ` + userArray;
    // console.log('user ' + userArray);
    console.log(`${message} ${flag} numeri`);

    console.log('I numeri indovinati sono: ' + winArray)
}, 200);





