
//fetch out the count-el id in the HTML
let count = 0
const countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
     count  += 1
    countEl.textContent = count 
}
function decrement(){
 if (count > 0){
  count = count - 1
  countEl.textContent = count
 }
}

function save() {
    saveEl.textContent = saveEl.textContent + count + " - "
    countEl.innerText = 0
    count = 0
}

function cancel() {
  saveEl.textContent = "Previous entries:" 
}




//saveEl.textContent = "Previous entries:"
 // document.getElementById("save-el").remove()
//calculator javascript
let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1 
document.getElementById("num2-el").textContent = num2


let sumEl = document.getElementById("sum-el")

//functions declearation
function add() {
    let results = num1 + num2
  sumEl.textContent = "sum: " + results 
}

function subtract() {
    let results = num1 - num2
  sumEl.textContent = "sum: " + results 
}

function divide() {
    let results = num1 / num2
  sumEl.textContent = "sum: " + results 
}
  
function multiply() {
    let results = num1 * num2
  sumEl.textContent = "sum: " + results 
}



  
