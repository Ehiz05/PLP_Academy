// import http package
const http = require('http')

// create server
const server = http.createServer( (request, response) => {
    if(request.url == '/'){
        response.writeHead(200, { 'Content-Type' : 'text/plain' })
        response.end('Welcome to the homepage')
    } else if(request.url === '/contact-us') {
        response.writeHead(200, { 'Content-Type' : 'text/plain'})
        response.end('Page not found!')
    }
    
})

// declare a port variable
const port = 5500

// start your server
server.listen(port, () => {
    console.log('Server is running successfully.');
})