let tabellone = document.querySelector('#tabellone')
let schedina = document.querySelector('#schedina')

let numSchedine = prompt('Con quante tabelline vuoi giocare?', 'Inserisci il numero')

let numeriEstratti = []

console.log(numeriEstratti)

function creaTabellone(numSchedine) {

    for(let i = 1; i<=76; i++) {
        let cella = document.createElement('div')
        
        let h2 = document.createElement('h2')
        tabellone.appendChild(cella)
        cella.appendChild(h2)

        h2.innerText = i

    }

    for(let j = 0; j < numSchedine; j++) {
        let schedina = document.createElement('div')
        schedina.id = 'schedina' + (j + 1)
        document.body.appendChild(schedina)

        for(let k = 1; k <= 24; k++) {
            let cella = document.createElement('div')
            let h2 = document.createElement('h2')
            schedina.appendChild(cella)
            cella.appendChild(h2)

            h2.innerText = Math.floor(Math.random() * 76) + 1
        }
    }
        
}

function numeroRandom() {
    let estrattore = document.querySelector('#estrattore')

    estrattore.addEventListener('click', () => {
        let numR;
        do {
            numR = Math.floor(Math.random() * 76) + 1;
        } while (numeriEstratti.includes(numR))
        checkNumero(numR)
    })
}

function checkNumero(num) {
    let numeriTabellone = document.querySelectorAll('#tabellone div h2')

    numeriTabellone.forEach(numeroTabellone => {
        if(Number(numeroTabellone.innerText) === num) {
            numeroTabellone.parentElement.classList.add('numero-estratto')
            numeriEstratti.push(num)
        }
    })

    
}

creaTabellone(1)
numeroRandom()