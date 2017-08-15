const fs = require('fs')

var array = [1,2,3,43,5,6,6,7]



function log(args) {
  console.log(args)
  fs.appendFile('log.txt', 'LOG: ' + args, 'utf8', function (err) {
    if (err) throw err;
    console.log('log updated')
  })
}



array.map(function(item) {
  log('test: ' + item)
})

