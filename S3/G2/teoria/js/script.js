//Tutte le funzionalità messe a disposizione dal browser

console.log(window)

// Tutte le proprietà del documento

console.log(window.document)

let h1 = window.document.getElementById('titolo')
h1.style.textDecoration = "underline"

let p = document.getElementsByClassName('txt')
let a = document.getElementsByTagName('a')

a[0].style.color = 'red'
a[1].style.color = 'green'
a[2].style.color = 'yellow'
console.log(p)
console.log(a)

console.log(h1)
console.dir(h1)
console.log(h1.innerText = 'testo modificato')

let p1 = document.querySelector('.txt')