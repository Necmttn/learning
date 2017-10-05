
const  fs = require('fs')

process.on('ReferenceError', (err) => {
  fs.writeSync('node.log', `test ${err}`)
})


create()
