const http = require('http');

// This server will communicate at port 8081
const port = 8081;

http.createServer((request, response) => {
    // Whenever we send user a data with it we send a code which means something 
    // Like in below line 200 means successful
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1> Hello, this is from my server </h1>");
    response.end();

}).listen(port, () => {
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