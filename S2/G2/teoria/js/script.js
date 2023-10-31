let nome = 'Mario'
let cognome = 'Rossi'
let eta = 45
let citta = 'Roma'

const utente = {
    nome: 'Mario',
    cognome: 'Rossi',
    eta: 45,
    citta: 'Roma',
    // Il CAP non è presente qui
}

utente.cap = '00100' // Il  CAP lo metto in stringa perché i numeri in Javascript non possono iniziare con zero. In questo caso, la proprietà CAP non è presente all'interno dell'oggetto "utente", ma Javascript la crea automaticamente e AGGIUNGE UNA NUOVA PROPRIETÀ
utente.nome = 'Luigi' // MODIFICA UNA PROPRIETÀ ESISTENTE

delete utente.citta // ELIMINA UNA PROPRIETÀ DELL'OGGETTO ESISTENTE

// Per

console.log(utente)
console.log(utente.nome)
console.log(utente.citta)
console.log(typeof utente)

// Assegno a newUtente lo stesso riferimento alla zona di memoria di utente

const newUtente = utente

const copyUtente = Object.assign(utente)
// Assegno nuove proprietà a newUtente

newUtente.nome = 'Giuseppe'
newUtente.cognome = 'Verdi'
newUtente.citta = 'Milano'

console.log(utente)
console.log(newUtente)

// Array

let animals = ['Cane', 'Gatto', 'Tartaruga', 'Zebra', 'Leone', 'Balena'] // Invece di scrivere...

console.log(animals)
console.log(animals[0])
console.log(animals[1])
console.log(animals[2])

animals[2] = 'Pescegatto'

console.log(animals)

console.log(animals.length)

animals.push('Orca')

console.log(animals)

animals.unshift('Panda')

console.log(animals)

let val = animals.pop()

console.log(val + ' è il valore eliminato dal nostro array')

animals.shift()

console.log(animals)

console.log(animals)
let animal1 = 'Cane'
let animal2 = 'Gatto'
let animal3 = 'Tartaruga'

// Negli array posso mettere qualunque tipo di dati, anche misti

let numbers = [55, 22, 28, 12]
let booleans = [true, false]
let mixedData = ['Pere', 'Mele', 'Banane', 55, 24, 88, true, false]

let arr = []

console.log(typeof arr)

// Per creare un nuovo array si può anche scrivere

let array = new Array()

// Strutture condizionali

let num = prompt("Inserisci un numero", "ad. es: 20")

if(num >=18) {
    console.log("L'utente è maggiorenne")
} else {
    console.log("L'utente è minorenne")
}