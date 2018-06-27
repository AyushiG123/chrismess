class App{
  constructor(){
    const form = document.querySelector('form#flickForm')
    form.addEventListener('submit', (ev) =>{
      ev.preventDefault()
      this.addItems(ev)
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

addItems(event){
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
  const button = document.createElement("button")
  button.innerHTML = "delete"
  item.appendChild(button)
  button.addEventListener('click', removeItem)

  function removeItem(){
    const ul = document.getElementById("flicks")
    if(ul.childNodes){
     ul.removeChild(item)
  }
}
  f.reset()
  f.flickName.focus()
}
}
const app = new App()