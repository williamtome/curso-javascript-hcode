const http = require('http')

const server = http.createServer((req, res) => {
    console.log('URL:',req.url, 'Method',req.method);

    switch (req.url) {
        case '/':
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html')
            res.end('<h1>Olá mundo!</h1>')
            break;
        
        case '/users':
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({
                users: [
                    {
                        name: 'William',
                        email: 'contato@williamtome.dev',
                        id: 1
                    }
                ]
            }))
            break;
    
        default:
            break;
    }
})

server.listen(3000, '127.0.0.1', () => {
    console.log('servidor rodando em http://localhost:3000');
})