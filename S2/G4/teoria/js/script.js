/* // Dichiarazione di funzione

function miaFunzione(params1, params2) {
    // Istruzionida eseguire
}

// Invocazione di funzione

miaFunzione(); */

// Funzioni espressione

let ExprFunc =

function printString() {
    console.log("Hello World!")
}

printString()

function somma(x, y) {
    let sum = (x + y)/ 2
    // console.log(sum)
    return sum
}

let res = somma(45, 2)

console.log(res)

function calculator() {
    let result = 0
    for(i = 0; i < arguments.length; i++) {
        result += arguments[i]
    }

    return result
}

let r = calculator(50, 30, 20, 25)

console.log(r)

