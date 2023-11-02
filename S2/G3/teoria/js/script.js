// Costrutto IF

/* if(condizione) {

} else if(condizione) {

} else if(condizione) {

} else {

} */

// Quando ho più di 3/4 "else if", uso il costrutto switch

let giornoSettimana = 1

// if(giornoSettimana === 1) {
//     console.log("Oggi è lunedì")
// } else if(giornoSettimana === 2) {
//     console.log("Oggi è martedì")
// } else if(giornoSettimana === 3) {
//     console.log("Oggi è mercoledì")
// } else if(giornoSettimana === 4) {
//     console.log("Oggi è giovedì")
// } else if(giornoSettimana === 5) {
//     console.log("Oggi è venerdì")
// }
// else if(giornoSettimana === 6) {
//     console.log("Oggi è sabato")
// } else if(giornoSettimana === 7) {
//     console.log("Oggi è domenica")
// } else {
//     console.log("Valore errato")
// }

switch(giornoSettimana) {
    case 1: console.log("Oggi è lunedì"); break;
    case 2: console.log("Oggi è martedì"); break;
    case 3: console.log("Oggi è mercoledì"); break;
    case 4: console.log("Oggi è mercoledì"); break;
    case 5: console.log("Oggi è mercoledì"); break;
    case 6: console.log("Oggi è sabato"); break;
    case 7: console.log("Oggi è domenica"); break;
    default: console.log("Valore errato"); break;
}

// Costrutti iterativi

// Ciclo while

let val = 5
val++

console.log(val)

let count = 30

while(count > 0) {
    console.log("Ciao")
    count--
}

while(true) {
    let v = prompt('Inserisci un valore o end per terminare')

    if(v === 'end') {
        break
    }

    console.log(v)
}