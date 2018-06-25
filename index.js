const button1 = document.querySelector('button')
const button2 = document.querySelector('button.dragon')

const changeHeading1 = function(){
  const h1 = document.querySelector('h1')
  h1.textContent = 'Merry'
}

const changeHeading2 = function(){
  const h2 = document.querySelector('h1.fire')
  h2.textContent = 'Christmas'
}

const changeHeading3 = function(event){
  var form = document.querySelector("#textBox")
  const h3 = document.querySelector('h1')
  h3.textContent = form.value
  event.preventDefault()
}
button1.addEventListener('click', changeHeading1)
button2.addEventListener('click', changeHeading2)
