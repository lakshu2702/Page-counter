let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")

let count = 0
let total = 0

function increment() {
    count += 1
    countEl.innerText = count
}

totalEl.innerText = "Total pages read: 0"

function save() {
    let countstring = count + " - "
    saveEl.textContent += countstring
    total += count
    totalEl.innerText = "Total pages read: " + total
    countEl.innerText = 0
    count = 0
}

//innerText will return only human readable content therefore wont return empty spaces
//textContent will return the whole text