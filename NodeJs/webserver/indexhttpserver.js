const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    // check for GET method and /product URL path
    if (req.method === 'GET' && req.url.startsWith('/product/')) {
        const id = req.url.split('/')[2];
        const product = products.find(p => p.id === (+id));
        console.log(product);
        res.setHeader('Content-Type', 'text/html');
        let modifiedIndex = index.replace('**title**', product.title)
            .replace('**url**', product.thumbnail)
            .replace('**price**', product.price)
            .replace('**rating**', product.rating);
        res.end(modifiedIndex);
        return;
    }

    // check for POST method and /api URL path
    if (req.method === 'POST' && req.url === '/api') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const parsedBody = JSON.parse(body);
            console.log(parsedBody);
            data.products.push(parsedBody);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
        });
        return;
    }

    // default routing logic
    switch (req.url) {
        case '/':
            res.setHeader('Content-Type', 'text/html');
            res.end(index);
            break;
        case '/api':
            // handle GET requests to /api URL path
            if (req.method === 'GET') {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data));
            } else {
                res.writeHead(405, { 'Allow': 'GET, POST' });
                res.end();
            }
            break;
        default:
            res.writeHead(404);
            res.end();
    }
    console.log('server started');

});

server.listen(8080);