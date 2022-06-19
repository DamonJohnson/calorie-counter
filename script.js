// Adding a new item
const submit = document.querySelector('#submit')
submit.addEventListener('click', addItem)

function addItem(item, calories) {
    event.preventDefault()
    const table = document.querySelector('table')
    let newItem = document.createElement('tr')
    newItem.innerHTML =
        `<td>${item}</td>`
        `<td>${calories}</td>`
}