const express = require('express');

//Initialization
//Store all functionality of express in single variable so with the 
//help of it we can do all functions of express.

let app = express();

//Whatever transfer of data will happen between server and browser
//it will be of type JSON

app.use(express.json());


const port = 8081;

const toDoList = ["Complete Node Byte ", "Play Cricket "];

//I want to make a get request that should be served as 
// /todos like https://Localhost:8081/todos

app.get("/todos", (req, res) => {
    //Callback i.e whenever someone make a get request we will have
    // request data and we will send some response
    res.status(200).send(toDoList);
})
//http://Localhost:8081/todos
app.post("/todos", (req, res) => {
    // Callback function
    let newToDoItem = req.body.item;
    toDoList.push(newToDoItem);
    res.status(201).send({
        message: "Task added successfully"
    });
});

app.delete("/todos", (req, res) => {
    // Callback
    const itemToDelete = req.body.item;
    toDoList.find((element, index) => {
        if (element === itemToDelete) {
            toDoList.splice(index, 1)
        }
    });

    res.status(202).send({
        message: `Deleted "${req.body.item}"`
    })
});


// Just some additional examples
// app.get("/todos/create")
// app.post("todos/create")

// if u make other than get,post or delete request
app.all("/todos", (req, res) => {
    res.status(501).send()
})

// If u  want to go to any other route than /todos u will get error 404
app.all("*", (req, res) => {
    res.status(404).send()
})

// Now when u want to start Server 
app.listen(port, () => {
    // Callback when server starts
    console.log(`nodejs server started on port ${port}`);
})