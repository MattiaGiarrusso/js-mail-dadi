// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const namePlayer = prompt("inserisci il tuo nome");

// Generare dei numeri random da 1 a 6

// Farli generare per il giocatore

const numberPlayer = Math.floor(Math.random() * 6) + 1;
alert(namePlayer + ' ti è uscito ' + numberPlayer);

// Farli generare per il computer

const numberComputer = Math.floor(Math.random() * 6) + 1;
alert('Il computer ha realizzato '+ numberComputer);

// Stabilire chi dei due numeri è il vincitore

if(numberPlayer > numberComputer) {
    alert('complimenti, hai vinto');
}else if (numberPlayer == numberComputer) {
    alert('Pari. Nessun vincitore');
}else {
    alert('hai perso');
}

// Fine gioco