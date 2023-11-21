let submitBtn = document.querySelector('form .btn')

submitBtn.addEventListener('click', (evt) => {
    evt.preventDefault()
    let form = document.forms[0]

    let containerLista = document.querySelector('.tasks')

    let lista = document.querySelector('.tasks ul')

    let listItem = document.createElement('li')
    listItem.innerText = form[0].value
    lista.appendChild(listItem)

    let eraseButton = document.createElement('button')
    eraseButton.innerText = 'X'
    let span = document.createElement('span')
    span.appendChild(eraseButton)
    listItem.appendChild(span)

    listItem.addEventListener('click', () => {
        listItem.style.textDecoration = 'line-through'
    })
    containerLista.style.display = 'block'
    form[0].value = ''
})