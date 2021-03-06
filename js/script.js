/*
Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirĂ  a contare dopo che avete schiacciato ok.)
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
const rand = document.getElementById('rand');

// GENEREO 5 NUMERI RANDOM
console.log('Memorizza questi ' + getRandomNumebers());
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
    // mostro all'utente i numeri che ha inserito
    display.innerHTML = `Hai inserito i numeri: ` + userArray + ` vediamo quanti ne hai indovinati...<br>`;
    // ogni secondo mostro uno dei 5 numeri estratti a caso
    const displayText = (str, array) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === str) {
                rand.innerHTML += `<span class='red'>${str}</span>` + ' ';

            } else {
                rand.innerHTML += str + ' ';
            }
        }
    }
    let i = 0;
    const timedLoop = () => {
        setTimeout(() => {
            displayText(array[i], userArray);
            i++;
            if (i < array.length) {
                timedLoop();
            }
        }, 1000)
    }
    timedLoop();
    //  dopo 2 secondi mostro se e quanti numeri ha indovinato
    setTimeout(() => {
        display.append(`${message} ${flag} numeri (${winArray})`);
    }, array.length * 1000 + 1000);





}, 500);





