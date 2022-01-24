/*
Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
*/


// FUNZIONE NUMERO RANDOM
const getRandomNumebers = () => {
    const r = Math.floor(Math.random() * 10) + 1;
    return r;
}

// GENREO 5 NUMERI RANDOM
for (let i = 0; i < 5; i++) {
    console.log(getRandomNumebers());
}



