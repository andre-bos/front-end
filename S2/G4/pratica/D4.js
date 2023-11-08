/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function area(l1, l2) {
    let areaResult = l1 * l2
    return areaResult
}

let risultato = area(6, 3)

console.log(risultato) */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
function crazySum(x, y) {
    let sum;
    if(x !== y) {
        sum = x + y
    } else if(x === y) {
        sum = (x + y) * 3
    }

    return sum
}

let num1 = 20
let num2 = 20

let sommaPazza = crazySum(num1, num2)

console.log("La somma pazza è: " + sommaPazza) */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function crazyDiff(x) {
    let diff
    if(x > 19) {
        diff = Math.abs(x - 19) * 3
    } else {
        diff = Math.abs(x - 19)
    }

    return diff
}

let subNum = 21

let differenzaPazza = crazyDiff(subNum)

console.log("La differenza pazza è: " + differenzaPazza) */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* 
function boundary(n) {
    let valVerita;
    if (n >= 20 && n <= 100 || n === 400) {
        valVerita = true
    } else {
        valVerita = false
    }

    return valVerita
}

let mioNumero = 155

let VerificaIntervallo = boundary(mioNumero)

console.log("Il valore 'valVerità' ritornato dalla funzione è: " + VerificaIntervallo) */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function epify(str) {
    if(str.indexOf('EPICODE') === 0) { 
        return str
    } else {
        return 'EPICODE ' + str
    }
}

let stringa = 'epicode è una bella scuola'

let epiAdd = epify(stringa)

console.log(epiAdd) */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function check3and7(numPos) {
    if(numPos % 3 === 0) {
        console.log("Il numero " + numPos + " è multiplo di 3")
    } else if(numPos % 7 === 0) {
        console.log("Il numero " + numPos + " è multiplo di 7")
    } else {
        console.log("Il numero " + numPos + " NON è multiplo né di 3 né di 7")
    }
}

check3and7(14) */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* function reverseString(str) {
    let splitString = str.split('')
    let reverseArray = splitString.reverse()
    let joinArray = reverseArray.join("")

    return joinArray
}

console.log(reverseString("Una casa accogliente")) */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(string) {
    let stringToArr = string.split(' ')
    
    for(let i = 0; i < stringToArr.length; i++) {
        stringToArr[i] = stringToArr[i].charAt(0).toUpperCase() + stringToArr[i].slice(1)
    }

   console.log("Ecco la stringa con le iniziali delle singole parole maiuscole: " + stringToArr.join(' '))
    
}

upperFirst("la vacanza incredibile ha comportato vorticosi cambiamenti")

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str) {

    if(str.length < 2) {
        return "La stringa è troppo corta per essere tagliata"
    } else {
        str = str.slice(1, -1)
        return str
    }
    
}

console.log(cutString("Ciao"))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
    let randomNumbers = []
    for(let i = 0; i < n; i++) {
        randN = Math.floor(Math.random() * 11)
        randomNumbers.push(randN)
    }

    return randomNumbers

}

let arrayCasuale = giveMeRandom(6)

console.log(arrayCasuale)

// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function checkArray(randomArray) {
    if(Array.isArray(randomArray)) {
        let sum = 0
        for(let i = 0; i < randomArray.length; i++)
        if(randomArray[i] > 5) {
        console.log('Il numero ' + randomArray[i] + " è maggiore di 5")
        sum += randomArray[i]
    }

    console.log('La somma di tutti i valori casuali maggiori di 5 è: ' + sum)
    return randomArray
    } else {
        console.log("Il valore inserito non è un array")
    }
}

checkArray(giveMeRandom(15))

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCart = [
    {
        price: 250,
        name: 'tagliaerba',
        id: 1,
        quantity: 3
    },

    {
        price: 300,
        name: 'motosega',
        id: 2,
        quantity: 5
    },

    {
        price: 15,
        name: 'diserbante',
        id: 3,
        quantity: 1
    },

    {
        price: 20,
        name: 'lanternaGiardino',
        id: 4,
        quantity: 2
    }
]

function shoppingCartTotal() {
    let totale = 0
    for(let i = 0; i < shoppingCart.length; i++) {
        let price = shoppingCart[i].price
        let quantity = shoppingCart[i].quantity

        totale += (price * quantity)
    }

    let totValuta = totale + ' ' + 'euro'

    return totValuta
}

console.log("Il totale dei prodotti presenti nel carrello è: " + shoppingCartTotal())

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function addToShoppingCart(newObj) {
    shoppingCart.push(newObj)
    let newTotalElements = shoppingCart.length

    return newTotalElements
}

let newItem = {
    price: 10,
    name: 'fertilizzante',
    id: 5,
    quantity: 1
}

console.log(addToShoppingCart(newItem))

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */