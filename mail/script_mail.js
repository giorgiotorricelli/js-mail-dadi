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

const domini = ["gmail", "outlook", "hotmail", "libero"]
const estensioni = ["com", "it", "net"]
let userEmail = ""

while (true) {
    mailValidation = false
    userEmail = prompt("Inserisci la tua email: ");
    for (let i = 0; i < userEmail.length; i++) {
        if (userEmail[i] === "@") { //controllo se c'è la chiocciola
            let dominioEstensione = userEmail.slice(i + 1); //salvo la parte dopo la chiocciola
            let arrayDominioEstensione = dominioEstensione.split("."); //splitto dominio ed estensione in un array

            if (domini.includes(arrayDominioEstensione[0]) && estensioni.includes(arrayDominioEstensione[1])) {
                mailValidation = true
            }
        }
    }
    if (mailValidation === true) {
        break
    } else {
        console.error("Inserisci una mail valida");
    }
}


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

