(function () {
  var model = {
    init: function () {
      if (!localStorage.cats) {
        localStorage.cats = JSON.stringify([])
      }
    },
    add: function (obj) {
      var data = JSON.parse(localStorage.cats)
      data.push(obj)
      localStorage.cats = JSON.stringify(data)
    },
    getAllCats: function () {
      return JSON.parse(localStorage.cats)
    },
    getCat: function (id) {
      return JSON.parse(localStorage.cats).filter(function (cat) { return cat.id === id })
    }
  }

  var octopus = {
    addNewCat: function (name) {
      model.add({
        id: (Math.random() * 42),
        name: name,
        date: Date.now(),
        img: './1.jpg',
        count: 0
      })
    },

    getCat: function (id) {
      return model.getCat(id)
    },

    getAllCats: function () {
      return model.getAllCats()
    },

    init: function () {
      model.init()
      view.init()
    }
  }

  var view = {
    init: function () {
      this.app = document.getElementById('app')
      this.sidebar = document.getElementById('sidebar')
      var newCatInput = document.getElementById('new-cat-form')
      this.container = document.getElementById('container')
      newCatInput.submit(function (e) {
        octopus.addNewCat(newCatInput.val())
        newCatInput.val('')
        e.preventDefault()
      })
      view.renderContainer()
      view.renderList()
    },

    renderContainer: function () {
      var htmlStr = ''
      octopus.getCat().forEach(function (cat) {
        htmlStr += '<div id="cat">' +
        '<h1>' + cat.name + '</h1>' +
        '<img src="' + cat.img + '">' +
        '</div>'
      })
      this.container.html(htmlStr)
    },

    renderList: function () {
      var htmlStr = ''
      octopus.getAllCats().forEach(function (cat) {
        htmlStr += '<li class="note">' +
          cat.name + '<input type="checkbox" />' + '</li>'
      })
      this.sidebar.childNodes[1].html(htmlStr)
    },

    create: function (htmlStr) {
      var frag = document.createDocumentFragment()
      var temp = document.createElement('div')
      temp.innerHTML = htmlStr
      while (temp.firstChild) {
        frag.appendChild(temp.firstChild)
      }
      return frag
    }
  }

  octopus.init()
})()
