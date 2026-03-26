// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

let numeroComputer = Math.ceil(Math.random() * 6);
let numeroGiocatore = Math.ceil(Math.random() * 6);
console.log(`Il tuo dado ha dato ${numeroGiocatore}, il computer ha fatto ${numeroComputer}...`);

if (numeroGiocatore > numeroComputer) {
    console.log("Hai vinto!");
} else if (numeroGiocatore === numeroComputer){
    console.log("Pareggio!");
} else {
    console.log("Hai perso!");
}

