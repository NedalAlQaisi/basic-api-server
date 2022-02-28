"use strict";


const express = require("express");

const cors = require("cors");

//Middlewares
const logger = require("./middleware/logger.js");

//Error
const notFound = require("./error-handlers/404.js");
const serverError = require("./error-handlers/500.js");

//Routes
const personRoute = require("./routes/person.js");
const foodRoute = require("./routes/food.js");


const app = express();

app.use(express.json());

app.use(cors());


app.use(logger);

app.use(personRoute);

app.use(foodRoute);


//The port
function start(port) {
    app.listen(port, () => {
        console.log(`The on port ${port}`);
    });
}

//home Page 
app.get("/", (req, res) => {
    res.send("Hello");
});


app.use("*", notFound);
app.use(serverError);



module.exports = {
    app: app,
    start: start,
};