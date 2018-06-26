
const form = document.querySelector('form#flickForm')

const  addItems= function(event){
  event.preventDefault()
  const f = event.target

  const flickName = f.flickName1.value
  const aFlickName = f.flickName2.value
  const item1 = document.createElement('li')
  const item2 = document.createElement('li')
  item1.textContent = flickName
  item2.textContent = aFlickName

  const list = document.querySelector('#flicks')
  if(aFlickName=='')
  list.appendChild(item1)
  else if(flickName=='')
  list.appendChild(item2)
  else
  {
    list.appendChild(item1)
    list.appendChild(item2)
  }
  f.reset()
}

form.addEventListener('submit', addItems)