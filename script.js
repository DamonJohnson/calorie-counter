
// Adding a new item
const newButton = document.querySelector('#new-button')

newButton.addEventListener('click', (event) => {
    event.preventDefault()
    let item = window.prompt("Enter item name: ")
    let calories = window.prompt("Enter calories for " + item)
    addItem(item, calories)
})

function addItem(item, calories) {
    const table = document.querySelector('table')
    let newItem = document.createElement('tr')
    newItem.innerHTML =
        `<td>${item}</td>
        <td class='calories'>${calories}</td>
        <td> <button class="edit-button">Edit</button>`
    table.appendChild(newItem)
}

// Edit Item
editButton = document.querySelectorAll('.edit-button').addEventListener('click', editItem)

function editItem() { 
    console.log('ass')
}

// Daily Calorie Total
let total = document.querySelector("#total")
total.textContent = totalCalories()

function totalCalories() {
    const table = document.querySelector('table')
    let totalValue = 0
    for (i = 1; i < table.rows.length; i++) {
        console.log(totalValue += (parseInt(table.rows[i].cells[1].innerHTML)))
    }
    // return totalValue
}