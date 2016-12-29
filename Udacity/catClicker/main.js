var app = document.getElementById('app')

var SIDEBAR = create(`<div id="sidebar"><h1>SideBar</h1><ul></ul></div>`)
app.appendChild(SIDEBAR)
var sidebar = document.getElementById('sidebar')

var CONTAINER = create(`<div id="container"></div>`)
app.appendChild(CONTAINER)
var container = document.getElementById('container')


var Cats = []

var Cat = (function () {
  function addNewCat (name, img) {
    var count = 0
    var incrCount = function () {
      this.count++
      renderList()
      return console.log(`Cat ${this.name} has been clicked ${this.count}`)
    }
    var decrCount = function () {
      this.count--
      renderList()
      return console.log(`Cat ${this.name} has been clicked ${this.count}`)
    }
    var cat = {
      name: name,
      img: './1.jpg',
      count: count,
      incrCount: incrCount,
      decrCount: decrCount
    }
    Cats.push(cat)
    renderList()
  }

  function renderCat (cat) {
    if (!cat) {
      console.log('currently you dont have a cat')
    } else {
      container.innerHTML = ''
      var newDiv = document.createElement('div')
      newDiv.id = 'cat'
      var newName = document.createElement('h1')
      newName.id = `name`
      newName.innerHTML = cat.name
      var newImg = document.createElement('img')
      newImg.src = cat.img
      var newCount = document.createElement('span')

      newCount.innerText = cat.count
      newDiv.appendChild(newName)
      newDiv.appendChild(newImg)
      newDiv.appendChild(newCount)
      newImg.addEventListener('click', function () {
        cat.incrCount()
        renderCat(cat)
      })
      container.appendChild(newDiv)
    }
  }

  function renderList () {
    sidebar.childNodes[1].innerHTML = ''
    Cats.map(cat => {
      console.log(cat)
      var catList = create(`<li>${cat.name}    <span>${cat.count}</span></li>`)
      var catListInput = catList.appendChild(document.createElement('input'))
      catListInput.type = 'checkbox'
      catListInput.addEventListener('click', function (e) {
        console.log('Clicked')
        renderCat(cat)
      })
      console.log(catList)
      // var newListItem = document.createElement('li');
      //   newListItem.innerHTML = cat.name
      //   newDiv.appendChild(newListItem)
      sidebar.childNodes[1].insertBefore(catList, sidebar.childNodes[1].nextSibling)
    })
  }
  // renderCat(Cats[0])
  return {
    addNewCat,
    renderCat
  }
})()
Cat = window.Cat

function create (htmlStr) {
  var frag = document.createDocumentFragment()
  var temp = document.createElement('div')
  temp.innerHTML = htmlStr
  while (temp.firstChild) {
    frag.appendChild(temp.firstChild)
  }
  return frag
}




Cat.addNewCat('Neco')
Cat.addNewCat('Zihan')
