//Package import-->this http package means u need a server of 
// http type and then we r storing this package in a variable 
// for further use 
const http = require('http');

// This server will communicate at port 8081
const port = 8081;//Local port number

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
                }).on('data', (chunk) => {//Data travels in form of chunk(pieces of JSON file) not in JSON file so that bugs can be easily fixed also it is also better in terms of speed.
                    // SO now when we recieve pieces of chunk from browser to mein server we have to assemble them again in so we r storing in body variable below is code for that
                    body += chunk;
                    console.log(chunk);
                }).on('end', () => { //After the process is end we copy the body data into JSON File
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
    .listen(port, () => {//callback function 
        //made for third parties to access the server on local 
        // host using port 
        console.log(`nodejs server started on port ${port}`)
    })

/*
Below Line means that when you make the above server you can communicate with it
on Link given below
http://Localhost:8081
Open above line in any server it will respond with h1 message which is inside write




Now if u want to create shortcut for node server.js u can create in setup
or configuration file that is package.json in which term known as script

write this below lines of code in package.JSON and then whenever u want to start the 
server open terminal and write npm start
"scripts": {
    // if u want to give it another shortcut name then start then in terminal
    // u have to write npm run (Ur shortcut Name)
    "start": "node server.js"
  },

*/