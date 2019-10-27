const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Greetings</title><head>');
        res.write('<body><h1>Welcome to the page!</h1>')
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Greetings</title><head>');
        res.write('<body><h1>Users</h1>')
        res.write('<ul><li>Geronimo</li><li>Chris</li><li>Greg</li></ul>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if(url == '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            fs.writeFile('username.txt', username, err => {
            return res.end();
            });
        })
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Other</title><head>');
    res.write('<html><h1>Other</h1></html>')
    res.write('</html>');
    res.end();

    
});



server.listen(3000);