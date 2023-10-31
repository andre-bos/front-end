console.log("Stampa un valore in console, ovvero l contenuto delle parentesi tonde")
let nome = prompt("Inserisci il tuo nome", "Mario")

console.log(nome)

let eta = prompt("Inserisci la tua età", "ad es. 45")

console.log(eta)

console.log(typeof eta)

let accesso = (eta >= 18) ? 'Accesso consentito' : 'Accesso negato'

console.log(accesso)
console.log(Number(eta) + 2)