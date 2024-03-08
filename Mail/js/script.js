// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Per la soluzione di questo esercizio NON è consentito utilizzare .includes di js!


// creare una lista di mail

const mailList = ["paolofasoldoni@mail.com", "felicematonto@mail.com", "mihaitrovato@mail.com", "sonoio@mail.com", "ilproiettile@mail.com"];
console.log(mailList);

// Chiedere all’utente la sua email

const userMail = prompt("Qual è la tua mail?");
console.log(userMail);


// Controllare che sia presente nella lista di chi può accedere

let mailFound = false;

// Scorrere l'elenco delle mail
for(let i = 0; i < mailList.length; i++) {
    const mailThis = mailList[i];

    if(mailThis === userMail) {
        mailFound = true;
    }
}

// Rispondere a chi tenta l'accesso

if(mailFound === true) {
    alert('La tua mail è presente nella lista: puoi accedere.');
} else {
    alert('La tua mail non è presente nella lista: accesso negato.');
}