/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let val1 = Number(prompt("Inserisci un numero", "ad es. 1, 2, 3..."))
let val2 = Number(prompt("Inserisci un altro numero", "ad es. 1, 2, 3..."))

if(val1 > val2) {
  console.log(val1 + " è maggiore di " + val2)
} else if(val1 < val2) {
  console.log(val1 + " è minore di " + val2)
} else {
  console.log(val1 + " è uguale a " + val2)
} */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number = Number(prompt("Inserisci un numero intero", "ad es. 1, 2, 3, 5..."))

if(number !== 5) {
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num = Number(prompt("Inserisci"))

if(num % 5 === 0) {
  console.log("Il numero " + num + " è divisibile per 5")
} else {
  console.log("Il numero " + num + " NON è divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num1 = 2
let num2 = 10

if(num1 + num2 == 8 || num1 - num2 == 8 || num1 == 8 || num2 == 8) {
  console.log("Le condizioni sono verficate")
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 25
let costiSpedizione = 10

if(totalShoppingCart > 50) {
  console.log("La tua spedizione è gratuita! Complimenti!")
} else {
  console.log("Al tuo ordine di " + totalShoppingCart + " euro, devono essere aggiunti " + costiSpedizione + " euro di costi di spedizione, per un totale di " + (totalShoppingCart + costiSpedizione) + " euro")
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let discount = 20

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let valore1 = 10
let valore2 = 20
let valore3 = 30


if (valore1>valore2 && valore1>valore3)
{
        if (valore2>valore3)
        {
            console.log(valore1 + ", " + valore2 + ", " + valore3);
        }
        else
        {
            console.log(valore1 + ", " + valore2 + ", " + valore3);
        }
}
else if (valore2 > valore1 && valore2 > valore3)
{
        if (valore1 > valore3)
        {
             console.log(valore2 + ", " + valore1 + ", " + valore3);
        }
        else
        {
             console.log(valore2 + ", " + valore3 + ", " + valore1);
        }
}
else if (valore3>valore1 && valore3>valore2)
{
        if (valore1>valore2)
        {
            console.log(valore3 + ", " + valore1 + ", " + valore2);
        }
        else
        {
            console.log(valore3 + ", " + valore2 + ", " + valore1);
        }
}        


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let valType = "55";
let tipo = typeof valType

console.log(tipo)

if(tipo === 'number') {
  console.log("Il valore è un numero")
} else {
  console.log("Il valore NON è un numero")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let valoreNum = 50

if(valoreNum % 2 === 0) {
  console.log("Il numero è pari")
} else {
  console.log("Il numero è dispari")
}



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7
  if (val < 5) {
      console.log("Meno di 10");
    } else if (val < 10) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = 'Toronto'

console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName

console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop()

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let arr = []
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
arr.splice(9, 1, 100)

console.log(arr)