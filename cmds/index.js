const path = require('path')

// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
require('babel-register')({
    presets: [ 'env' ]
})

// Import the rest of our application.
// module.exports = require('./resize-images.js')

const file = `${process.argv[2]}\\index.js`
const filePath = path.join(process.cwd(), file)
module.exports = require(filePath)

