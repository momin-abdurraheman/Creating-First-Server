const http = require('http');

const port = 8081;

// It is list we want to print 
const toDOList = ["Complete Node Byte", "Play Cricket"];
http
    .createServer((req, res) => {
        const { method, url } = req;
        if (url === "/todos") {
            if (method === "GET") {
                res.writeHead(200);
                res.write(toDOList.toString());

            }
            else if (method === "POST") {
                let body = "";
                req.on('error', (err) => {
                    console.error(err);
                }).on('data', (chunk) => {
                    body += chunk;
                    console.log(chunk);
                }).on('end', () => { 
                    body = JSON.parse(body);
                    console.log("Data : ", body);
                })
            }
            else {
                res.writeHead(501);
            }
        }
        else {
            res.writeHead(404);
        }
        res.end();
    })
    .listen(port, () => {
        console.log(`nodejs server started on port ${port}`)
    })
