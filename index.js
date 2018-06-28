class App {
  constructor() {
    this.list = document.querySelector('#flicks')

    this.arr = []
    this.load()

    const form = document.querySelector('form#flickForm')
    form.addEventListener('submit', (ev) => {
      ev.preventDefault()
      this.addItems(ev)
    })
  }

  save() {
    // store the flicks array in localStorage
    localStorage.setItem('arr', JSON.stringify(this.arr))
  }

  load() {
    // load flicks from localStorage
    const arr = JSON.parse(localStorage.getItem('arr'))

    if (arr) {
      // add each flick to the UI
      arr.forEach(flick => this.addFlick(flick))
    }
  }

  renderProperty(name, value) {
    const span = document.createElement('span')
    span.classList.add(name)
    span.textContent = value
    return span
  }

  renderActionButtons(flick, item) {
    const actions = document.createElement('div')
    actions.classList.add('actions')

    // add a delete button
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('remove')
    deleteButton.innerHTML = '<i class="far fa-trash-alt" title="remove flick"></i>'
    deleteButton
      .addEventListener(
        'click',
        (_ev) => this.removeItem(flick, item)
      )
    actions.appendChild(deleteButton)

    // add a favorite button
    const favButton = document.createElement('button')
    favButton.classList.add('fav')
    favButton.innerHTML = '<i class="fas fa-star" title="toggle favorite"></i>'
    favButton
      .addEventListener(
        'click',
        (_ev) => this.markFav(flick, item)
      )
    actions.appendChild(favButton)

    return actions
  }

  renderProperties(flick, item) {
    const div = document.createElement('div')
    div.classList.add('info')

    // get the list of properties
    const properties = Object.keys(flick)

    // loop over the properties
    properties.forEach((propertyName) => {
      // build a span, and append it to the div
      const span = this.renderProperty(propertyName, flick[propertyName])
      div.appendChild(span)
    })

    return div
  }

  renderItem(flick) {
    const item = document.createElement('li')
    item.classList.add('flick')

    // add all the properties
    const properties = this.renderProperties(flick, item)
    item.appendChild(properties)

    // add action buttons
    const actions = this.renderActionButtons(flick, item)
    item.appendChild(actions)

    return item
  }

  markFav(flick, item) {
    // update both the UI and the array
    flick.favorite = item.classList.toggle('fav')

    // update localStorage
    this.save()
  }

  removeItem(flick, item) {
    // remove from the UI
    this.list.removeChild(item)

    // remove from the array
    const i = this.arr.indexOf(flick)
    this.arr.splice(i, 1)

    // update localStorage
    this.save()
  }

  addFlick(flick) {
    this.arr.push(flick)

    const item = this.renderItem(flick)

    // mark it as a favorite, if applicable
    if (flick.favorite) {
      item.classList.add('fav')
    }

    // add it to the DOM
    this.list.appendChild(item)
  }

  addItems(ev) {
    const f = ev.target

    const flick = {
      name: f.flickName.value,
      chris: f.chrisName.value,
      favorite: false,
    }

    this.addFlick(flick)
    this.save()

    f.reset()
    f.flickName.focus()
  }
}

const app = new App()
