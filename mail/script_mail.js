// Crea una lista di email di invitati ad una festa.
// Chiedi all utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota: 
// Non è necessario provvedere alla validazione delle email, però se volete è una feature ben accetta.

const emailList = ["mariorossi@gmail.com", "dariobianchi@gmail.com", "albaverdi@gmail.com",
    "chiaragiallini@gmail.com", "donaldtrump@gmail.com", "matteosalvini@gmail.com", "peterparker@gmail.com"
]


let userEmail = prompt("Inserisci la tua email: ");
let invitato = false

for (let i = 0; i < emailList.length; i++) {
    
    if (userEmail === emailList[i]) {
        console.log("Sei invitato alla mia festa!");
        invitato = true
        break
    } 
}

if (invitato === false) {
    console.log("Non sei nella lista degli invitati");
}

