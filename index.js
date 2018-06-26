const button1 = document.querySelector('button')
const button2 = document.querySelector('button.dragon')
const form = document.querySelector('form#flickForm')

const changeHeading1 = function(){
  const h1 = document.querySelector('h1')
  h1.textContent = 'Merry'
}

const changeHeading2 = function(){
  const h2 = document.querySelector('h1.fire')
  h2.textContent = 'Christmas'
}

const changeHeading3 = function(event){
  event.preventDefault()
  const f = event.target
  const h3 = document.querySelector('h1')
  h3.textContent = f.value
}
button1.addEventListener('click', changeHeading1)
button2.addEventListener('click', changeHeading2)
form.addEventListener('submit', changeHeading3)