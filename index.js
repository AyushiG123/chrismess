
const form = document.querySelector('form#flickForm')

const  addItems= function(event){
  event.preventDefault()
  const f = event.target

  const flicksDiv = document.querySelector('#flicks1')
  flicksDiv.textContent += ' '+f.flickName1.value

  const flicksDiv2 = document.querySelector('#flicks2')
  flicksDiv2.textContent += ' '+f.flickName2.value

  f.reset()
}

form.addEventListener('submit', addItems)