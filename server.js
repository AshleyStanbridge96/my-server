const http = require('http')  // require built-in Node.js http package

// Use hosting values if available, otherwise default 
const hostname = process.env.hostname || '0.0.0.0' // allow remote access
const port = process.env.PORT || 3001

// define our server
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.write('Hello person reading this!\n')
  res.write('... I hope you are reading this\n')
  res.end('Okay, goodbye!\n')
})

// start listening
// use the server console to tell user where to find the server
// use backticks for template literals with embedded expressions
server.listen(port, hostname, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
