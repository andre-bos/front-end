console.log("Sono nel file esterno della pagina")
console.log("Stampa nella console del browser il contenuto delle parentesi")

var v //Dichiarazione di una variabile

v = 'valore' //Inizializzazione di una variabile

var q = 'variabile q' // Dichiarazione e inizializzazione di una variabile. La dichiaro e le do un valore (la inizializzo) nello stesso momento

// Num | String | Boolean | Null | Undefined

var num1 = 25;
var num2 = 15.5;

var bol1 = true
var bol2 = false

var emp1 = null;
var emp2 = undefined;

var Somma = num1 + num2;

console.log(Somma)

var str1 = 'Ciao';

console.log(str1)

var test = "Test!"
var test = "Nuovo Test!"

console.log(test)

// Operatori aritmetici

// + * / %

let n1 = 5;
let n2 = 10;

let summa = n1 + n2;
let diff = n1 - n2;
let molt = n1 * n2
let div = n2 / n1;
let mod = n2 % n1;

console.log("Somma: " + summa)
console.log("Differenza: " + diff)
console.log("Moltiplicazione: " + molt)
console.log("Divisione: " + div)
console.log("Resto: " + mod)

n1 = n1 + 2 // Forma lunga
n1 += 2 // Forma contratta

// Operatori logici

console.log(n1 > n2) // Restituisce un valore booleano: vero o falso

console.log(n1 == n2) // Restituisce false perché 5 non è uguale a 10

let n3 = 11
let n4 = "11"

console.log(n3 == n4)
console.log(n3 === n4)

console.log(n3 != n4)
console.log(n3 !== n4)

console.log(n3 !== n4 && n3 > n4)

// Operatore ternario

let eta = 15
let accesso = (eta >= 18 ? 'Accesso Consentito' : 'Accesso Negato')

console.log(accesso)