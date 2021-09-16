console.log('Hello Count')

var counter = 0
const element = document.getElementById("counter-header");
const $button = document.getElementById("counter-button");
const $button2 = document.getElementById("counter-button2");
const $button3 = document.getElementById("reset")

const incrementFunction = () => {
  counter += 1
  element.innerText = counter
}

const decrementFunction = () => {
  counter -= 1
  element.innerText = counter
}

const resetFunction = () => {
  counter = 0
  element.innerText = counter
}

element.addEventListener("click", incrementFunction)
$button.addEventListener("click", incrementFunction)
$button2.addEventListener("click", decrementFunction)
$button3.addEventListener("click", resetFunction)