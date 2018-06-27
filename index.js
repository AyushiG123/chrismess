class App{
  constructor(){
    const form = document.querySelector('form#flickForm')
    form.addEventListener('submit', (ev) =>{
      ev.preventDefault()
      this.handleSubmit(ev)
    })
    this.arr=[]
  }


renderProperty(name, value) {
  const span = document.createElement('span')
  span.classList.add(name)
  span.textContent = value
  return span
}

renderItem(flick) { 
    const item = document.createElement('li')
    item.classList.add('flick')
  
    // get the list of properties
    const properties = Object.keys(flick)
   
    // loop over the properties
    properties.forEach((propertyName)=> {
      // build a span, and append it to the list
      const span = this.renderProperty(propertyName, flick[propertyName])
      item.appendChild(span)
    })
  
   return item
  }

handleSubmit(event){
  const f = event.target

  const flick ={
    name: f.flickName.value,
    chris: f.chrisName.value,
  }
  this.arr.push(flick)
  console.log(this.arr)
  const item = this.renderItem(flick)

  const list = document.querySelector('#flicks')
  list.appendChild(item)

  //delete an item
  var i=0
  const button = document.createElement("button")
  button.innerHTML = "delete"
  item.appendChild(button)
  button.addEventListener('click', removeItem)

  function removeItem(){
    const ul = document.getElementById("flicks")
    while(ul.childNodes){
     ul.removeChild(item)
     i++
  }
  this.arr.splice(i, 1)
  console.log(this.arr)
}
  //add a favourite
  const button2 = document.createElement('button')
  button2.innerHTML = "Add to favourites"
  item.appendChild(button2)

  f.reset()
  f.flickName.focus()
}
}
const app = new App()