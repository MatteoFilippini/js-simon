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

// GENREO 5 NUMERI RANDOM
console.log(getRandomNumebers());


// setTimeout(() => {
//     for (let i = 1; i < 6; i++) {
//         const n = parseInt(prompt(`Inserisci il ${i} numero`));
//         console.log(n)
//     }
// }, 3000);



