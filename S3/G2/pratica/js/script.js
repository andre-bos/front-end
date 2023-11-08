/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

       let h1 = document.querySelector('h1')

       const changeTitle = function () {

        h1.innerText = 'La Grande Bellezza'
       }

       changeTitle()

       /* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */
 
       const addClassToTitle = function () {
        h1.className = 'myHeading'
       }

        addClassToTitle()
 
       /* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */

        let divP = document.querySelectorAll('div > p')
 
       const changePcontent = function () {
        divP.forEach(p => {
        p.innerText = 'Javascript è bello';
       })}

       changePcontent()
 
       /* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */
 
       const changeUrls = function () {
        let links = document.querySelectorAll('a:not(footer a)')

        console.log(links)

        links.forEach(link => {
            link.href = 'https://www.google.com'
        })
       }

       changeUrls()
 
       /* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */
 
       const addToTheSecond = function () {
        let liste = document.querySelectorAll('ul')
        let nuovoElemento = document.createElement('li')
        console.log(liste)

        liste[1].appendChild(nuovoElemento)
        nuovoElemento.innerText = 'nuovo elemento'

    }

       addToTheSecond()
 
       /* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
 
       const addParagraph = function () {
        let div = document.querySelectorAll('div')
        let nuovoP = document.createElement('p')
        console.log(nuovoP)
        console.log(div)

        div[0].appendChild(nuovoP).innerText = 'Testo del nuovo paragrafo del primo div'
       }

       addParagraph()
 
       /* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */
 
       /* const hideFirstUl = function () {
        let liste = document.querySelectorAll('ul')
        console.log(liste)

        liste[0].style.display = 'none'
       }

       hideFirstUl() */
 
       /* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
 
       const paintItGreen = function () {
        let liste = document.querySelectorAll('ul')
        liste.forEach(lista => {
            lista.style.backgroundColor = 'green'
        })
       }

       paintItGreen()
 
       /* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
 
       const makeItClickable = function () {
        let titolo = document.querySelector('h1')
        console.log(titolo)

        titolo.innerText = titolo.innerText.slice(0, -1)
       }
 
       /* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
 
       const revealFooterLink = function () {
        let linkFooter = document.querySelectorAll('footer a')
        linkFooter.alert()
       }
 
       /* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */
 
       const generateTable = function () {}
 
       /* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */
 
       const addRow = function () {}
 
       /* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */
 
       const hideAllImages = function () {}
 
       /* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
 
       const changeColorWithRandom = function () {}
 
       /* EXTRA ESERCIZIO 16
       Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
     */
 
       const deleteVowels = function () {}