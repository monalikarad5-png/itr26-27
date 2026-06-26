// console.log("hello world! hiii I am a student");
//here the import statement is used to import the express module, which is a web framework for Node.js. The morgan module is also imported, which is a middleware for logging HTTP requests.
const express = require("express");

const morgan = require("morgan");


//here the server setup is done using the express() function, which creates an instance of an Express application. The morgan middleware is used to log HTTP requests in the console. Finally, the server is set to listen on port 3000, and a message is logged to the console when the server starts running.
const server = express(); 

//here all server configurations are done, like using morgan middleware for logging HTTP requests in the console. The server is set to listen on port 3000, and a message is logged to the console when the server starts running.
server.use(morgan("dev"));
// server.use(express.json());

//here server routes are defined using the server.get() method. The first route is the root route ("/"), which sends a response of "Hello World!" when accessed. The second route is "/api/products", which sends a JSON response containing an array of product objects when accessed.
server.get("/", (req, res) => {
  res.send("Hello World!");
});
server.get("/api/student", (request, response) => {
    response.json({ message: "Hii I am a student" });
});

// /GET /PUT /POST /DELETE /PATCH THESE ARE CRUD OPERATIONS
//EX OF POST REQUEST
server.post("/api/student", (request, response) => {
    const { name, age } = request.body;
    response.json({ message: `Student ${name} of age ${age} added successfully` });
  });

//here the server is set to listen on port 3000, and a message is logged to the console when the server starts running.
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
