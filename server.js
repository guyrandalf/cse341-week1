const express = require("express");
const app = express();
const lesson1Controller = require('./controllers/lesson1')

app.get("/", lesson1Controller.greetMe);
app.get("/noon", lesson1Controller.greetNoon);

const PORT = process.env.port || 3000;

app.listen(PORT);
console.log(`Web server running on port: ${PORT}`);
